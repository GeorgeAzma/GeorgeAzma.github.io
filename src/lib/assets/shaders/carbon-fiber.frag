#version 300 es

precision mediump float;

uniform float time;
uniform vec2 resolution;

out vec4 fragColor;

#define INVERT 1

float noise(vec2 p) {
    return smoothstep(-0.5, 0.9, sin((p.x - p.y) * 555.0) * sin(p.y * 1444.0)) - 0.4;
}

float fabric(vec2 p) {
    const mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
    float f = 0.4 * noise(p);
    f += 0.3 * noise(p = m * p);
    f += 0.2 * noise(p = m * p);
    return f + 0.1 * noise(m * p);
}

float silk(vec2 uv, float t) {
    float s = sin(5.0 * (uv.x + uv.y + cos(2.0 * uv.x + 5.0 * uv.y)) + sin(12.0 * (uv.x + uv.y)) - t);
    s = 0.7 + 0.3 * (s * s * 0.5 + s);
    s *= 0.9 + 0.6 * fabric(uv * min(resolution.x, resolution.y) * 0.0005);
    return s * 0.9 + 0.1;
}

float silkd(vec2 uv, float t) {
    float xy = uv.x + uv.y;
    float d = (5.0 * (1.0 - 2.0 * sin(2.0 * uv.x + 5.0 * uv.y)) + 12.0 * cos(12.0 * xy)) * cos(5.0 * (cos(2.0 * uv.x + 5.0 * uv.y) + xy) + sin(12.0 * xy) - t);
    return 0.005 * d * (sign(d) + 3.0);
}

void main() {
    float mr = min(resolution.x, resolution.y);
    vec2 uv = gl_FragCoord.xy / mr;
    
    float t = time;
    uv.y += 0.03 * sin(8.0 * uv.x - t);
    
    float s = sqrt(silk(uv, t));
    float d = silkd(uv, t);
	
    vec3 c = vec3(s);
    c += 0.7 * vec3(1, 0.83, 0.6) * d;
    c *= 1.0 - max(0.0, 0.8 * d);
#if INVERT
    c = pow(c, 0.3 / vec3(0.52, 0.5, 0.4));
    c = 1.0 - c;
#else
    c = pow(c, vec3(0.52, 0.5, 0.4));
#endif

    fragColor = vec4(c, 1);
}