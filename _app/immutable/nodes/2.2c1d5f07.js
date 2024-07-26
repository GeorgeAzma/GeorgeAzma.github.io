import{s as Q,n as R,o as se,b as ie,r as le,f as ce}from"../chunks/scheduler.b108d059.js";import{S as ee,i as ne,g as k,s as C,h as T,y as D,c as S,j as P,f as b,k as f,a as W,r as M,m as fe,u as V,n as ve,v as q,x as m,z as K,d as H,t as I,w as N}from"../chunks/index.f5626e03.js";function de(v){let t,c=`<a href="https://shadertoy.com/user/Peace" target="_blank" class="svelte-o61m3w"><img class="nav-icon svelte-o61m3w" src="shadertoy.webp" alt="Shadertoy Icon" width="38" height="38"/>
		Shaders</a> <a href="https://fiverr.com/lumiey" target="_blank" class="svelte-o61m3w"><svg class="nav-icon svelte-o61m3w" width="38" height="38" viewBox="0 0 400 400"><circle cx="200" cy="200" fill="#00b22d" r="200"></circle><g fill="#fff"><path d="M364.4 162.7c0-6.6-5.2-12-11.8-12-6.4 0-11.7 5.3-11.7 12 0 6.6 5.2 12 11.7 12 6.6.1 11.8-5.3 11.8-12zm-11.8 8.7c-4.5 0-8-3.8-8-8.7 0-4.8 3.5-8.6 8-8.6 4.6 0 8.2 3.8 8.2 8.6 0 4.9-3.6 8.7-8.2 8.7z"></path><path d="M355.8 163.7c.6-.2 1.9-1.1 1.9-3 0-2.3-1.5-3.7-4-3.7h-5.3v11.3h3.5v-3.8h.9l1.6 3.8h3.8l-2.1-3.9c-.2-.6-.3-.7-.3-.7zm-3-1.6h-.9v-2.7h.9c.8 0 1.2.4 1.2 1.3.1.9-.4 1.4-1.2 1.4z"></path><circle cx="104.6" cy="163" r="9"></circle><path d="M114 177.9H72.8v-2.7c0-5.3 5.3-5.4 8-5.4 3.1 0 4.5.3 4.5.3v-14.6s-2.8-.4-6.6-.4c-8.6 0-24.5 2.4-24.5 20.6v2.3h-7.5v13.5h7.5V220h-7v13.5H81V220h-8.2v-28.5h22.5V220h-7v13.5H121V220h-7zm70 0h-29.5v13.5h5l-6.4 20c-1.2 3.3-1.5 7.3-1.5 7.3h-.4s-.3-4-1.5-7.3l-6.4-20h5v-13.5h-29.5v13.5h6.2l15.4 42h22l15.4-42h6.2zm54.6 25.5c0-15.4-9.3-26.8-25.8-26.8-17.9 0-28.9 12.7-28.9 29 0 14.8 10.7 29.1 30.5 29.1 15 0 23.9-7.8 23.9-7.8l-6.8-12.9s-7.4 5.3-15.6 5.3c-5.9 0-11.5-3.1-12.9-10.2h35.2c-.1-.1.4-3.9.4-5.7zm-35.2-4.6c1-4.3 3.6-8.2 8.9-8.2 4.1 0 7 3.8 7 8.2zm114.1-8.1h-.2s.2-1.1.2-2.8V185c0-5.1-2.8-7.1-7.9-7.1h-17.5v13.5h5.2c1.5 0 2.4.9 2.4 2.4V220h-7.5v13.5h33.7V220h-7.5v-8.1c0-10.1 5-16.7 15.3-16.7 2.3 0 3.8.3 3.8.3v-18.3s-1.1-.2-2.2-.2c-8.4-.1-15.4 6.1-17.8 13.7zm-49.3 0h-.2s.2-1.1.2-2.8V185c0-5.1-2.8-7.1-7.9-7.1h-17.5v13.5h5.2c1.5 0 2.4.9 2.4 2.4V220h-7.5v13.5h33.7V220h-7.5v-8.1c0-10.1 5-16.7 15.3-16.7 2.3 0 3.8.3 3.8.3v-18.3s-1.1-.2-2.2-.2c-8.5-.1-15.5 6.1-17.8 13.7z"></path></g></svg>Fiverr</a> <a href="https://github.com/GeorgeAzma" target="_blank" class="svelte-o61m3w"><svg class="nav-icon svelte-o61m3w" viewBox="0 0 98 96" width="38" height="38"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"></path></svg>
		Github</a> <a href="https://www.linkedin.com/in/george-azmaipharashvili-ab8b7b286/" target="_blank" class="svelte-o61m3w"><svg class="nav-icon svelte-o61m3w" width="38" height="38" viewBox="0 0 128 128" id="linkedin"><circle cx="64" cy="64" r="64" fill="#0a66c2"></circle><path fill="#fff" d="M92 32H36a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h56a4 4 0 0 0 4-4V36a4 4 0 0 0-4-4ZM52 86H42V56h10Zm-5-34a6 6 0 1 1 6-6 6 6 0 0 1-6 6Zm39 34H76V66c0-1.66-2.24-3-5-3-4 0-5 5.34-5 7v16H56V56h10v7c0-5 4.48-7 10-7a10 10 0 0 1 10 10Z"></path></svg>
		LinkedIn</a>`,o,r;return{c(){t=k("nav"),t.innerHTML=c,o=C(),r=k("div"),this.h()},l(a){t=T(a,"NAV",{id:!0,class:!0,"data-svelte-h":!0}),D(t)!=="svelte-w5m299"&&(t.innerHTML=c),o=S(a),r=T(a,"DIV",{}),P(r).forEach(b),this.h()},h(){f(t,"id","navbar"),f(t,"class","svelte-o61m3w")},m(a,n){W(a,t,n),W(a,o,n),W(a,r,n)},p:R,i:R,o:R,d(a){a&&(b(t),b(o),b(r))}}}class ue extends ee{constructor(t){super(),ne(this,t,null,de,Q,{})}}function he(v){let t;return{c(){t=k("canvas"),this.h()},l(c){t=T(c,"CANVAS",{id:!0,class:!0}),P(t).forEach(b),this.h()},h(){f(t,"id","background-shader"),f(t,"class","svelte-9zun04")},m(c,o){W(c,t,o),v[3](t)},p:R,i:R,o:R,d(c){c&&b(t),v[3](null)}}}function me(v,t,c){let{frag:o=""}=t,{vert:r=""}=t,a,n=null,e=null,x,d,z=null;function y(){const i=a.getBoundingClientRect();return i.left>=-window.innerWidth&&i.right<=window.innerWidth*2}function E(){if(c(0,a.width=window.innerWidth,a),c(0,a.height=window.innerHeight,a),e&&n){const i=e.getUniformLocation(n,"resolution");e.uniform2f(i,a.width,a.height),e.viewport(0,0,a.width,a.height)}}se(()=>{if(e=a.getContext("webgl2"),!e){console.error("WebGL is not supported in this browser.");return}return x=performance.now(),d=x,window.addEventListener("resize",E),p(r,o),()=>{window.removeEventListener("resize",E)}});function p(i,u){if(u||(u="precision mediump float;void main() {gl_FragColor=vec4(1);}"),i||(i="attribute vec4 a_position;void main() {gl_Position = a_position;}"),!!e){if(y()){const g=e.createShader(e.FRAGMENT_SHADER);if(!g){alert("Could not create fragment shader");return}if(e.shaderSource(g,u),e.compileShader(g),!e.getShaderParameter(g,e.COMPILE_STATUS)){const w=e.getShaderInfoLog(g);console.error("Fragment shader compilation error:",w)}const _=e.createShader(e.VERTEX_SHADER);if(!_){alert("Could not create vertex shader");return}if(e.shaderSource(_,i),e.compileShader(_),!e.getShaderParameter(_,e.COMPILE_STATUS)){const w=e.getShaderInfoLog(_);console.error("Vertex shader compilation error:",w)}if(n&&(e.deleteProgram(n),n=null),n=e.createProgram(),!n){alert("Could not create shader program");return}e.attachShader(n,g),e.attachShader(n,_),e.linkProgram(n),e.deleteShader(g),e.deleteShader(_),z===null&&(z=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,z),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),e.STATIC_DRAW)),e.useProgram(n);const s=e.getAttribLocation(n,"a_position");e.enableVertexAttribArray(s),e.vertexAttribPointer(s,2,e.FLOAT,!1,0,0)}E(),$()}}function $(){if(!(a&&e))return;let i=performance.now();if(!y()){requestAnimationFrame($);const g=i-d;x+=g,d=i;return}if(n||p(r,o),!n)return;e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(n),e.drawArrays(e.TRIANGLE_STRIP,0,4);const u=e.getUniformLocation(n,"time");u&&e.uniform1f(u,(i-x)/1e3),d=i,requestAnimationFrame($)}function L(i){ie[i?"unshift":"push"](()=>{a=i,c(0,a)})}return v.$$set=i=>{"frag"in i&&c(1,o=i.frag),"vert"in i&&c(2,r=i.vert)},v.$$.update=()=>{v.$$.dirty&6&&p(r,o)},[a,o,r,L]}class U extends ee{constructor(t){super(),ne(this,t,me,he,Q,{frag:1,vert:2})}}const pe=`precision highp float;\r
\r
uniform float time;\r
uniform vec2 resolution;\r
\r
void main() {\r
    float mr = min(resolution.x, resolution.y);\r
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / mr;\r
\r
    float d = -time * 0.5;\r
    float a = 0.0;\r
    for (float i = 0.0; i < 8.0; ++i) {\r
        a += cos(i - d - a * uv.x);\r
        d += sin(uv.y * i + a);\r
    }\r
    d += time * 0.5;\r
    vec3 col = vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);\r
    col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5);\r
    gl_FragColor = vec4(col, 1);\r
}`,ge=`precision highp float;\r
\r
uniform float time;\r
uniform vec2 resolution;\r
\r
#define INVERT 1\r
\r
float noise(vec2 p) {\r
    return smoothstep(-0.5, 0.9, sin((p.x - p.y) * 555.0) * sin(p.y * 1444.0)) - 0.4;\r
}\r
\r
float fabric(vec2 p) {\r
    const mat2 m = mat2(1.6, 1.2, -1.2, 1.6);\r
    float f = 0.4 * noise(p);\r
    f += 0.3 * noise(p = m * p);\r
    f += 0.2 * noise(p = m * p);\r
    return f + 0.1 * noise(m * p);\r
}\r
\r
float silk(vec2 uv, float t) {\r
    float s = sin(5.0 * (uv.x + uv.y + cos(2.0 * uv.x + 5.0 * uv.y)) + sin(12.0 * (uv.x + uv.y)) - t);\r
    s = 0.7 + 0.3 * (s * s * 0.5 + s);\r
    s *= 0.9 + 0.6 * fabric(uv * min(resolution.x, resolution.y) * 0.0006);\r
    return s * 0.9 + 0.1;\r
}\r
\r
float silkd(vec2 uv, float t) {\r
    float xy = uv.x + uv.y;\r
    float d = (5.0 * (1.0 - 2.0 * sin(2.0 * uv.x + 5.0 * uv.y)) + 12.0 * cos(12.0 * xy)) * cos(5.0 * (cos(2.0 * uv.x + 5.0 * uv.y) + xy) + sin(12.0 * xy) - t);\r
    return 0.005 * d * (sign(d) + 3.0);\r
}\r
\r
void main() {\r
    float mr = min(resolution.x, resolution.y);\r
    vec2 uv = gl_FragCoord.xy / mr;\r
    \r
    float t = time;\r
    uv.y += 0.03 * sin(8.0 * uv.x - t);\r
    \r
    float s = sqrt(silk(uv, t));\r
    float d = silkd(uv, t);\r
	\r
    vec3 c = vec3(s);\r
    c += 0.7 * vec3(1, 0.83, 0.6) * d;\r
    c *= 1.0 - max(0.0, 0.8 * d);\r
#if INVERT\r
    c = pow(c, 0.3 / vec3(0.52, 0.5, 0.4));\r
    c = 1.0 - c;\r
#else\r
    c = pow(c, vec3(0.52, 0.5, 0.4));\r
#endif\r
\r
    gl_FragColor = vec4(c, 1);\r
}`,we=`precision highp float;\r
\r
uniform float time;\r
uniform vec2 resolution;\r
\r
const float SMOOTHNESS = 0.5;\r
const vec3 BLOB_COL_BASE = vec3(1.0, 0.11, 0.8);\r
const vec3 BLOB_COL_GLOW = vec3(1.0, 0.9, 0.0);\r
const float ROWS = 6.0;\r
\r
float smin(float a, float b, float k) {\r
    float h = max(k - abs(a - b), 0.0);\r
    return min(a, b) - h * h / k * 0.25;\r
}\r
\r
vec4 perm(vec4 x) { x *= x * 34.0 + 1.0; return x - floor(x / 289.0) * 289.0; }\r
\r
float noise(vec3 p) {\r
    vec3 a = floor(p);\r
    vec3 d = p - a;\r
    d = d * d * (3.0 - 2.0 * d);\r
\r
    vec4 b = a.xxyy + vec4(0, 1, 0, 1);\r
    vec4 k1 = perm(b.xyxy);\r
    vec4 k2 = perm(k1.xyxy + b.zzww);\r
\r
    vec4 c = k2 + a.z;\r
    vec4 k3 = perm(c);\r
    vec4 k4 = perm(c + 1.0);\r
\r
    vec4 o1 = fract(k3 * 0.02439024);\r
    vec4 o2 = fract(k4 * 0.02439024);\r
\r
    vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);\r
    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);\r
\r
    return o4.y * d.y + o4.x * (1.0 - d.y);\r
}\r
\r
float hash11(float p) {\r
    p = fract(p * 0.1031);\r
    p *= p + 33.33;\r
    return fract(p * p * 2.0);\r
}\r
\r
float noise1d(float p)  {\r
	float fl = floor(p);\r
	float fc = fract(p);\r
	return mix(hash11(fl), hash11(fl + 1.0), fc);\r
}\r
\r
float blob(vec2 uv, float n, float i) { \r
    float r = noise1d(i + time * 0.1) * 1.2 + 0.4 * max(resolution.x / resolution.y, resolution.y / resolution.x);    \r
    float t = fract((time * 0.015 + i * 84.7291) / (1.0 + hash11(i + ROWS)));\r
    vec2 pos = vec2(i * max(1.0, resolution.x / resolution.y) * 0.8, \r
                   (smoothstep(0.0, 0.4, t) * smoothstep(0.8, 0.5, t) * 2.0 - 1.0) * (ROWS - 1.0) * resolution.y / min(resolution.x, resolution.y));\r
    return length(uv - pos + n) - r;\r
}\r
\r
float sdf(vec2 uv, float n) {\r
    float d = 9999.9;\r
    for (float i = -ROWS; i <= ROWS; ++i) {\r
        d = smin(d, blob(uv, n, i), SMOOTHNESS);\r
    }\r
    return d;\r
}\r
\r
float specular(vec3 light_dir, vec3 normal) {\r
    vec3 halfway = normalize(light_dir + vec3(0, 0, -3));\r
    float s = dot(normal, halfway);\r
    s *= s * s;\r
    return s * s;\r
}\r
\r
vec3 getNormal(vec2 uv, float d, float n) {\r
    vec2 e = vec2(12, 0);\r
    float nx = d - sdf(uv + e.xy, n);\r
    float ny = d - sdf(uv + e.yx, n);\r
    return normalize(vec3(nx, ny, e.x * 2.0));\r
}\r
\r
void main() {\r
    float min_res = min(resolution.x, resolution.y);\r
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min_res * ROWS;\r
    \r
    float n2 = noise(vec3((gl_FragCoord.xy * 2.0 - resolution.xy) / min_res * 5.0, time * 0.1) * 0.7) * 0.7;\r
    float d = sdf(uv, n2); \r
    vec3 background = BLOB_COL_BASE * 1.0 / (5.0 + d);\r
    if (d > 0.0) {\r
        gl_FragColor = vec4(background, 1);\r
        return;\r
    }\r
    vec3 n = getNormal(uv, d, n2);\r
    float m = smoothstep(0.0, -16.0 / min_res, d);\r
    vec3 uvn = normalize(vec3(gl_FragCoord.xy / resolution.xy * 2.0 - 1.0, 3));\r
    float spec = max(0.0, uvn.y) * specular(vec3(uvn.x, -3, 0), n);\r
    spec += min(1.0, 1.0 - uvn.y) * specular(vec3(uvn.x, 3, 0), n);\r
    spec /= (spec + 3.0) * 0.2;\r
\r
    vec3 col = spec * spec * (BLOB_COL_GLOW * 0.3 + 0.7) + mix(BLOB_COL_BASE, BLOB_COL_GLOW, spec);\r
    col -= max(0.0, 1.0 - sqrt(sqrt(-d))) * 0.7;\r
    gl_FragColor = vec4(mix(background, col, m), 1);\r
}`,xe=`precision highp float;\r
\r
uniform float time;\r
uniform vec2 resolution;\r
\r
const float TAU = 6.28318530718;\r
\r
float hash12(vec2 p) {\r
	vec3 p3 = fract(p.xyx * 0.1031);\r
    p3 += dot(p3, p3.yzx + 33.33);\r
    return fract((p3.x + p3.y) * p3.z);\r
}\r
\r
float noise(vec2 p)  {\r
	vec2 i = floor(p);\r
	vec2 f = fract(p);\r
	f *= f * (3.0 - 2.0 * f);\r
	float res = mix(\r
		mix(hash12(i), hash12(i + vec2(1, 0)), f.x),\r
		mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1)), f.x), f.y);\r
	return res * res;	\r
}\r
\r
float fbm(vec2 p) {\r
	return 0.6 * noise(p) + 0.3 * noise(p * 2.0);\r
}\r
\r
vec3 pal(float t, vec3 a, vec3 b, vec3 c, vec3 d) {\r
    return a + b * (2.0 * sqrt(0.5 + 0.5 * cos(TAU * (c * t + d))) - 1.0);\r
}\r
\r
void main() {\r
    float min_res = min(resolution.x, resolution.y);\r
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min_res * 1.5;\r
    float t = time;\r
\r
    float l = dot(uv, uv);\r
    gl_FragColor = vec4(0);\r
	float r = 4.0 / min_res;\r
    float sm = smoothstep(1.0 + r, 1.0 - r, l);\r
    float sm2 = smoothstep(1.0, 1.0 - r * 2., l);\r
    float d = sm * l * l * l * 2.0;\r
    vec3 norm = normalize(vec3(uv, 1. - d));\r
    float a = atan(uv.y, uv.x) / TAU + t * 0.1;\r
    vec3 col = pal(a, vec3(0.3),vec3(0.5),vec3(1),vec3(0.0,0.8,0.8));\r
    vec3 cd = abs(col);\r
    vec3 c = col;\r
    c += l * max(0.0, l - 0.5 * dot(c, c));\r
    c += 0.3 * noise(uv * 3.0 / (1. + norm.z * norm.z * norm.z * 2.0));\r
    col = c + col * pow((1.0 - sm - pow(max(0.0, length(uv) - 1.0), 0.2)) * 2.0, 4.0);\r
    float f = fbm(normalize(uv + 1e-5) * 2. + t) + 0.1;\r
    uv *= f + 0.1;\r
    uv *= 0.5;\r
    l = dot(uv, uv);\r
    vec3 ins = normalize(cd);\r
    float ind = 0.2 + pow(smoothstep(0.0, 1.5, sqrt(l)) * 48.0, 0.25);\r
    ind *= ind * ind * ind;\r
    ind = 1.0 / ind;\r
    ins *= ind;\r
	float m = sm * smoothstep(0.7, 1.0, ind);\r
    col += ins * ins * m;\r
	col -= 0.7 * ins * m;\r
    col += abs(norm) * (1.0 - d) * 0.5;\r
	float alpha = length(col) * d + m + (1. - d) * 0.3;\r
    gl_FragColor = vec4(mix(vec3(1, 1, 1), col, alpha * sm2), 1);\r
}`,ye=`precision highp float;\r
\r
uniform float time;\r
uniform vec2 resolution;\r
\r
float spiral(vec2 uv) {\r
    vec2 nv = normalize(uv);\r
    float a = atan(uv.y, uv.x);\r
    float l = sqrt(length(uv));\r
    uv = nv * (sin(l * 3.0 + time * 2.0) + sin(a * 4.0));\r
    float s = sin(a * 4.0);\r
    float d = distance(nv * (s * 0.2 + 0.5), uv);\r
    d = cos(d * l);\r
    \r
    return clamp(-exp(-d) + 0.3 / (d * d), 0.0, 1.0);\r
}\r
\r
void main() {\r
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y) * 2.0;\r
    float t = time * 0.2;\r
\r
    vec3 col = vec3(spiral(uv * cos(t - cos(t * 3.0 + cos(t * 4.0))) + vec2(-uv.y, uv.x) * sin(t - sin(t * 3.0))));\r
    col.b *= 0.4;\r
    uv -= col.gb;\r
    col.r += col.r + spiral(uv * cos(0.5 + t - cos(t * 3.0 + cos(t * 4.0))) + vec2(-uv.y, uv.x) * sin(0.5 + sin(t * 3.0) + t));\r
    uv += col.rr;\r
    col.g += col.g + spiral(uv * cos(1.0 - t + sin(t  * 3.0 - sin(t * 5.0))) + vec2(-uv.y, uv.x) * sin(1.0 - sin(t * 3.0)));\r
    uv -= col.rg;\r
    col.b += col.b + spiral(uv * cos(1.5 - cos(t * 3.0)) + vec2(-uv.y, uv.x) * sin(1.5 - sin(t * 3.0)));\r
    col = 1.0 - sqrt(col);\r
    col = sin(col * 2.0) * 0.5 + 0.5;\r
    col = (0.5 + col) * (1.5 - abs(cos(length(col) * 3.0)));\r
    col = mix(vec3(dot(col, vec3(0.299, 0.587, 0.114))), col, 4.0);\r
\r
    gl_FragColor = vec4(col, 1);\r
}`;function _e(v){let t,c,o,r,a,n,e,x,d,z,y,E,p,$,L,i,u,g="I'm Lumiey, graphics developer and software engineer.",_,s,w,O,re="(Copied)",Y,B,te='<svg viewBox="-4.5 0 20 20" stroke="#ffffffcc" stroke-width="0.6" fill="#ffffffaa" class="svelte-f552qf"><path transform="translate(-331.000000, -6519.000000)" d="M338.61,6539 L340,6537.594 L331.739,6528.987 L332.62,6528.069 L332.615,6528.074 L339.955,6520.427 L338.586,6519 C336.557,6521.113 330.893,6527.014 329,6528.987 C330.406,6530.453 329.035,6529.024 338.61,6539" class="svelte-f552qf"></path></svg>',Z,F,oe='<svg viewBox="-4.5 0 20 20" stroke="#ffffffcc" stroke-width="0.6" fill="#ffffffaa" class="svelte-f552qf"><path transform="scale(-1, 1) translate(-341.000000, -6519.000000)" d="M338.61,6539 L340,6537.594 L331.739,6528.987 L332.62,6528.069 L332.615,6528.074 L339.955,6520.427 L338.586,6519 C336.557,6521.113 330.893,6527.014 329,6528.987 C330.406,6530.453 329.035,6529.024 338.61,6539" class="svelte-f552qf"></path></svg>',G,X,ae;return r=new ue({}),e=new U({props:{frag:pe}}),d=new U({props:{frag:ge}}),y=new U({props:{frag:we}}),p=new U({props:{frag:xe}}),L=new U({props:{frag:ye}}),{c(){t=k("div"),c=C(),o=k("div"),M(r.$$.fragment),a=C(),n=k("div"),M(e.$$.fragment),x=C(),M(d.$$.fragment),z=C(),M(y.$$.fragment),E=C(),M(p.$$.fragment),$=C(),M(L.$$.fragment),i=C(),u=k("h1"),u.textContent=g,_=C(),s=k("button"),w=fe(J),O=k("span"),O.textContent=re,Y=C(),B=k("button"),B.innerHTML=te,Z=C(),F=k("button"),F.innerHTML=oe,this.h()},l(l){t=T(l,"DIV",{class:!0}),P(t).forEach(b),c=S(l),o=T(l,"DIV",{id:!0,class:!0});var h=P(o);V(r.$$.fragment,h),a=S(h),n=T(h,"DIV",{id:!0,class:!0});var A=P(n);V(e.$$.fragment,A),x=S(A),V(d.$$.fragment,A),z=S(A),V(y.$$.fragment,A),E=S(A),V(p.$$.fragment,A),$=S(A),V(L.$$.fragment,A),A.forEach(b),i=S(h),u=T(h,"H1",{class:!0,"data-svelte-h":!0}),D(u)!=="svelte-12vckjm"&&(u.textContent=g),_=S(h),s=T(h,"BUTTON",{id:!0,"aria-label":!0,class:!0});var j=P(s);w=ve(j,J),O=T(j,"SPAN",{class:!0,"data-svelte-h":!0}),D(O)!=="svelte-nvhv7g"&&(O.textContent=re),j.forEach(b),Y=S(h),B=T(h,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),D(B)!=="svelte-1eth16w"&&(B.innerHTML=te),Z=S(h),F=T(h,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),D(F)!=="svelte-3l2q6y"&&(F.innerHTML=oe),h.forEach(b),this.h()},h(){f(t,"class","loader svelte-f552qf"),f(n,"id","shaders"),f(n,"class","svelte-f552qf"),f(u,"class","main-text svelte-f552qf"),f(O,"class","hidden svelte-f552qf"),f(s,"id","contact-info"),f(s,"aria-label","Contact me"),f(s,"class","svelte-f552qf"),f(B,"class","arrow-left svelte-f552qf"),f(B,"aria-label","Scroll left"),f(F,"class","arrow-right svelte-f552qf"),f(F,"aria-label","Scroll right"),f(o,"id","gradient"),f(o,"class","glass-pane svelte-f552qf")},m(l,h){W(l,t,h),W(l,c,h),W(l,o,h),q(r,o,null),m(o,a),m(o,n),q(e,n,null),m(n,x),q(d,n,null),m(n,z),q(y,n,null),m(n,E),q(p,n,null),m(n,$),q(L,n,null),v[4](n),m(o,i),m(o,u),m(o,_),m(o,s),m(s,w),m(s,O),m(o,Y),m(o,B),m(o,Z),m(o,F),G=!0,X||(ae=[K(s,"click",v[1]),K(B,"click",v[2]),K(F,"click",v[3])],X=!0)},p:R,i(l){G||(H(r.$$.fragment,l),H(e.$$.fragment,l),H(d.$$.fragment,l),H(y.$$.fragment,l),H(p.$$.fragment,l),H(L.$$.fragment,l),G=!0)},o(l){I(r.$$.fragment,l),I(e.$$.fragment,l),I(d.$$.fragment,l),I(y.$$.fragment,l),I(p.$$.fragment,l),I(L.$$.fragment,l),G=!1},d(l){l&&(b(t),b(c),b(o)),N(r),N(e),N(d),N(y),N(p),N(L),v[4](null),X=!1,le(ae)}}}const J="lumi.main.mail@gmail.com";function be(v,t,c){const o=s=>{navigator.clipboard.writeText(J);const w=s.currentTarget.children.item(0);w&&(w.classList.remove("hidden"),setTimeout(()=>{w.classList.add("hidden")},2e3))};let r,a=null,n=0;const e=async()=>{a!==null&&(clearTimeout(a),a=null),a=setTimeout(()=>{n=Math.round(r.scrollLeft/window.innerWidth),r.scrollTo({left:n*window.innerWidth,behavior:"smooth"})},500)};function x(){r!==null&&(n-=1,n<0&&(n=r.scrollWidth/window.innerWidth-1),r.scrollTo({left:n*window.innerWidth,behavior:"smooth"}))}function d(){r!==null&&(n+=1,n>r.scrollWidth/window.innerWidth-1&&(n=0),r.scrollTo({left:n*window.innerWidth,behavior:"smooth"}))}const z=()=>{e()},y=s=>{switch(s.key){case"ArrowLeft":case"a":x();break;case"ArrowRight":case"d":case" ":d();break}},E=s=>{s.deltaY>0?x():d()};let p=0;const $=()=>{let s=Math.round(r.scrollLeft/p)*window.innerWidth;r&&r.scrollTo({left:s,behavior:"instant"}),p=window.innerWidth};let L=0,i=0;const u=s=>{s.button===0&&(L=s.clientX,i=s.clientY)},g=s=>{if(s.button===0){const w=s.clientX-L,O=s.clientY-i;Math.abs(w)>Math.abs(O)&&(w>0?x():d())}};se(()=>{r&&r.addEventListener("scroll",z),window&&(p=window.innerWidth,window.addEventListener("keyup",y),window.addEventListener("resize",$),window.addEventListener("wheel",E),window.addEventListener("mousedown",u),window.addEventListener("mouseup",g))}),ce(()=>{r&&r.removeEventListener("scroll",z),typeof window<"u"&&(window.removeEventListener("keyup",y),window.removeEventListener("resize",$),window.removeEventListener("wheel",E),window.removeEventListener("mousedown",u),window.removeEventListener("mouseup",g))});function _(s){ie[s?"unshift":"push"](()=>{r=s,c(0,r)})}return[r,o,x,d,_]}class Se extends ee{constructor(t){super(),ne(this,t,be,_e,Q,{})}}export{Se as component};
