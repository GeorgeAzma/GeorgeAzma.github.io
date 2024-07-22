precision lowp float;

uniform float time;
uniform vec2 resolution;

const float SMOOTHNESS = 0.5;
const vec3 BLOB_COL_BASE = vec3(1.0, 0.11, 0.8);
const vec3 BLOB_COL_GLOW = vec3(1.0, 0.9, 0.0);
const float ROWS = 6.0;

float smin(float a, float b, float k)
{
    float h = max(k-abs(a-b), 0.0)/k;
    return min(a, b) - h*h*k*(1.0/4.0);
}

float rand(int i, float lo, float hi) {
    return (hi - lo) * 0.5 * (sin(float(997*i)) + 1.) + lo;
}

vec4 perm(vec4 x) { x = ((x * 34.0) + 1.0) * x; return x - floor(x * (1.0 / 289.0)) * 289.0; }

float noise(vec3 p)
{
    vec3 a = floor(p);
    vec3 d = p - a;
    d = d * d * (3.0 - 2.0 * d);

    vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
    vec4 k1 = perm(b.xyxy);
    vec4 k2 = perm(k1.xyxy + b.zzww);

    vec4 c = k2 + a.zzzz;
    vec4 k3 = perm(c);
    vec4 k4 = perm(c + 1.0);

    vec4 o1 = fract(k3 * 0.02439024);
    vec4 o2 = fract(k4 * 0.02439024);

    vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

    return o4.y * d.y + o4.x * (1.0 - d.y);
}

float rand1d(float n) { return fract(sin(n) * 43758.5453123); }

float noise1d(float p) 
{
	float fl = floor(p);
	float fc = fract(p);
	return mix(rand1d(fl), rand1d(fl + 1.0), fc);
}

float blob(vec2 uv, vec2 pos, float n, float radius, float period, int index) 
{ 
    float time = time * 0.3 + float(index) * 684.7291;
    int i = int(time / period);
    float t = mod(time, period) / period;
    
    pos.y = smoothstep(0., .4, t)*2.-1.;
    pos.y = mix(pos.y, -1., smoothstep(.5, .8, t)) * (ROWS - 1.0);
    
    //pos.x = pos.x - (noise1d(time * .25 + float(index) * 363.7543)*2.-1.) * ROWS;
    
    vec2 p = uv - pos + n;
    return length(p) - radius;
}

float sdf(vec2 uv) 
{
    float d = 9999999.;
    float n = noise(vec3(uv, time * .2) * 0.7) * 0.7;
    for (float i = -ROWS; i <= ROWS; i += 1.0) 
    {
        float r = noise1d(i+time*0.2);
        d = smin(d, blob(uv, vec2(i * resolution.x / resolution.y * 0.8, 0.0), n, (0.7 + r*2.) * 0.8, 8.0 + abs(rand1d(i)) * 8.0, int(i)), SMOOTHNESS);
    }
    return d;
}

float specular(vec3 light_dir, vec3 normal) {
    light_dir = normalize(light_dir);
    vec3 view_dir = vec3(0,0,-1);
    vec3 halfway = normalize(light_dir + view_dir);
    float s = max(0.0, dot(normal, halfway));
    return s * s * s * s * s * s;
}

vec3 getNormal(vec2 uv) {
    vec2 e = vec2(8.0, 0);
    float nx = (sdf(uv - e.xy) - sdf(uv + e.xy)) / (2.0 * e.x);
    float ny = (sdf(uv - e.yx) - sdf(uv + e.yx)) / (2.0 * e.x);
    vec3 n = normalize(vec3(nx, ny, -1.));
    return n;
}

void main() {
    float min_res = min(resolution.x, resolution.y);
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min_res * ROWS;
    vec3 uvn = normalize(vec3(uv, 1.0));
    
    float d = sdf(uv); 
    vec3 n = getNormal(uv);
    float m = smoothstep(0.0, 0.0 - (1.0 / resolution.y) * 2., d);
    float s = noise(vec3(uv, time * .5 + 630.737551) * 1.0) * 0.5;
    float spec = max(0.0, uvn.y) * specular(vec3(uvn.x,-3.,0.0), n);
    spec += min(1.0, 1.-uvn.y) * specular(vec3(uvn.x,3.,0.0), n);
    spec = spec / (spec + 1.0) * 1.5;
    vec3 col = spec * spec * (BLOB_COL_GLOW * 0.3 + 0.7) + mix(BLOB_COL_BASE, BLOB_COL_GLOW, spec);
    col -= max(0.0, 1.- pow(abs(-d), 0.25)) * 0.7;
    gl_FragColor = vec4(col * m + BLOB_COL_BASE * (1.0 - m) / (6.0 + d), 1.0);
}