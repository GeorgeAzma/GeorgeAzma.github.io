import{s as Q,n as F,o as ln,b as sn,r as cn,f as dn,t as vn}from"../chunks/scheduler.b108d059.js";import{S as nn,i as en,g as k,s as S,h as T,y as D,c as z,j as P,f as y,k as d,a as R,r as M,m as fn,u as V,n as un,v as q,x as m,z as K,d as H,t as I,w as N}from"../chunks/index.f5626e03.js";function mn(v){let a,c=`<a href="https://shadertoy.com/user/Peace" target="_blank" class="svelte-11ed129"><img class="nav-icon svelte-11ed129" src="shadertoy.webp" alt="Shadertoy Icon" width="38" height="38"/>
		Shaders</a> <a href="https://fiverr.com/lumiey" target="_blank" class="svelte-11ed129"><svg class="nav-icon svelte-11ed129" width="38" height="38" viewBox="0 0 400 400"><circle cx="200" cy="200" fill="#00b22d" r="200"></circle><g fill="#fff"><path d="M364.4 162.7c0-6.6-5.2-12-11.8-12-6.4 0-11.7 5.3-11.7 12 0 6.6 5.2 12 11.7 12 6.6.1 11.8-5.3 11.8-12zm-11.8 8.7c-4.5 0-8-3.8-8-8.7 0-4.8 3.5-8.6 8-8.6 4.6 0 8.2 3.8 8.2 8.6 0 4.9-3.6 8.7-8.2 8.7z"></path><path d="M355.8 163.7c.6-.2 1.9-1.1 1.9-3 0-2.3-1.5-3.7-4-3.7h-5.3v11.3h3.5v-3.8h.9l1.6 3.8h3.8l-2.1-3.9c-.2-.6-.3-.7-.3-.7zm-3-1.6h-.9v-2.7h.9c.8 0 1.2.4 1.2 1.3.1.9-.4 1.4-1.2 1.4z"></path><circle cx="104.6" cy="163" r="9"></circle><path d="M114 177.9H72.8v-2.7c0-5.3 5.3-5.4 8-5.4 3.1 0 4.5.3 4.5.3v-14.6s-2.8-.4-6.6-.4c-8.6 0-24.5 2.4-24.5 20.6v2.3h-7.5v13.5h7.5V220h-7v13.5H81V220h-8.2v-28.5h22.5V220h-7v13.5H121V220h-7zm70 0h-29.5v13.5h5l-6.4 20c-1.2 3.3-1.5 7.3-1.5 7.3h-.4s-.3-4-1.5-7.3l-6.4-20h5v-13.5h-29.5v13.5h6.2l15.4 42h22l15.4-42h6.2zm54.6 25.5c0-15.4-9.3-26.8-25.8-26.8-17.9 0-28.9 12.7-28.9 29 0 14.8 10.7 29.1 30.5 29.1 15 0 23.9-7.8 23.9-7.8l-6.8-12.9s-7.4 5.3-15.6 5.3c-5.9 0-11.5-3.1-12.9-10.2h35.2c-.1-.1.4-3.9.4-5.7zm-35.2-4.6c1-4.3 3.6-8.2 8.9-8.2 4.1 0 7 3.8 7 8.2zm114.1-8.1h-.2s.2-1.1.2-2.8V185c0-5.1-2.8-7.1-7.9-7.1h-17.5v13.5h5.2c1.5 0 2.4.9 2.4 2.4V220h-7.5v13.5h33.7V220h-7.5v-8.1c0-10.1 5-16.7 15.3-16.7 2.3 0 3.8.3 3.8.3v-18.3s-1.1-.2-2.2-.2c-8.4-.1-15.4 6.1-17.8 13.7zm-49.3 0h-.2s.2-1.1.2-2.8V185c0-5.1-2.8-7.1-7.9-7.1h-17.5v13.5h5.2c1.5 0 2.4.9 2.4 2.4V220h-7.5v13.5h33.7V220h-7.5v-8.1c0-10.1 5-16.7 15.3-16.7 2.3 0 3.8.3 3.8.3v-18.3s-1.1-.2-2.2-.2c-8.5-.1-15.5 6.1-17.8 13.7z"></path></g></svg>Fiverr</a> <a href="https://github.com/GeorgeAzma" target="_blank" class="svelte-11ed129"><svg class="nav-icon svelte-11ed129" viewBox="0 0 98 96" width="38" height="38"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"></path></svg>
		Github</a> <a href="https://www.linkedin.com/in/george-azmaipharashvili-ab8b7b286/" target="_blank" class="svelte-11ed129"><svg class="nav-icon svelte-11ed129" width="38" height="38" viewBox="0 0 128 128" id="linkedin"><circle cx="64" cy="64" r="64" fill="#0a66c2"></circle><path fill="#fff" d="M92 32H36a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h56a4 4 0 0 0 4-4V36a4 4 0 0 0-4-4ZM52 86H42V56h10Zm-5-34a6 6 0 1 1 6-6 6 6 0 0 1-6 6Zm39 34H76V66c0-1.66-2.24-3-5-3-4 0-5 5.34-5 7v16H56V56h10v7c0-5 4.48-7 10-7a10 10 0 0 1 10 10Z"></path></svg>
		LinkedIn</a>`,i,o;return{c(){a=k("nav"),a.innerHTML=c,i=S(),o=k("div"),this.h()},l(e){a=T(e,"NAV",{id:!0,class:!0,"data-svelte-h":!0}),D(a)!=="svelte-w5m299"&&(a.innerHTML=c),i=z(e),o=T(e,"DIV",{}),P(o).forEach(y),this.h()},h(){d(a,"id","navbar"),d(a,"class","svelte-11ed129")},m(e,r){R(e,a,r),R(e,i,r),R(e,o,r)},p:F,i:F,o:F,d(e){e&&(y(a),y(i),y(o))}}}class hn extends nn{constructor(a){super(),en(this,a,null,mn,Q,{})}}function pn(v){let a;return{c(){a=k("canvas"),this.h()},l(c){a=T(c,"CANVAS",{id:!0,class:!0}),P(a).forEach(y),this.h()},h(){d(a,"id","background-shader"),d(a,"class","svelte-cx4n7w")},m(c,i){R(c,a,i),v[3](a)},p:F,i:F,o:F,d(c){c&&y(a),v[3](null)}}}function gn(v,a,c){let{frag:i=""}=a,{vert:o=""}=a,e,r=null,n=null,b=performance.now(),f=performance.now(),C=null,g=!1;function $(){const l=e.getBoundingClientRect();return l.left>=-window.innerWidth&&l.right<=window.innerWidth*2}function h(){if(c(0,e.width=window.innerWidth,e),c(0,e.height=window.innerHeight,e),n&&r){const l=n.getUniformLocation(r,"resolution");n.uniform2f(l,e.width,e.height),n.viewport(0,0,e.width,e.height)}}ln(()=>{if(n=e.getContext("webgl2"),!n){console.error("WebGL is not supported in this browser.");return}return b=performance.now(),window.addEventListener("resize",h),E(o,i),()=>{window.removeEventListener("resize",h)}});function E(l,L){if(g=!1,L||(L="precision mediump float;void main() {gl_FragColor=vec4(1);}"),l||(l="attribute vec4 a_position;void main() {gl_Position = a_position;}"),!!n){if($()){const p=n.createShader(n.FRAGMENT_SHADER);if(!p){alert("Could not create fragment shader");return}if(n.shaderSource(p,L),n.compileShader(p),!n.getShaderParameter(p,n.COMPILE_STATUS)){const _=n.getShaderInfoLog(p);console.error("Fragment shader compilation error:",_)}const t=n.createShader(n.VERTEX_SHADER);if(!t){alert("Could not create vertex shader");return}if(n.shaderSource(t,l),n.compileShader(t),!n.getShaderParameter(t,n.COMPILE_STATUS)){const _=n.getShaderInfoLog(t);console.error("Vertex shader compilation error:",_)}if(r&&(n.deleteProgram(r),r=null),r=n.createProgram(),!r){alert("Could not create shader program");return}n.attachShader(r,p),n.attachShader(r,t),n.linkProgram(r),n.deleteShader(p),n.deleteShader(t),C===null?(C=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,C),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),n.STATIC_DRAW)):n.bindBuffer(n.ARRAY_BUFFER,C),n.useProgram(r);const x=n.getAttribLocation(r,"a_position");n.enableVertexAttribArray(x),n.vertexAttribPointer(x,2,n.FLOAT,!1,0,0),g=!0,console.log("Compiled!")}h(),w()}}function w(){if(!(e&&n))return;let l=performance.now();if(!$()){requestAnimationFrame(w);const p=l-f;b+=p,f=l;return}if(g||E(o,i),!r)return;n.clearColor(0,0,0,1),n.clear(n.COLOR_BUFFER_BIT),n.useProgram(r),n.drawArrays(n.TRIANGLE_STRIP,0,4);const L=n.getUniformLocation(r,"time");L&&n.uniform1f(L,(l-b)/1e3),f=l,requestAnimationFrame(w)}function W(l){sn[l?"unshift":"push"](()=>{e=l,c(0,e)})}return v.$$set=l=>{"frag"in l&&c(1,i=l.frag),"vert"in l&&c(2,o=l.vert)},v.$$.update=()=>{v.$$.dirty&6&&E(o,i)},[e,i,o,W]}class U extends nn{constructor(a){super(),en(this,a,gn,pn,Q,{frag:1,vert:2})}}const wn=`precision lowp float;\r
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
}`;function Ln(v){let a,c,i,o,e,r,n,b,f,C,g,$,h,E,w,W,l,L="I'm Lumiey, graphics developer and software engineer.",p,t,x,_,rn="(Copied)",Y,B,tn='<svg viewBox="-4.5 0 20 20" stroke="#ffffffcc" stroke-width="0.6" fill="#ffffffaa" class="svelte-1ciunqz"><path transform="translate(-331.000000, -6519.000000)" d="M338.61,6539 L340,6537.594 L331.739,6528.987 L332.62,6528.069 L332.615,6528.074 L339.955,6520.427 L338.586,6519 C336.557,6521.113 330.893,6527.014 329,6528.987 C330.406,6530.453 329.035,6529.024 338.61,6539" class="svelte-1ciunqz"></path></svg>',Z,O,on='<svg viewBox="-4.5 0 20 20" stroke="#ffffffcc" stroke-width="0.6" fill="#ffffffaa" class="svelte-1ciunqz"><path transform="scale(-1, 1) translate(-341.000000, -6519.000000)" d="M338.61,6539 L340,6537.594 L331.739,6528.987 L332.62,6528.069 L332.615,6528.074 L339.955,6520.427 L338.586,6519 C336.557,6521.113 330.893,6527.014 329,6528.987 C330.406,6530.453 329.035,6529.024 338.61,6539" class="svelte-1ciunqz"></path></svg>',G,X,an;return o=new hn({}),n=new U({props:{frag:wn}}),f=new U({props:{frag:xn}}),g=new U({props:{frag:_n}}),h=new U({props:{frag:yn}}),w=new U({props:{frag:bn}}),{c(){a=k("div"),c=S(),i=k("div"),M(o.$$.fragment),e=S(),r=k("div"),M(n.$$.fragment),b=S(),M(f.$$.fragment),C=S(),M(g.$$.fragment),$=S(),M(h.$$.fragment),E=S(),M(w.$$.fragment),W=S(),l=k("h1"),l.textContent=L,p=S(),t=k("button"),x=fn(J),_=k("span"),_.textContent=rn,Y=S(),B=k("button"),B.innerHTML=tn,Z=S(),O=k("button"),O.innerHTML=on,this.h()},l(s){a=T(s,"DIV",{class:!0}),P(a).forEach(y),c=z(s),i=T(s,"DIV",{id:!0,class:!0});var u=P(i);V(o.$$.fragment,u),e=z(u),r=T(u,"DIV",{id:!0,class:!0});var A=P(r);V(n.$$.fragment,A),b=z(A),V(f.$$.fragment,A),C=z(A),V(g.$$.fragment,A),$=z(A),V(h.$$.fragment,A),E=z(A),V(w.$$.fragment,A),A.forEach(y),W=z(u),l=T(u,"H1",{class:!0,"data-svelte-h":!0}),D(l)!=="svelte-12vckjm"&&(l.textContent=L),p=z(u),t=T(u,"BUTTON",{id:!0,"aria-label":!0,class:!0});var j=P(t);x=un(j,J),_=T(j,"SPAN",{class:!0,"data-svelte-h":!0}),D(_)!=="svelte-nvhv7g"&&(_.textContent=rn),j.forEach(y),Y=z(u),B=T(u,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),D(B)!=="svelte-1eth16w"&&(B.innerHTML=tn),Z=z(u),O=T(u,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),D(O)!=="svelte-3l2q6y"&&(O.innerHTML=on),u.forEach(y),this.h()},h(){d(a,"class","loader svelte-1ciunqz"),d(r,"id","shaders"),d(r,"class","svelte-1ciunqz"),d(l,"class","main-text svelte-1ciunqz"),d(_,"class","hidden svelte-1ciunqz"),d(t,"id","contact-info"),d(t,"aria-label","Contact me"),d(t,"class","svelte-1ciunqz"),d(B,"class","arrow-left svelte-1ciunqz"),d(B,"aria-label","Scroll left"),d(O,"class","arrow-right svelte-1ciunqz"),d(O,"aria-label","Scroll right"),d(i,"id","gradient"),d(i,"class","glass-pane svelte-1ciunqz")},m(s,u){R(s,a,u),R(s,c,u),R(s,i,u),q(o,i,null),m(i,e),m(i,r),q(n,r,null),m(r,b),q(f,r,null),m(r,C),q(g,r,null),m(r,$),q(h,r,null),m(r,E),q(w,r,null),v[4](r),m(i,W),m(i,l),m(i,p),m(i,t),m(t,x),m(t,_),m(i,Y),m(i,B),m(i,Z),m(i,O),G=!0,X||(an=[K(t,"click",v[1]),K(B,"click",v[2]),K(O,"click",v[3])],X=!0)},p:F,i(s){G||(H(o.$$.fragment,s),H(n.$$.fragment,s),H(f.$$.fragment,s),H(g.$$.fragment,s),H(h.$$.fragment,s),H(w.$$.fragment,s),G=!0)},o(s){I(o.$$.fragment,s),I(n.$$.fragment,s),I(f.$$.fragment,s),I(g.$$.fragment,s),I(h.$$.fragment,s),I(w.$$.fragment,s),G=!1},d(s){s&&(y(a),y(c),y(i)),N(o),N(n),N(f),N(g),N(h),N(w),v[4](null),X=!1,cn(an)}}}const J="lumi.main.mail@gmail.com";function Cn(v,a,c){const i=t=>{navigator.clipboard.writeText(J);const x=t.currentTarget.children.item(0);x&&(x.classList.remove("hidden"),setTimeout(()=>{x.classList.add("hidden")},2e3))};let o,e=0,r;const n=async()=>{r!==null&&clearTimeout(r),await vn(),r=setTimeout(()=>{let t=Math.round(e/window.innerWidth)*window.innerWidth;e=e-t>0?t+window.innerWidth:e-t<0?t-window.innerWidth:e,o.scrollTo({left:e,behavior:"smooth"})},300)};function b(){o!==null&&(e=(Math.round(e/window.innerWidth)-1)*window.innerWidth,e<0&&(e=o.scrollWidth-window.innerWidth),o.scrollTo({left:e,behavior:"smooth"}))}function f(){o!==null&&(e=(Math.round(e/window.innerWidth)+1)*window.innerWidth,e>o.scrollWidth-window.innerWidth&&(e=0),o.scrollTo({left:e,behavior:"smooth"}))}const C=()=>{e=o.scrollLeft,n()},g=t=>{switch(t.key){case"ArrowLeft":b();break;case"ArrowRight":case" ":f();break}},$=t=>{t.deltaY>0?b():f()};let h=0;const E=()=>{e=Math.round(e/h)*window.innerWidth,o&&o.scrollTo({left:e,behavior:"auto"}),h=window.innerWidth};let w=0,W=0;const l=t=>{t.button===0&&(w=t.clientX,W=t.clientY)},L=t=>{if(t.button===0){const x=t.clientX-w,_=t.clientY-W;Math.abs(x)>Math.abs(_)&&(x>0?b():f())}};ln(()=>{o&&o.addEventListener("scroll",C),window&&(h=window.innerWidth,window.addEventListener("keyup",g),window.addEventListener("resize",E),window.addEventListener("wheel",$),window.addEventListener("mousedown",l),window.addEventListener("mouseup",L))}),dn(()=>{o&&o.removeEventListener("scroll",C),typeof window<"u"&&(window.removeEventListener("keyup",g),window.removeEventListener("resize",E),window.removeEventListener("wheel",$),window.removeEventListener("mousedown",l),window.removeEventListener("mouseup",L))});function p(t){sn[t?"unshift":"push"](()=>{o=t,c(0,o)})}return[o,i,b,f,p]}class kn extends nn{constructor(a){super(),en(this,a,Cn,Ln,Q,{})}}export{kn as component};
