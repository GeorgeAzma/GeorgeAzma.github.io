precision highp float;

uniform float time;
uniform vec2 resolution;

const float SMOOTHNESS = 0.5;
const vec3 BLOB_COL_BASE = vec3(1.0, 0.11, 0.8);
const vec3 BLOB_COL_GLOW = vec3(1.0, 0.9, 0.0);
const float ROWS = 6.0;

float smin(float a, float b, float k) {
    float h = max(k - abs(a - b), 0.0);
    return min(a, b) - h * h / k * 0.25;
}

vec4 perm(vec4 x) { x *= x * 34.0 + 1.0; return x - floor(x / 289.0) * 289.0; }

float noise(vec3 p) {
    vec3 a = floor(p);
    vec3 d = p - a;
    d = d * d * (3.0 - 2.0 * d);

    vec4 b = a.xxyy + vec4(0, 1, 0, 1);
    vec4 k1 = perm(b.xyxy);
    vec4 k2 = perm(k1.xyxy + b.zzww);

    vec4 c = k2 + a.z;
    vec4 k3 = perm(c);
    vec4 k4 = perm(c + 1.0);

    vec4 o1 = fract(k3 * 0.02439024);
    vec4 o2 = fract(k4 * 0.02439024);

    vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

    return o4.y * d.y + o4.x * (1.0 - d.y);
}

float hash11(float p) {
    p = fract(p * 0.1031);
    p *= p + 33.33;
    return fract(p * p * 2.0);
}

float noise1d(float p)  {
	float fl = floor(p);
	float fc = fract(p);
	return mix(hash11(fl), hash11(fl + 1.0), fc);
}

float blob(vec2 uv, float n, float i) { 
    float r = noise1d(i + time * 0.1) * 1.2 + 0.4 * max(resolution.x / resolution.y, resolution.y / resolution.x);    
    float t = fract((time * 0.015 + i * 84.7291) / (1.0 + hash11(i + ROWS)));
    vec2 pos = vec2(i * max(1.0, resolution.x / resolution.y) * 0.8, 
                   (smoothstep(0.0, 0.4, t) * smoothstep(0.8, 0.5, t) * 2.0 - 1.0) * (ROWS - 1.0) * resolution.y / min(resolution.x, resolution.y));
    return length(uv - pos + n) - r;
}

float sdf(vec2 uv, float n) {
    float d = 9999.9;
    for (float i = -ROWS; i <= ROWS; ++i) {
        d = smin(d, blob(uv, n, i), SMOOTHNESS);
    }
    return d;
}

float specular(vec3 light_dir, vec3 normal) {
    vec3 halfway = normalize(light_dir + vec3(0, 0, -3));
    float s = dot(normal, halfway);
    s *= s * s;
    return s * s;
}

vec3 getNormal(vec2 uv, float d, float n) {
    vec2 e = vec2(12, 0);
    float nx = d - sdf(uv + e.xy, n);
    float ny = d - sdf(uv + e.yx, n);
    return normalize(vec3(nx, ny, e.x * 2.0));
}

void main() {
    float min_res = min(resolution.x, resolution.y);
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min_res * ROWS;
    
    float n2 = noise(vec3((gl_FragCoord.xy * 2.0 - resolution.xy) / min_res * 5.0, time * 0.1) * 0.7) * 0.7;
    float d = sdf(uv, n2); 
    vec3 background = BLOB_COL_BASE * 1.0 / (5.0 + d);
    if (d > 0.0) {
        gl_FragColor = vec4(background, 1);
        return;
    }
    vec3 n = getNormal(uv, d, n2);
    float m = smoothstep(0.0, -16.0 / min_res, d);
    vec3 uvn = normalize(vec3(gl_FragCoord.xy / resolution.xy * 2.0 - 1.0, 3));
    float spec = max(0.0, uvn.y) * specular(vec3(uvn.x, -3, 0), n);
    spec += min(1.0, 1.0 - uvn.y) * specular(vec3(uvn.x, 3, 0), n);
    spec /= (spec + 3.0) * 0.2;

    vec3 col = spec * spec * (BLOB_COL_GLOW * 0.3 + 0.7) + mix(BLOB_COL_BASE, BLOB_COL_GLOW, spec);
    col -= max(0.0, 1.0 - sqrt(sqrt(-d))) * 0.7;
    gl_FragColor = vec4(mix(background, col, m), 1);
}