precision lowp float;

uniform float time;
uniform vec2 resolution;

const float TAU = 6.28318530718;

float rand(vec2 n) { 
	return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p) {
	vec2 ip = floor(p);
	vec2 u = fract(p);
	u = u*u*(3.0-2.0*u);
	
	float res = mix(
		mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
		mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
	return res*res;	
}

float fbm(vec2 p) {
	float s = 0.0;
	float m = 0.0;
	float a = 0.5;
	
	s += a * noise(p);
	m += a;
	a *= 0.5;
	p *= 2.0;
	
	s += a * noise(p);
	m += a;
	a *= 0.5;
	p *= 2.0;
    
	return s / m;
}

vec3 pal(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
    return a + b * (2.0 * sqrt(0.5 + 0.5 * cos(TAU * (c * t + d))) - 1.0);
}

void main() {
    float min_res = min(resolution.x, resolution.y);
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min_res * 1.5;
    float t = time;

    float l = dot(uv, uv);
    gl_FragColor = vec4(0);
	float r = 4.0 / min_res;
    float sm = smoothstep(1.0 + r, 1.0 - r, l);
    float sm2 = smoothstep(1.0, 1.0 - r * 2., l);
    float d = sm * l * l * l * 2.0;
    vec3 norm = normalize(vec3(uv, 1. - d));
    float a = atan(uv.y, uv.x) / TAU + t * 0.1;
    vec3 col = pal(a, vec3(0.3),vec3(0.5),vec3(1),vec3(0.0,0.8,0.8));
    vec3 cd = abs(col);
    vec3 c = col;
    c += l * max(0.0, l - 0.5 * dot(c, c));
    c += 0.3 * noise(uv * 3.0 / (1. + norm.z * norm.z * norm.z * 2.0));
    col = c + col * pow((1.0 - sm - pow(max(0.0, length(uv) - 1.0), 0.2)) * 2.0, 4.0);
    float f = fbm(normalize(uv + 1e-5) * 2. + t) + 0.1;
    uv *= f + 0.1;
    uv *= 0.5;
    l = dot(uv, uv);
    vec3 ins = normalize(cd);
    float ind = 0.2 + pow(smoothstep(0.0, 1.5, sqrt(l)) * 48.0, 0.25);
    ind *= ind * ind * ind;
    ind = 1.0 / ind;
    ins *= ind;
	float m = sm * smoothstep(0.7, 1.0, ind);
    col += ins * ins * m;
	col -= 0.7 * ins * m;
    col += abs(norm) * (1.0 - d) * 0.5;
	float alpha = length(col) * d + m + (1. - d) * 0.3;
    gl_FragColor = vec4(mix(vec3(1, 1, 1), col, alpha * sm2), 1);
}