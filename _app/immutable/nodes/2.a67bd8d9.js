import{s as j,n as E,o as ee,b as re,r as ne,f as te,t as oe}from"../chunks/scheduler.b108d059.js";import{S as K,i as X,g as y,s as T,h as b,y as R,c as A,j as M,f as L,k as u,a as W,r as F,m as ie,u as $,n as ae,v as H,x as h,z as Z,d as I,t as N,w as P}from"../chunks/index.f5626e03.js";function se(s){let n,a=`<a href="https://shadertoy.com/user/Peace" target="_blank" class="svelte-1nngt3d"><img class="nav-icon svelte-1nngt3d" src="shadertoy.webp" alt="Shadertoy Icon" width="38" height="38"/>
		Shaders</a> <a href="https://fiverr.com/lumiey" target="_blank" class="svelte-1nngt3d"><svg class="nav-icon svelte-1nngt3d" width="38" height="38" viewBox="0 0 400 400"><circle cx="200" cy="200" fill="#00b22d" r="200"></circle><g fill="#fff"><path d="M364.4 162.7c0-6.6-5.2-12-11.8-12-6.4 0-11.7 5.3-11.7 12 0 6.6 5.2 12 11.7 12 6.6.1 11.8-5.3 11.8-12zm-11.8 8.7c-4.5 0-8-3.8-8-8.7 0-4.8 3.5-8.6 8-8.6 4.6 0 8.2 3.8 8.2 8.6 0 4.9-3.6 8.7-8.2 8.7z"></path><path d="M355.8 163.7c.6-.2 1.9-1.1 1.9-3 0-2.3-1.5-3.7-4-3.7h-5.3v11.3h3.5v-3.8h.9l1.6 3.8h3.8l-2.1-3.9c-.2-.6-.3-.7-.3-.7zm-3-1.6h-.9v-2.7h.9c.8 0 1.2.4 1.2 1.3.1.9-.4 1.4-1.2 1.4z"></path><circle cx="104.6" cy="163" r="9"></circle><path d="M114 177.9H72.8v-2.7c0-5.3 5.3-5.4 8-5.4 3.1 0 4.5.3 4.5.3v-14.6s-2.8-.4-6.6-.4c-8.6 0-24.5 2.4-24.5 20.6v2.3h-7.5v13.5h7.5V220h-7v13.5H81V220h-8.2v-28.5h22.5V220h-7v13.5H121V220h-7zm70 0h-29.5v13.5h5l-6.4 20c-1.2 3.3-1.5 7.3-1.5 7.3h-.4s-.3-4-1.5-7.3l-6.4-20h5v-13.5h-29.5v13.5h6.2l15.4 42h22l15.4-42h6.2zm54.6 25.5c0-15.4-9.3-26.8-25.8-26.8-17.9 0-28.9 12.7-28.9 29 0 14.8 10.7 29.1 30.5 29.1 15 0 23.9-7.8 23.9-7.8l-6.8-12.9s-7.4 5.3-15.6 5.3c-5.9 0-11.5-3.1-12.9-10.2h35.2c-.1-.1.4-3.9.4-5.7zm-35.2-4.6c1-4.3 3.6-8.2 8.9-8.2 4.1 0 7 3.8 7 8.2zm114.1-8.1h-.2s.2-1.1.2-2.8V185c0-5.1-2.8-7.1-7.9-7.1h-17.5v13.5h5.2c1.5 0 2.4.9 2.4 2.4V220h-7.5v13.5h33.7V220h-7.5v-8.1c0-10.1 5-16.7 15.3-16.7 2.3 0 3.8.3 3.8.3v-18.3s-1.1-.2-2.2-.2c-8.4-.1-15.4 6.1-17.8 13.7zm-49.3 0h-.2s.2-1.1.2-2.8V185c0-5.1-2.8-7.1-7.9-7.1h-17.5v13.5h5.2c1.5 0 2.4.9 2.4 2.4V220h-7.5v13.5h33.7V220h-7.5v-8.1c0-10.1 5-16.7 15.3-16.7 2.3 0 3.8.3 3.8.3v-18.3s-1.1-.2-2.2-.2c-8.5-.1-15.5 6.1-17.8 13.7z"></path></g></svg>Fiverr</a> <a href="https://github.com/GeorgeAzma" target="_blank" class="svelte-1nngt3d"><svg class="nav-icon svelte-1nngt3d" viewBox="0 0 98 96" width="38" height="38"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"></path></svg>
		Github</a> <a href="https://www.linkedin.com/in/george-azmaipharashvili-ab8b7b286/" target="_blank" class="svelte-1nngt3d"><svg class="nav-icon svelte-1nngt3d" width="38" height="38" viewBox="0 0 128 128" id="linkedin"><circle cx="64" cy="64" r="64" fill="#0a66c2"></circle><path fill="#fff" d="M92 32H36a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h56a4 4 0 0 0 4-4V36a4 4 0 0 0-4-4ZM52 86H42V56h10Zm-5-34a6 6 0 1 1 6-6 6 6 0 0 1-6 6Zm39 34H76V66c0-1.66-2.24-3-5-3-4 0-5 5.34-5 7v16H56V56h10v7c0-5 4.48-7 10-7a10 10 0 0 1 10 10Z"></path></svg>
		LinkedIn</a>`,l,t;return{c(){n=y("nav"),n.innerHTML=a,l=T(),t=y("div"),this.h()},l(r){n=b(r,"NAV",{id:!0,class:!0,"data-svelte-h":!0}),R(n)!=="svelte-w5m299"&&(n.innerHTML=a),l=A(r),t=b(r,"DIV",{}),M(t).forEach(L),this.h()},h(){u(n,"id","navbar"),u(n,"class","svelte-1nngt3d")},m(r,i){W(r,n,i),W(r,l,i),W(r,t,i)},p:E,i:E,o:E,d(r){r&&(L(n),L(l),L(t))}}}class le extends K{constructor(n){super(),X(this,n,null,se,j,{})}}function ce(s){let n;return{c(){n=y("canvas"),this.h()},l(a){n=b(a,"CANVAS",{id:!0,class:!0}),M(n).forEach(L),this.h()},h(){u(n,"id","background-shader"),u(n,"class","svelte-cx4n7w")},m(a,l){W(a,n,l),s[3](n)},p:E,i:E,o:E,d(a){a&&L(n),s[3](null)}}}function de(s,n,a){let{frag:l=""}=n,{vert:t=""}=n,r,i,e,S=performance.now();const g=[-1,-1,1,-1,-1,1,1,1];let x;function f(){if(r&&(a(0,r.width=window.innerWidth,r),a(0,r.height=window.innerHeight,r),e&&i)){const o=e.getUniformLocation(i,"resolution");e.uniform2f(o,r.width,r.height),e.viewport(0,0,r.width,r.height)}}ee(()=>{if(e=r.getContext("webgl2"),!e){console.error("WebGL is not supported in this browser.");return}return x=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,x),e.bufferData(e.ARRAY_BUFFER,new Float32Array(g),e.STATIC_DRAW),S=performance.now(),window.addEventListener("resize",f),z(t,l),()=>{window.removeEventListener("resize",f)}});function z(o,c){if(c||(c="precision mediump float;void main() {gl_FragColor=vec4(1);}"),o||(o="attribute vec4 a_position;void main() {gl_Position = a_position;}"),!e)return;const _=e.createShader(e.FRAGMENT_SHADER);if(!_){alert("Could not create fragment shader");return}if(e.shaderSource(_,c),e.compileShader(_),!e.getShaderParameter(_,e.COMPILE_STATUS)){const O=e.getShaderInfoLog(_);console.error("Fragment shader compilation error:",O)}const p=e.createShader(e.VERTEX_SHADER);if(!p){alert("Could not create vertex shader");return}if(e.shaderSource(p,o),e.compileShader(p),!e.getShaderParameter(p,e.COMPILE_STATUS)){const O=e.getShaderInfoLog(p);console.error("Vertex shader compilation error:",O)}if(i&&(e.deleteProgram(i),i=null),i=e.createProgram(),!i){alert("Could not create shader program");return}e.attachShader(i,_),e.attachShader(i,p),e.linkProgram(i),e.deleteShader(_),e.deleteShader(p),e.useProgram(i);const w=e.getAttribLocation(i,"a_position");e.enableVertexAttribArray(w),e.vertexAttribPointer(w,2,e.FLOAT,!1,0,0),f(),C()}function C(){if(!(r&&e&&i))return;e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(i),e.bindBuffer(e.ARRAY_BUFFER,x),e.drawArrays(e.TRIANGLE_STRIP,0,4);const o=e.getUniformLocation(i,"time");o&&e.uniform1f(o,(performance.now()-S)/1e3),requestAnimationFrame(C)}function m(o){re[o?"unshift":"push"](()=>{r=o,a(0,r)})}return s.$$set=o=>{"frag"in o&&a(1,l=o.frag),"vert"in o&&a(2,t=o.vert)},s.$$.update=()=>{s.$$.dirty&6&&z(t,l)},[r,l,t,m]}class q extends K{constructor(n){super(),X(this,n,de,ce,j,{frag:1,vert:2})}}const fe=`precision lowp float;\r
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
}`,ve=`precision lowp float;\r
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
}`,he=`precision lowp float;\r
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
}`;function ue(s){let n,a,l,t,r,i,e,S,g,x,f,z="I'm Lumiey, graphics developer and software engineer.",C,m,o,c,_="(Copied)",p,w,O='<svg viewBox="-4.5 0 20 20" stroke="#ffffffcc" stroke-width="0.6" fill="#ffffffaa" class="svelte-hizyrg"><path transform="translate(-331.000000, -6519.000000)" d="M338.61,6539 L340,6537.594 L331.739,6528.987 L332.62,6528.069 L332.615,6528.074 L339.955,6520.427 L338.586,6519 C336.557,6521.113 330.893,6527.014 329,6528.987 C330.406,6530.453 329.035,6529.024 338.61,6539" class="svelte-hizyrg"></path></svg>',U,k,J='<svg viewBox="-4.5 0 20 20" stroke="#ffffffcc" stroke-width="0.6" fill="#ffffffaa" class="svelte-hizyrg"><path transform="scale(-1, 1) translate(-341.000000, -6519.000000)" d="M338.61,6539 L340,6537.594 L331.739,6528.987 L332.62,6528.069 L332.615,6528.074 L339.955,6520.427 L338.586,6519 C336.557,6521.113 330.893,6527.014 329,6528.987 C330.406,6530.453 329.035,6529.024 338.61,6539" class="svelte-hizyrg"></path></svg>',V,G,Q;return a=new le({}),r=new q({props:{frag:fe}}),e=new q({props:{frag:ve}}),g=new q({props:{frag:he}}),{c(){n=y("div"),F(a.$$.fragment),l=T(),t=y("div"),F(r.$$.fragment),i=T(),F(e.$$.fragment),S=T(),F(g.$$.fragment),x=T(),f=y("h1"),f.textContent=z,C=T(),m=y("button"),o=ie(Y),c=y("span"),c.textContent=_,p=T(),w=y("button"),w.innerHTML=O,U=T(),k=y("button"),k.innerHTML=J,this.h()},l(d){n=b(d,"DIV",{id:!0,class:!0});var v=M(n);$(a.$$.fragment,v),l=A(v),t=b(v,"DIV",{id:!0,class:!0});var B=M(t);$(r.$$.fragment,B),i=A(B),$(e.$$.fragment,B),S=A(B),$(g.$$.fragment,B),B.forEach(L),x=A(v),f=b(v,"H1",{class:!0,"data-svelte-h":!0}),R(f)!=="svelte-12vckjm"&&(f.textContent=z),C=A(v),m=b(v,"BUTTON",{id:!0,class:!0});var D=M(m);o=ae(D,Y),c=b(D,"SPAN",{class:!0,"data-svelte-h":!0}),R(c)!=="svelte-nvhv7g"&&(c.textContent=_),D.forEach(L),p=A(v),w=b(v,"BUTTON",{class:!0,"data-svelte-h":!0}),R(w)!=="svelte-1f5t9m5"&&(w.innerHTML=O),U=A(v),k=b(v,"BUTTON",{class:!0,"data-svelte-h":!0}),R(k)!=="svelte-6ekoyu"&&(k.innerHTML=J),v.forEach(L),this.h()},h(){u(t,"id","shaders"),u(t,"class","svelte-hizyrg"),u(f,"class","main-text svelte-hizyrg"),u(c,"class","hidden svelte-hizyrg"),u(m,"id","contact-info"),u(m,"class","svelte-hizyrg"),u(w,"class","arrow-left svelte-hizyrg"),u(k,"class","arrow-right svelte-hizyrg"),u(n,"id","gradient"),u(n,"class","glass-pane svelte-hizyrg")},m(d,v){W(d,n,v),H(a,n,null),h(n,l),h(n,t),H(r,t,null),h(t,i),H(e,t,null),h(t,S),H(g,t,null),s[4](t),h(n,x),h(n,f),h(n,C),h(n,m),h(m,o),h(m,c),h(n,p),h(n,w),h(n,U),h(n,k),V=!0,G||(Q=[Z(m,"click",s[1]),Z(w,"click",s[2]),Z(k,"click",s[3])],G=!0)},p:E,i(d){V||(I(a.$$.fragment,d),I(r.$$.fragment,d),I(e.$$.fragment,d),I(g.$$.fragment,d),V=!0)},o(d){N(a.$$.fragment,d),N(r.$$.fragment,d),N(e.$$.fragment,d),N(g.$$.fragment,d),V=!1},d(d){d&&L(n),P(a),P(r),P(e),P(g),s[4](null),G=!1,ne(Q)}}}const Y="lumi.main.mail@gmail.com";function me(s,n,a){const l=o=>{navigator.clipboard.writeText(Y);const c=o.currentTarget.children.item(0);c&&(c.classList.remove("hidden"),setTimeout(()=>{c.classList.add("hidden")},2e3))};let t,r=0,i;const e=async()=>{i!==null&&clearTimeout(i),await oe(),i=setTimeout(()=>{let o=Math.round(r/window.innerWidth)*window.innerWidth;r=r-o>0?o+window.innerWidth:r-o<0?o-window.innerWidth:r,t.scrollTo({left:r,behavior:"smooth"})},400)};function S(){t!==null&&(r=Math.max(0,Math.round(r/window.innerWidth)-1)*window.innerWidth,t.scrollTo({left:r,behavior:"smooth"}))}function g(){t!==null&&(r=Math.min(t.scrollWidth-window.innerWidth,(Math.round(r/window.innerWidth)+1)*window.innerWidth),t.scrollTo({left:r,behavior:"smooth"}))}const x=()=>{r=t.scrollLeft,e()},f=o=>{switch(o.key){case"ArrowLeft":S();break;case"ArrowRight":g();break}};let z=0;const C=()=>{r=Math.round(r/z)*window.innerWidth,t&&t.scrollTo({left:r,behavior:"auto"}),z=window.innerWidth};ee(()=>{t&&t.addEventListener("scroll",x),window&&(z=window.innerWidth,window.addEventListener("keyup",f),window.addEventListener("resize",C))}),te(()=>{t&&t.removeEventListener("scroll",x),typeof window<"u"&&(window.removeEventListener("keyup",f),window.removeEventListener("resize",C))});function m(o){re[o?"unshift":"push"](()=>{t=o,a(0,t)})}return[t,l,S,g,m]}class we extends K{constructor(n){super(),X(this,n,me,ue,j,{})}}export{we as component};
