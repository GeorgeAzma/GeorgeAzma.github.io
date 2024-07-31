#version 300 es

precision highp float;

uniform float time;
uniform vec2 resolution;

out vec4 fragColor;

void main() {
    float mr = min(resolution.x, resolution.y);
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / mr;

    float d = -time * 0.5;
    float a = 0.0;
    for (float i = 0.0; i < 8.0; ++i) {
        a += cos(i - d - a * uv.x);
        d += sin(uv.y * i + a);
    }
    d += time * 0.5;
    vec3 col = vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
    col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5);
    fragColor = vec4(col, 1);
}