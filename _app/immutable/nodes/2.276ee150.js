import{s as J,n as W,o as on,b as an,r as sn,f as ln,t as cn}from"../chunks/scheduler.b108d059.js";import{S as Q,i as nn,g as k,s as S,h as z,y as U,c as T,j as q,f as E,k as v,a as D,r as F,m as fn,u as M,n as dn,v as V,x as m,z as j,d as H,t as I,w as N}from"../chunks/index.f5626e03.js";function vn(d){let r,s=`<a href="https://shadertoy.com/user/Peace" target="_blank" class="svelte-11ed129"><img class="nav-icon svelte-11ed129" src="shadertoy.webp" alt="Shadertoy Icon" width="38" height="38"/>
		Shaders</a> <a href="https://fiverr.com/lumiey" target="_blank" class="svelte-11ed129"><svg class="nav-icon svelte-11ed129" width="38" height="38" viewBox="0 0 400 400"><circle cx="200" cy="200" fill="#00b22d" r="200"></circle><g fill="#fff"><path d="M364.4 162.7c0-6.6-5.2-12-11.8-12-6.4 0-11.7 5.3-11.7 12 0 6.6 5.2 12 11.7 12 6.6.1 11.8-5.3 11.8-12zm-11.8 8.7c-4.5 0-8-3.8-8-8.7 0-4.8 3.5-8.6 8-8.6 4.6 0 8.2 3.8 8.2 8.6 0 4.9-3.6 8.7-8.2 8.7z"></path><path d="M355.8 163.7c.6-.2 1.9-1.1 1.9-3 0-2.3-1.5-3.7-4-3.7h-5.3v11.3h3.5v-3.8h.9l1.6 3.8h3.8l-2.1-3.9c-.2-.6-.3-.7-.3-.7zm-3-1.6h-.9v-2.7h.9c.8 0 1.2.4 1.2 1.3.1.9-.4 1.4-1.2 1.4z"></path><circle cx="104.6" cy="163" r="9"></circle><path d="M114 177.9H72.8v-2.7c0-5.3 5.3-5.4 8-5.4 3.1 0 4.5.3 4.5.3v-14.6s-2.8-.4-6.6-.4c-8.6 0-24.5 2.4-24.5 20.6v2.3h-7.5v13.5h7.5V220h-7v13.5H81V220h-8.2v-28.5h22.5V220h-7v13.5H121V220h-7zm70 0h-29.5v13.5h5l-6.4 20c-1.2 3.3-1.5 7.3-1.5 7.3h-.4s-.3-4-1.5-7.3l-6.4-20h5v-13.5h-29.5v13.5h6.2l15.4 42h22l15.4-42h6.2zm54.6 25.5c0-15.4-9.3-26.8-25.8-26.8-17.9 0-28.9 12.7-28.9 29 0 14.8 10.7 29.1 30.5 29.1 15 0 23.9-7.8 23.9-7.8l-6.8-12.9s-7.4 5.3-15.6 5.3c-5.9 0-11.5-3.1-12.9-10.2h35.2c-.1-.1.4-3.9.4-5.7zm-35.2-4.6c1-4.3 3.6-8.2 8.9-8.2 4.1 0 7 3.8 7 8.2zm114.1-8.1h-.2s.2-1.1.2-2.8V185c0-5.1-2.8-7.1-7.9-7.1h-17.5v13.5h5.2c1.5 0 2.4.9 2.4 2.4V220h-7.5v13.5h33.7V220h-7.5v-8.1c0-10.1 5-16.7 15.3-16.7 2.3 0 3.8.3 3.8.3v-18.3s-1.1-.2-2.2-.2c-8.4-.1-15.4 6.1-17.8 13.7zm-49.3 0h-.2s.2-1.1.2-2.8V185c0-5.1-2.8-7.1-7.9-7.1h-17.5v13.5h5.2c1.5 0 2.4.9 2.4 2.4V220h-7.5v13.5h33.7V220h-7.5v-8.1c0-10.1 5-16.7 15.3-16.7 2.3 0 3.8.3 3.8.3v-18.3s-1.1-.2-2.2-.2c-8.5-.1-15.5 6.1-17.8 13.7z"></path></g></svg>Fiverr</a> <a href="https://github.com/GeorgeAzma" target="_blank" class="svelte-11ed129"><svg class="nav-icon svelte-11ed129" viewBox="0 0 98 96" width="38" height="38"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"></path></svg>
		Github</a> <a href="https://www.linkedin.com/in/george-azmaipharashvili-ab8b7b286/" target="_blank" class="svelte-11ed129"><svg class="nav-icon svelte-11ed129" width="38" height="38" viewBox="0 0 128 128" id="linkedin"><circle cx="64" cy="64" r="64" fill="#0a66c2"></circle><path fill="#fff" d="M92 32H36a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h56a4 4 0 0 0 4-4V36a4 4 0 0 0-4-4ZM52 86H42V56h10Zm-5-34a6 6 0 1 1 6-6 6 6 0 0 1-6 6Zm39 34H76V66c0-1.66-2.24-3-5-3-4 0-5 5.34-5 7v16H56V56h10v7c0-5 4.48-7 10-7a10 10 0 0 1 10 10Z"></path></svg>
		LinkedIn</a>`,f,t;return{c(){r=k("nav"),r.innerHTML=s,f=S(),t=k("div"),this.h()},l(e){r=z(e,"NAV",{id:!0,class:!0,"data-svelte-h":!0}),U(r)!=="svelte-w5m299"&&(r.innerHTML=s),f=T(e),t=z(e,"DIV",{}),q(t).forEach(E),this.h()},h(){v(r,"id","navbar"),v(r,"class","svelte-11ed129")},m(e,a){D(e,r,a),D(e,f,a),D(e,t,a)},p:W,i:W,o:W,d(e){e&&(E(r),E(f),E(t))}}}class un extends Q{constructor(r){super(),nn(this,r,null,vn,J,{})}}function mn(d){let r;return{c(){r=k("canvas"),this.h()},l(s){r=z(s,"CANVAS",{id:!0,class:!0}),q(r).forEach(E),this.h()},h(){v(r,"id","background-shader"),v(r,"class","svelte-cx4n7w")},m(s,f){D(s,r,f),d[3](r)},p:W,i:W,o:W,d(s){s&&E(r),d[3](null)}}}function hn(d,r,s){let{frag:f=""}=r,{vert:t=""}=r,e,a=null,n=null,_=performance.now(),u=performance.now(),b=null,g=!1;function A(){const i=e.getBoundingClientRect();return i.top>=0&&i.left>=0&&i.bottom<=window.innerHeight&&i.right<=window.innerWidth}function h(){if(s(0,e.width=window.innerWidth,e),s(0,e.height=window.innerHeight,e),n&&a){const i=n.getUniformLocation(a,"resolution");n.uniform2f(i,e.width,e.height),n.viewport(0,0,e.width,e.height)}}on(()=>{if(n=e.getContext("webgl2"),!n){console.error("WebGL is not supported in this browser.");return}return _=performance.now(),window.addEventListener("resize",h),L(t,f),()=>{window.removeEventListener("resize",h)}});function L(i,l){if(g=!1,l||(l="precision mediump float;void main() {gl_FragColor=vec4(1);}"),i||(i="attribute vec4 a_position;void main() {gl_Position = a_position;}"),!!n){if(A()){const p=n.createShader(n.FRAGMENT_SHADER);if(!p){alert("Could not create fragment shader");return}if(n.shaderSource(p,l),n.compileShader(p),!n.getShaderParameter(p,n.COMPILE_STATUS)){const $=n.getShaderInfoLog(p);console.error("Fragment shader compilation error:",$)}const o=n.createShader(n.VERTEX_SHADER);if(!o){alert("Could not create vertex shader");return}if(n.shaderSource(o,i),n.compileShader(o),!n.getShaderParameter(o,n.COMPILE_STATUS)){const $=n.getShaderInfoLog(o);console.error("Vertex shader compilation error:",$)}if(a&&(n.deleteProgram(a),a=null),a=n.createProgram(),!a){alert("Could not create shader program");return}n.attachShader(a,p),n.attachShader(a,o),n.linkProgram(a),n.deleteShader(p),n.deleteShader(o),b===null?(b=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,b),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),n.STATIC_DRAW)):n.bindBuffer(n.ARRAY_BUFFER,b),n.useProgram(a);const y=n.getAttribLocation(a,"a_position");n.enableVertexAttribArray(y),n.vertexAttribPointer(y,2,n.FLOAT,!1,0,0),g=!0}h(),w()}}function w(){if(!(e&&n))return;let i=performance.now();if(!A()){requestAnimationFrame(w);const p=i-u;_+=p,u=i;return}g||L(t,f),n.clearColor(0,0,0,1),n.clear(n.COLOR_BUFFER_BIT),n.useProgram(a),n.drawArrays(n.TRIANGLE_STRIP,0,4);const l=n.getUniformLocation(a,"time");l&&n.uniform1f(l,(i-_)/1e3),u=i,requestAnimationFrame(w)}function R(i){an[i?"unshift":"push"](()=>{e=i,s(0,e)})}return d.$$set=i=>{"frag"in i&&s(1,f=i.frag),"vert"in i&&s(2,t=i.vert)},d.$$.update=()=>{d.$$.dirty&6&&L(t,f)},[e,f,t,R]}class P extends Q{constructor(r){super(),nn(this,r,hn,mn,J,{frag:1,vert:2})}}const pn=`precision lowp float;\r
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
}`,gn=`precision lowp float;\r
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
}`,wn=`precision lowp float;\r
\r
uniform float time;\r
uniform vec2 resolution;\r
\r
const float SMOOTHNESS = 0.5;\r
const vec3 BLOB_COL_BASE = vec3(1.0, 0.11, 0.8);\r
const vec3 BLOB_COL_GLOW = vec3(1.0, 0.9, 0.0);\r
const float ROWS = 6.0;\r
\r
float smin(float a, float b, float k)\r
{\r
    float h = max(k-abs(a-b), 0.0)/k;\r
    return min(a, b) - h*h*k*(1.0/4.0);\r
}\r
\r
float rand(int i, float lo, float hi) {\r
    return (hi - lo) * 0.5 * (sin(float(997*i)) + 1.) + lo;\r
}\r
\r
vec4 perm(vec4 x) { x = ((x * 34.0) + 1.0) * x; return x - floor(x * (1.0 / 289.0)) * 289.0; }\r
\r
float noise(vec3 p)\r
{\r
    vec3 a = floor(p);\r
    vec3 d = p - a;\r
    d = d * d * (3.0 - 2.0 * d);\r
\r
    vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);\r
    vec4 k1 = perm(b.xyxy);\r
    vec4 k2 = perm(k1.xyxy + b.zzww);\r
\r
    vec4 c = k2 + a.zzzz;\r
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
float noise1d(float p) \r
{\r
	float fl = floor(p);\r
	float fc = fract(p);\r
	return mix(rand1d(fl), rand1d(fl + 1.0), fc);\r
}\r
\r
float blob(vec2 uv, vec2 pos, float n, float radius, float period, int index) \r
{ \r
    float time = time * 0.3 + float(index) * 684.7291;\r
    int i = int(time / period);\r
    float t = mod(time, period) / period;\r
    \r
    pos.y = smoothstep(0., .4, t)*2.-1.;\r
    pos.y = mix(pos.y, -1., smoothstep(.5, .8, t)) * (ROWS - 1.0);\r
    \r
    //pos.x = pos.x - (noise1d(time * .25 + float(index) * 363.7543)*2.-1.) * ROWS;\r
    \r
    vec2 p = uv - pos + n;\r
    return length(p) - radius;\r
}\r
\r
float sdf(vec2 uv) \r
{\r
    float d = 9999999.;\r
    float n = noise(vec3(uv, time * .2) * 0.7) * 0.7;\r
    for (float i = -ROWS; i <= ROWS; i += 1.0) \r
    {\r
        float r = noise1d(i+time*0.2);\r
        d = smin(d, blob(uv, vec2(i * resolution.x / resolution.y * 0.8, 0.0), n, (0.7 + r*2.) * 0.8, 8.0 + abs(rand1d(i)) * 8.0, int(i)), SMOOTHNESS);\r
    }\r
    return d;\r
}\r
\r
float specular(vec3 light_dir, vec3 normal) {\r
    light_dir = normalize(light_dir);\r
    vec3 view_dir = vec3(0,0,-1);\r
    vec3 halfway = normalize(light_dir + view_dir);\r
    float s = max(0.0, dot(normal, halfway));\r
    return s * s * s * s * s * s;\r
}\r
\r
vec3 getNormal(vec2 uv) {\r
    vec2 e = vec2(8.0, 0);\r
    float nx = (sdf(uv - e.xy) - sdf(uv + e.xy)) / (2.0 * e.x);\r
    float ny = (sdf(uv - e.yx) - sdf(uv + e.yx)) / (2.0 * e.x);\r
    vec3 n = normalize(vec3(nx, ny, -1.));\r
    return n;\r
}\r
\r
void main() {\r
    float min_res = min(resolution.x, resolution.y);\r
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min_res * ROWS;\r
    vec3 uvn = normalize(vec3(uv, 1.0));\r
    \r
    float d = sdf(uv); \r
    vec3 n = getNormal(uv);\r
    float m = smoothstep(0.0, 0.0 - (1.0 / resolution.y) * 2., d);\r
    float s = noise(vec3(uv, time * .5 + 630.737551) * 1.0) * 0.5;\r
    float spec = max(0.0, uvn.y) * specular(vec3(uvn.x,-3.,0.0), n);\r
    spec += min(1.0, 1.-uvn.y) * specular(vec3(uvn.x,3.,0.0), n);\r
    spec = spec / (spec + 1.0) * 1.5;\r
    vec3 col = spec * spec * (BLOB_COL_GLOW * 0.3 + 0.7) + mix(BLOB_COL_BASE, BLOB_COL_GLOW, spec);\r
    col -= max(0.0, 1.- pow(abs(-d), 0.25)) * 0.7;\r
    gl_FragColor = vec4(col * m + BLOB_COL_BASE * (1.0 - m) / (6.0 + d), 1.0);\r
}`,xn=`precision lowp float;\r
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
}`,_n=`precision lowp float;\r
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
}`;function yn(d){let r,s,f,t,e,a,n,_,u,b,g,A,h,L,w,R="I'm Lumiey, graphics developer and software engineer.",i,l,p,o,y="(Copied)",$,B,en='<svg viewBox="-4.5 0 20 20" stroke="#ffffffcc" stroke-width="0.6" fill="#ffffffaa" class="svelte-m6xsfi"><path transform="translate(-331.000000, -6519.000000)" d="M338.61,6539 L340,6537.594 L331.739,6528.987 L332.62,6528.069 L332.615,6528.074 L339.955,6520.427 L338.586,6519 C336.557,6521.113 330.893,6527.014 329,6528.987 C330.406,6530.453 329.035,6529.024 338.61,6539" class="svelte-m6xsfi"></path></svg>',Y,O,rn='<svg viewBox="-4.5 0 20 20" stroke="#ffffffcc" stroke-width="0.6" fill="#ffffffaa" class="svelte-m6xsfi"><path transform="scale(-1, 1) translate(-341.000000, -6519.000000)" d="M338.61,6539 L340,6537.594 L331.739,6528.987 L332.62,6528.069 L332.615,6528.074 L339.955,6520.427 L338.586,6519 C336.557,6521.113 330.893,6527.014 329,6528.987 C330.406,6530.453 329.035,6529.024 338.61,6539" class="svelte-m6xsfi"></path></svg>',G,Z,tn;return s=new un({}),e=new P({props:{frag:pn}}),n=new P({props:{frag:gn}}),u=new P({props:{frag:wn}}),g=new P({props:{frag:xn}}),h=new P({props:{frag:_n}}),{c(){r=k("div"),F(s.$$.fragment),f=S(),t=k("div"),F(e.$$.fragment),a=S(),F(n.$$.fragment),_=S(),F(u.$$.fragment),b=S(),F(g.$$.fragment),A=S(),F(h.$$.fragment),L=S(),w=k("h1"),w.textContent=R,i=S(),l=k("button"),p=fn(K),o=k("span"),o.textContent=y,$=S(),B=k("button"),B.innerHTML=en,Y=S(),O=k("button"),O.innerHTML=rn,this.h()},l(c){r=z(c,"DIV",{id:!0,class:!0});var x=q(r);M(s.$$.fragment,x),f=T(x),t=z(x,"DIV",{id:!0,class:!0});var C=q(t);M(e.$$.fragment,C),a=T(C),M(n.$$.fragment,C),_=T(C),M(u.$$.fragment,C),b=T(C),M(g.$$.fragment,C),A=T(C),M(h.$$.fragment,C),C.forEach(E),L=T(x),w=z(x,"H1",{class:!0,"data-svelte-h":!0}),U(w)!=="svelte-12vckjm"&&(w.textContent=R),i=T(x),l=z(x,"BUTTON",{id:!0,"aria-label":!0,class:!0});var X=q(l);p=dn(X,K),o=z(X,"SPAN",{class:!0,"data-svelte-h":!0}),U(o)!=="svelte-nvhv7g"&&(o.textContent=y),X.forEach(E),$=T(x),B=z(x,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),U(B)!=="svelte-1eth16w"&&(B.innerHTML=en),Y=T(x),O=z(x,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),U(O)!=="svelte-3l2q6y"&&(O.innerHTML=rn),x.forEach(E),this.h()},h(){v(t,"id","shaders"),v(t,"class","svelte-m6xsfi"),v(w,"class","main-text svelte-m6xsfi"),v(o,"class","hidden svelte-m6xsfi"),v(l,"id","contact-info"),v(l,"aria-label","Contact me"),v(l,"class","svelte-m6xsfi"),v(B,"class","arrow-left svelte-m6xsfi"),v(B,"aria-label","Scroll left"),v(O,"class","arrow-right svelte-m6xsfi"),v(O,"aria-label","Scroll right"),v(r,"id","gradient"),v(r,"class","glass-pane svelte-m6xsfi")},m(c,x){D(c,r,x),V(s,r,null),m(r,f),m(r,t),V(e,t,null),m(t,a),V(n,t,null),m(t,_),V(u,t,null),m(t,b),V(g,t,null),m(t,A),V(h,t,null),d[4](t),m(r,L),m(r,w),m(r,i),m(r,l),m(l,p),m(l,o),m(r,$),m(r,B),m(r,Y),m(r,O),G=!0,Z||(tn=[j(l,"click",d[1]),j(B,"click",d[2]),j(O,"click",d[3])],Z=!0)},p:W,i(c){G||(H(s.$$.fragment,c),H(e.$$.fragment,c),H(n.$$.fragment,c),H(u.$$.fragment,c),H(g.$$.fragment,c),H(h.$$.fragment,c),G=!0)},o(c){I(s.$$.fragment,c),I(e.$$.fragment,c),I(n.$$.fragment,c),I(u.$$.fragment,c),I(g.$$.fragment,c),I(h.$$.fragment,c),G=!1},d(c){c&&E(r),N(s),N(e),N(n),N(u),N(g),N(h),d[4](null),Z=!1,sn(tn)}}}const K="lumi.main.mail@gmail.com";function bn(d,r,s){const f=o=>{navigator.clipboard.writeText(K);const y=o.currentTarget.children.item(0);y&&(y.classList.remove("hidden"),setTimeout(()=>{y.classList.add("hidden")},2e3))};let t,e=0,a;const n=async()=>{a!==null&&clearTimeout(a),await cn(),a=setTimeout(()=>{let o=Math.round(e/window.innerWidth)*window.innerWidth;e=e-o>0?o+window.innerWidth:e-o<0?o-window.innerWidth:e,t.scrollTo({left:e,behavior:"smooth"})},300)};function _(){t!==null&&(e=(Math.round(e/window.innerWidth)-1)*window.innerWidth,e<0&&(e=t.scrollWidth-window.innerWidth),t.scrollTo({left:e,behavior:"smooth"}))}function u(){t!==null&&(e=(Math.round(e/window.innerWidth)+1)*window.innerWidth,e>t.scrollWidth-window.innerWidth&&(e=0),t.scrollTo({left:e,behavior:"smooth"}))}const b=()=>{e=t.scrollLeft,n()},g=o=>{switch(o.key){case"ArrowLeft":_();break;case"ArrowRight":case" ":u();break}},A=o=>{o.deltaY>0?_():u()};let h=0;const L=()=>{e=Math.round(e/h)*window.innerWidth,t&&t.scrollTo({left:e,behavior:"auto"}),h=window.innerWidth};let w=0,R=0;const i=o=>{o.button===0&&(w=o.clientX,R=o.clientY)},l=o=>{if(o.button===0){const y=o.clientX-w,$=o.clientY-R;Math.abs(y)>Math.abs($)&&(y>0?_():u())}};on(()=>{t&&t.addEventListener("scroll",b),window&&(h=window.innerWidth,window.addEventListener("keyup",g),window.addEventListener("resize",L),window.addEventListener("wheel",A),window.addEventListener("mousedown",i),window.addEventListener("mouseup",l))}),ln(()=>{t&&t.removeEventListener("scroll",b),typeof window<"u"&&(window.removeEventListener("keyup",g),window.removeEventListener("resize",L),window.removeEventListener("wheel",A),window.removeEventListener("mousedown",i),window.removeEventListener("mouseup",l))});function p(o){an[o?"unshift":"push"](()=>{t=o,s(0,t)})}return[t,f,_,u,p]}class Sn extends Q{constructor(r){super(),nn(this,r,bn,yn,J,{})}}export{Sn as component};
