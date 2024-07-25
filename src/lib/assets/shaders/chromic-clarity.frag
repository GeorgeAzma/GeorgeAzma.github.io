precision highp float;

uniform float time;
uniform vec2 resolution;

float spiral(vec2 uv) {
    vec2 nv = normalize(uv);
    float a = atan(uv.y, uv.x);
    float l = sqrt(length(uv));
    uv = nv * (sin(l * 3.0 + time * 2.0) + sin(a * 4.0));
    float s = sin(a * 4.0);
    float d = distance(nv * (s * 0.2 + 0.5), uv);
    d = cos(d * l);
    
    return clamp(-exp(-d) + 0.3 / (d * d), 0.0, 1.0);
}

void main() {
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y) * 2.0;
    float t = time * 0.2;

    vec3 col = vec3(spiral(uv * cos(t - cos(t * 3.0 + cos(t * 4.0))) + vec2(-uv.y, uv.x) * sin(t - sin(t * 3.0))));
    col.b *= 0.4;
    uv -= col.gb;
    col.r += col.r + spiral(uv * cos(0.5 + t - cos(t * 3.0 + cos(t * 4.0))) + vec2(-uv.y, uv.x) * sin(0.5 + sin(t * 3.0) + t));
    uv += col.rr;
    col.g += col.g + spiral(uv * cos(1.0 - t + sin(t  * 3.0 - sin(t * 5.0))) + vec2(-uv.y, uv.x) * sin(1.0 - sin(t * 3.0)));
    uv -= col.rg;
    col.b += col.b + spiral(uv * cos(1.5 - cos(t * 3.0)) + vec2(-uv.y, uv.x) * sin(1.5 - sin(t * 3.0)));
    col = 1.0 - sqrt(col);
    col = sin(col * 2.0) * 0.5 + 0.5;
    col = (0.5 + col) * (1.5 - abs(cos(length(col) * 3.0)));
    col = mix(vec3(dot(col, vec3(0.299, 0.587, 0.114))), col, 4.0);

    gl_FragColor = vec4(col, 1);
}