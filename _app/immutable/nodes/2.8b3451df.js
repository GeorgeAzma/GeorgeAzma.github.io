import{s as Q,n as F,o as an,b as sn,r as cn,f as vn,t as fn}from"../chunks/scheduler.b108d059.js";import{S as nn,i as en,g as T,s as S,h as E,y as D,c as k,j as U,f as y,k as v,a as R,r as M,m as dn,u as V,n as un,v as H,x as h,z as K,d as I,t as N,w as P}from"../chunks/index.f5626e03.js";function mn(f){let o,c=`<a href="https://shadertoy.com/user/Peace" target="_blank" class="svelte-v5slnw"><img class="nav-icon svelte-v5slnw" src="shadertoy.webp" alt="Shadertoy Icon" width="38" height="38"/>
		Shaders</a> <a href="https://fiverr.com/lumiey" target="_blank" class="svelte-v5slnw"><svg class="nav-icon svelte-v5slnw" width="38" height="38" viewBox="0 0 400 400"><circle cx="200" cy="200" fill="#00b22d" r="200"></circle><g fill="#fff"><path d="M364.4 162.7c0-6.6-5.2-12-11.8-12-6.4 0-11.7 5.3-11.7 12 0 6.6 5.2 12 11.7 12 6.6.1 11.8-5.3 11.8-12zm-11.8 8.7c-4.5 0-8-3.8-8-8.7 0-4.8 3.5-8.6 8-8.6 4.6 0 8.2 3.8 8.2 8.6 0 4.9-3.6 8.7-8.2 8.7z"></path><path d="M355.8 163.7c.6-.2 1.9-1.1 1.9-3 0-2.3-1.5-3.7-4-3.7h-5.3v11.3h3.5v-3.8h.9l1.6 3.8h3.8l-2.1-3.9c-.2-.6-.3-.7-.3-.7zm-3-1.6h-.9v-2.7h.9c.8 0 1.2.4 1.2 1.3.1.9-.4 1.4-1.2 1.4z"></path><circle cx="104.6" cy="163" r="9"></circle><path d="M114 177.9H72.8v-2.7c0-5.3 5.3-5.4 8-5.4 3.1 0 4.5.3 4.5.3v-14.6s-2.8-.4-6.6-.4c-8.6 0-24.5 2.4-24.5 20.6v2.3h-7.5v13.5h7.5V220h-7v13.5H81V220h-8.2v-28.5h22.5V220h-7v13.5H121V220h-7zm70 0h-29.5v13.5h5l-6.4 20c-1.2 3.3-1.5 7.3-1.5 7.3h-.4s-.3-4-1.5-7.3l-6.4-20h5v-13.5h-29.5v13.5h6.2l15.4 42h22l15.4-42h6.2zm54.6 25.5c0-15.4-9.3-26.8-25.8-26.8-17.9 0-28.9 12.7-28.9 29 0 14.8 10.7 29.1 30.5 29.1 15 0 23.9-7.8 23.9-7.8l-6.8-12.9s-7.4 5.3-15.6 5.3c-5.9 0-11.5-3.1-12.9-10.2h35.2c-.1-.1.4-3.9.4-5.7zm-35.2-4.6c1-4.3 3.6-8.2 8.9-8.2 4.1 0 7 3.8 7 8.2zm114.1-8.1h-.2s.2-1.1.2-2.8V185c0-5.1-2.8-7.1-7.9-7.1h-17.5v13.5h5.2c1.5 0 2.4.9 2.4 2.4V220h-7.5v13.5h33.7V220h-7.5v-8.1c0-10.1 5-16.7 15.3-16.7 2.3 0 3.8.3 3.8.3v-18.3s-1.1-.2-2.2-.2c-8.4-.1-15.4 6.1-17.8 13.7zm-49.3 0h-.2s.2-1.1.2-2.8V185c0-5.1-2.8-7.1-7.9-7.1h-17.5v13.5h5.2c1.5 0 2.4.9 2.4 2.4V220h-7.5v13.5h33.7V220h-7.5v-8.1c0-10.1 5-16.7 15.3-16.7 2.3 0 3.8.3 3.8.3v-18.3s-1.1-.2-2.2-.2c-8.5-.1-15.5 6.1-17.8 13.7z"></path></g></svg>Fiverr</a> <a href="https://github.com/GeorgeAzma" target="_blank" class="svelte-v5slnw"><svg class="nav-icon svelte-v5slnw" viewBox="0 0 98 96" width="38" height="38"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"></path></svg>
		Github</a> <a href="https://www.linkedin.com/in/george-azmaipharashvili-ab8b7b286/" target="_blank" class="svelte-v5slnw"><svg class="nav-icon svelte-v5slnw" width="38" height="38" viewBox="0 0 128 128" id="linkedin"><circle cx="64" cy="64" r="64" fill="#0a66c2"></circle><path fill="#fff" d="M92 32H36a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h56a4 4 0 0 0 4-4V36a4 4 0 0 0-4-4ZM52 86H42V56h10Zm-5-34a6 6 0 1 1 6-6 6 6 0 0 1-6 6Zm39 34H76V66c0-1.66-2.24-3-5-3-4 0-5 5.34-5 7v16H56V56h10v7c0-5 4.48-7 10-7a10 10 0 0 1 10 10Z"></path></svg>
		LinkedIn</a>`,a,t;return{c(){o=T("nav"),o.innerHTML=c,a=S(),t=T("div"),this.h()},l(e){o=E(e,"NAV",{id:!0,class:!0,"data-svelte-h":!0}),D(o)!=="svelte-w5m299"&&(o.innerHTML=c),a=k(e),t=E(e,"DIV",{}),U(t).forEach(y),this.h()},h(){v(o,"id","navbar"),v(o,"class","svelte-v5slnw")},m(e,r){R(e,o,r),R(e,a,r),R(e,t,r)},p:F,i:F,o:F,d(e){e&&(y(o),y(a),y(t))}}}class hn extends nn{constructor(o){super(),en(this,o,null,mn,Q,{})}}function pn(f){let o;return{c(){o=T("canvas"),this.h()},l(c){o=E(c,"CANVAS",{id:!0,class:!0}),U(o).forEach(y),this.h()},h(){v(o,"id","background-shader"),v(o,"class","svelte-cx4n7w")},m(c,a){R(c,o,a),f[3](o)},p:F,i:F,o:F,d(c){c&&y(o),f[3](null)}}}function gn(f,o,c){let{frag:a=""}=o,{vert:t=""}=o,e,r=null,n=null,b=performance.now(),u=performance.now(),C=null;function x(){const i=e.getBoundingClientRect();return i.left>=-window.innerWidth&&i.right<=window.innerWidth*2}function A(){if(c(0,e.width=window.innerWidth,e),c(0,e.height=window.innerHeight,e),n&&r){const i=n.getUniformLocation(r,"resolution");n.uniform2f(i,e.width,e.height),n.viewport(0,0,e.width,e.height)}}an(()=>{if(n=e.getContext("webgl2"),!n){console.error("WebGL is not supported in this browser.");return}return b=performance.now(),window.addEventListener("resize",A),p(t,a),()=>{window.removeEventListener("resize",A)}});function p(i,d){if(d||(d="precision mediump float;void main() {gl_FragColor=vec4(1);}"),i||(i="attribute vec4 a_position;void main() {gl_Position = a_position;}"),!!n){if(x()){const g=n.createShader(n.FRAGMENT_SHADER);if(!g){alert("Could not create fragment shader");return}if(n.shaderSource(g,d),n.compileShader(g),!n.getShaderParameter(g,n.COMPILE_STATUS)){const w=n.getShaderInfoLog(g);console.error("Fragment shader compilation error:",w)}const _=n.createShader(n.VERTEX_SHADER);if(!_){alert("Could not create vertex shader");return}if(n.shaderSource(_,i),n.compileShader(_),!n.getShaderParameter(_,n.COMPILE_STATUS)){const w=n.getShaderInfoLog(_);console.error("Vertex shader compilation error:",w)}if(r&&(n.deleteProgram(r),r=null),r=n.createProgram(),!r){alert("Could not create shader program");return}n.attachShader(r,g),n.attachShader(r,_),n.linkProgram(r),n.deleteShader(g),n.deleteShader(_),C===null?(C=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,C),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),n.STATIC_DRAW)):n.bindBuffer(n.ARRAY_BUFFER,C),n.useProgram(r);const l=n.getAttribLocation(r,"a_position");n.enableVertexAttribArray(l),n.vertexAttribPointer(l,2,n.FLOAT,!1,0,0)}A(),$()}}function $(){if(!(e&&n))return;let i=performance.now();if(!x()){requestAnimationFrame($);const g=i-u;b+=g,u=i;return}if(r||p(t,a),!r)return;n.clearColor(0,0,0,1),n.clear(n.COLOR_BUFFER_BIT),n.useProgram(r),n.drawArrays(n.TRIANGLE_STRIP,0,4);const d=n.getUniformLocation(r,"time");d&&n.uniform1f(d,(i-b)/1e3),u=i,requestAnimationFrame($)}function L(i){sn[i?"unshift":"push"](()=>{e=i,c(0,e)})}return f.$$set=i=>{"frag"in i&&c(1,a=i.frag),"vert"in i&&c(2,t=i.vert)},f.$$.update=()=>{f.$$.dirty&6&&p(t,a)},[e,a,t,L]}class q extends nn{constructor(o){super(),en(this,o,gn,pn,Q,{frag:1,vert:2})}}const wn=`precision lowp float;\r
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
}`,xn=`precision lowp float;\r
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
}`,_n=`precision lowp float;\r
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
float rand1d(float n) { return fract(sin(n) * 43758.5453123); }\r
\r
float noise1d(float p)  {\r
	float fl = floor(p);\r
	float fc = fract(p);\r
	return mix(rand1d(fl), rand1d(fl + 1.0), fc);\r
}\r
\r
float blob(vec2 uv, float n, float i) { \r
    float r = noise1d(i + time * 0.1) * 1.2 + 0.4 * max(resolution.x / resolution.y, resolution.y / resolution.x);    \r
    float t = fract((time * 0.015 + i * 84.7291) / (1.0 + rand1d(i + ROWS)));\r
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
    vec3 uvn = normalize(vec3(uv, 3));\r
    float spec = max(0.0, uvn.y) * specular(vec3(uvn.x, -3, 0), n);\r
    spec += min(1.0, 1.0 - uvn.y) * specular(vec3(uvn.x, 3, 0), n);\r
    spec /= (spec + 3.0) * 0.2;\r
\r
    vec3 col = spec * spec * (BLOB_COL_GLOW * 0.3 + 0.7) + mix(BLOB_COL_BASE, BLOB_COL_GLOW, spec);\r
    col -= max(0.0, 1.0 - sqrt(sqrt(-d))) * 0.7;\r
    gl_FragColor = vec4(mix(background, col, m), 1);\r
}`,yn=`precision lowp float;\r
\r
uniform float time;\r
uniform vec2 resolution;\r
\r
const float TAU = 6.28318530718;\r
\r
float rand(vec2 n) { \r
	return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);\r
}\r
\r
float noise(vec2 p) {\r
	vec2 ip = floor(p);\r
	vec2 u = fract(p);\r
	u = u*u*(3.0-2.0*u);\r
	\r
	float res = mix(\r
		mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),\r
		mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);\r
	return res*res;	\r
}\r
\r
float fbm(vec2 p) {\r
	float s = 0.0;\r
	float m = 0.0;\r
	float a = 0.5;\r
	\r
	s += a * noise(p);\r
	m += a;\r
	a *= 0.5;\r
	p *= 2.0;\r
	\r
	s += a * noise(p);\r
	m += a;\r
	a *= 0.5;\r
	p *= 2.0;\r
    \r
	return s / m;\r
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
}`,bn=`precision lowp float;\r
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
}`;function Ln(f){let o,c,a,t,e,r,n,b,u,C,x,A,p,$,L,i,d,g="I'm Lumiey, graphics developer and software engineer.",_,l,w,B,rn="(Copied)",Y,O,tn='<svg viewBox="-4.5 0 20 20" stroke="#ffffffcc" stroke-width="0.6" fill="#ffffffaa" class="svelte-1u1ll8f"><path transform="translate(-331.000000, -6519.000000)" d="M338.61,6539 L340,6537.594 L331.739,6528.987 L332.62,6528.069 L332.615,6528.074 L339.955,6520.427 L338.586,6519 C336.557,6521.113 330.893,6527.014 329,6528.987 C330.406,6530.453 329.035,6529.024 338.61,6539" class="svelte-1u1ll8f"></path></svg>',Z,W,on='<svg viewBox="-4.5 0 20 20" stroke="#ffffffcc" stroke-width="0.6" fill="#ffffffaa" class="svelte-1u1ll8f"><path transform="scale(-1, 1) translate(-341.000000, -6519.000000)" d="M338.61,6539 L340,6537.594 L331.739,6528.987 L332.62,6528.069 L332.615,6528.074 L339.955,6520.427 L338.586,6519 C336.557,6521.113 330.893,6527.014 329,6528.987 C330.406,6530.453 329.035,6529.024 338.61,6539" class="svelte-1u1ll8f"></path></svg>',G,X,ln;return t=new hn({}),n=new q({props:{frag:wn}}),u=new q({props:{frag:xn}}),x=new q({props:{frag:_n}}),p=new q({props:{frag:yn}}),L=new q({props:{frag:bn}}),{c(){o=T("div"),c=S(),a=T("div"),M(t.$$.fragment),e=S(),r=T("div"),M(n.$$.fragment),b=S(),M(u.$$.fragment),C=S(),M(x.$$.fragment),A=S(),M(p.$$.fragment),$=S(),M(L.$$.fragment),i=S(),d=T("h1"),d.textContent=g,_=S(),l=T("button"),w=dn(J),B=T("span"),B.textContent=rn,Y=S(),O=T("button"),O.innerHTML=tn,Z=S(),W=T("button"),W.innerHTML=on,this.h()},l(s){o=E(s,"DIV",{class:!0}),U(o).forEach(y),c=k(s),a=E(s,"DIV",{id:!0,class:!0});var m=U(a);V(t.$$.fragment,m),e=k(m),r=E(m,"DIV",{id:!0,class:!0});var z=U(r);V(n.$$.fragment,z),b=k(z),V(u.$$.fragment,z),C=k(z),V(x.$$.fragment,z),A=k(z),V(p.$$.fragment,z),$=k(z),V(L.$$.fragment,z),z.forEach(y),i=k(m),d=E(m,"H1",{class:!0,"data-svelte-h":!0}),D(d)!=="svelte-12vckjm"&&(d.textContent=g),_=k(m),l=E(m,"BUTTON",{id:!0,"aria-label":!0,class:!0});var j=U(l);w=un(j,J),B=E(j,"SPAN",{class:!0,"data-svelte-h":!0}),D(B)!=="svelte-nvhv7g"&&(B.textContent=rn),j.forEach(y),Y=k(m),O=E(m,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),D(O)!=="svelte-1eth16w"&&(O.innerHTML=tn),Z=k(m),W=E(m,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),D(W)!=="svelte-3l2q6y"&&(W.innerHTML=on),m.forEach(y),this.h()},h(){v(o,"class","loader svelte-1u1ll8f"),v(r,"id","shaders"),v(r,"class","svelte-1u1ll8f"),v(d,"class","main-text svelte-1u1ll8f"),v(B,"class","hidden svelte-1u1ll8f"),v(l,"id","contact-info"),v(l,"aria-label","Contact me"),v(l,"class","svelte-1u1ll8f"),v(O,"class","arrow-left svelte-1u1ll8f"),v(O,"aria-label","Scroll left"),v(W,"class","arrow-right svelte-1u1ll8f"),v(W,"aria-label","Scroll right"),v(a,"id","gradient"),v(a,"class","glass-pane svelte-1u1ll8f")},m(s,m){R(s,o,m),R(s,c,m),R(s,a,m),H(t,a,null),h(a,e),h(a,r),H(n,r,null),h(r,b),H(u,r,null),h(r,C),H(x,r,null),h(r,A),H(p,r,null),h(r,$),H(L,r,null),f[4](r),h(a,i),h(a,d),h(a,_),h(a,l),h(l,w),h(l,B),h(a,Y),h(a,O),h(a,Z),h(a,W),G=!0,X||(ln=[K(l,"click",f[1]),K(O,"click",f[2]),K(W,"click",f[3])],X=!0)},p:F,i(s){G||(I(t.$$.fragment,s),I(n.$$.fragment,s),I(u.$$.fragment,s),I(x.$$.fragment,s),I(p.$$.fragment,s),I(L.$$.fragment,s),G=!0)},o(s){N(t.$$.fragment,s),N(n.$$.fragment,s),N(u.$$.fragment,s),N(x.$$.fragment,s),N(p.$$.fragment,s),N(L.$$.fragment,s),G=!1},d(s){s&&(y(o),y(c),y(a)),P(t),P(n),P(u),P(x),P(p),P(L),f[4](null),X=!1,cn(ln)}}}const J="lumi.main.mail@gmail.com";function Cn(f,o,c){const a=l=>{navigator.clipboard.writeText(J);const w=l.currentTarget.children.item(0);w&&(w.classList.remove("hidden"),setTimeout(()=>{w.classList.add("hidden")},2e3))};let t,e=0,r;const n=async()=>{r!==null&&clearTimeout(r),await fn(),r=setTimeout(()=>{let l=Math.round(e/window.innerWidth)*window.innerWidth;e=e-l>0?l+window.innerWidth:e-l<0?l-window.innerWidth:e,t.scrollTo({left:e,behavior:"smooth"})},300)};function b(){t!==null&&(e=(Math.round(e/window.innerWidth)-1)*window.innerWidth,e<0&&(e=t.scrollWidth-window.innerWidth),t.scrollTo({left:e,behavior:"smooth"}))}function u(){t!==null&&(e=(Math.round(e/window.innerWidth)+1)*window.innerWidth,e>t.scrollWidth-window.innerWidth&&(e=0),t.scrollTo({left:e,behavior:"smooth"}))}const C=()=>{e=t.scrollLeft,n()},x=l=>{switch(l.key){case"ArrowLeft":case"a":b();break;case"ArrowRight":case"d":case" ":u();break}},A=l=>{l.deltaY>0?b():u()};let p=0;const $=()=>{e=Math.round(e/p)*window.innerWidth,t&&t.scrollTo({left:e,behavior:"auto"}),p=window.innerWidth};let L=0,i=0;const d=l=>{l.button===0&&(L=l.clientX,i=l.clientY)},g=l=>{if(l.button===0){const w=l.clientX-L,B=l.clientY-i;Math.abs(w)>Math.abs(B)&&(w>0?b():u())}};an(()=>{t&&t.addEventListener("scroll",C),window&&(p=window.innerWidth,window.addEventListener("keyup",x),window.addEventListener("resize",$),window.addEventListener("wheel",A),window.addEventListener("mousedown",d),window.addEventListener("mouseup",g))}),vn(()=>{t&&t.removeEventListener("scroll",C),typeof window<"u"&&(window.removeEventListener("keyup",x),window.removeEventListener("resize",$),window.removeEventListener("wheel",A),window.removeEventListener("mousedown",d),window.removeEventListener("mouseup",g))});function _(l){sn[l?"unshift":"push"](()=>{t=l,c(0,t)})}return[t,a,b,u,_]}class Tn extends nn{constructor(o){super(),en(this,o,Cn,Ln,Q,{})}}export{Tn as component};
