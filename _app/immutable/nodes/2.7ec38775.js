import{s as Q,n as W,o as sr,b as lr,r as ir,f as cr}from"../chunks/scheduler.b108d059.js";import{S as rr,i as er,g as S,s as L,h as k,y as D,c as C,j as F,f as _,k as f,a as q,r as A,m as fr,u as P,n as vr,v as R,x as h,z as K,d as H,t as I,w as N}from"../chunks/index.f5626e03.js";function dr(v){let o,c=`<a href="https://shadertoy.com/user/Peace" target="_blank" class="svelte-o61m3w"><img class="nav-icon svelte-o61m3w" src="shadertoy.webp" alt="Shadertoy Icon" width="38" height="38"/>
		Shaders</a> <a href="https://fiverr.com/lumiey" target="_blank" class="svelte-o61m3w"><svg class="nav-icon svelte-o61m3w" width="38" height="38" viewBox="0 0 400 400"><circle cx="200" cy="200" fill="#00b22d" r="200"></circle><g fill="#fff"><path d="M364.4 162.7c0-6.6-5.2-12-11.8-12-6.4 0-11.7 5.3-11.7 12 0 6.6 5.2 12 11.7 12 6.6.1 11.8-5.3 11.8-12zm-11.8 8.7c-4.5 0-8-3.8-8-8.7 0-4.8 3.5-8.6 8-8.6 4.6 0 8.2 3.8 8.2 8.6 0 4.9-3.6 8.7-8.2 8.7z"></path><path d="M355.8 163.7c.6-.2 1.9-1.1 1.9-3 0-2.3-1.5-3.7-4-3.7h-5.3v11.3h3.5v-3.8h.9l1.6 3.8h3.8l-2.1-3.9c-.2-.6-.3-.7-.3-.7zm-3-1.6h-.9v-2.7h.9c.8 0 1.2.4 1.2 1.3.1.9-.4 1.4-1.2 1.4z"></path><circle cx="104.6" cy="163" r="9"></circle><path d="M114 177.9H72.8v-2.7c0-5.3 5.3-5.4 8-5.4 3.1 0 4.5.3 4.5.3v-14.6s-2.8-.4-6.6-.4c-8.6 0-24.5 2.4-24.5 20.6v2.3h-7.5v13.5h7.5V220h-7v13.5H81V220h-8.2v-28.5h22.5V220h-7v13.5H121V220h-7zm70 0h-29.5v13.5h5l-6.4 20c-1.2 3.3-1.5 7.3-1.5 7.3h-.4s-.3-4-1.5-7.3l-6.4-20h5v-13.5h-29.5v13.5h6.2l15.4 42h22l15.4-42h6.2zm54.6 25.5c0-15.4-9.3-26.8-25.8-26.8-17.9 0-28.9 12.7-28.9 29 0 14.8 10.7 29.1 30.5 29.1 15 0 23.9-7.8 23.9-7.8l-6.8-12.9s-7.4 5.3-15.6 5.3c-5.9 0-11.5-3.1-12.9-10.2h35.2c-.1-.1.4-3.9.4-5.7zm-35.2-4.6c1-4.3 3.6-8.2 8.9-8.2 4.1 0 7 3.8 7 8.2zm114.1-8.1h-.2s.2-1.1.2-2.8V185c0-5.1-2.8-7.1-7.9-7.1h-17.5v13.5h5.2c1.5 0 2.4.9 2.4 2.4V220h-7.5v13.5h33.7V220h-7.5v-8.1c0-10.1 5-16.7 15.3-16.7 2.3 0 3.8.3 3.8.3v-18.3s-1.1-.2-2.2-.2c-8.4-.1-15.4 6.1-17.8 13.7zm-49.3 0h-.2s.2-1.1.2-2.8V185c0-5.1-2.8-7.1-7.9-7.1h-17.5v13.5h5.2c1.5 0 2.4.9 2.4 2.4V220h-7.5v13.5h33.7V220h-7.5v-8.1c0-10.1 5-16.7 15.3-16.7 2.3 0 3.8.3 3.8.3v-18.3s-1.1-.2-2.2-.2c-8.5-.1-15.5 6.1-17.8 13.7z"></path></g></svg>Fiverr</a> <a href="https://github.com/GeorgeAzma" target="_blank" class="svelte-o61m3w"><svg class="nav-icon svelte-o61m3w" viewBox="0 0 98 96" width="38" height="38"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"></path></svg>
		Github</a> <a href="https://www.linkedin.com/in/george-azmaipharashvili-ab8b7b286/" target="_blank" class="svelte-o61m3w"><svg class="nav-icon svelte-o61m3w" width="38" height="38" viewBox="0 0 128 128" id="linkedin"><circle cx="64" cy="64" r="64" fill="#0a66c2"></circle><path fill="#fff" d="M92 32H36a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h56a4 4 0 0 0 4-4V36a4 4 0 0 0-4-4ZM52 86H42V56h10Zm-5-34a6 6 0 1 1 6-6 6 6 0 0 1-6 6Zm39 34H76V66c0-1.66-2.24-3-5-3-4 0-5 5.34-5 7v16H56V56h10v7c0-5 4.48-7 10-7a10 10 0 0 1 10 10Z"></path></svg>
		LinkedIn</a>`,a,n;return{c(){o=S("nav"),o.innerHTML=c,a=L(),n=S("div"),this.h()},l(s){o=k(s,"NAV",{id:!0,class:!0,"data-svelte-h":!0}),D(o)!=="svelte-w5m299"&&(o.innerHTML=c),a=C(s),n=k(s,"DIV",{}),F(n).forEach(_),this.h()},h(){f(o,"id","navbar"),f(o,"class","svelte-o61m3w")},m(s,e){q(s,o,e),q(s,a,e),q(s,n,e)},p:W,i:W,o:W,d(s){s&&(_(o),_(a),_(n))}}}class ur extends rr{constructor(o){super(),er(this,o,null,dr,Q,{})}}function mr(v){let o;return{c(){o=S("canvas"),this.h()},l(c){o=k(c,"CANVAS",{id:!0,class:!0}),F(o).forEach(_),this.h()},h(){f(o,"id","background-shader"),f(o,"class","svelte-9zun04")},m(c,a){q(c,o,a),v[3](o)},p:W,i:W,o:W,d(c){c&&_(o),v[3](null)}}}function hr(v,o,c){let{frag:a=""}=o,{vert:n=""}=o,s,e=null,r=null,w,d,E=null,x=null;function $(){const l=s.getBoundingClientRect();return l.left>=-window.innerWidth&&l.right<=window.innerWidth*2}function p(){c(0,s.width=window.innerWidth,s),c(0,s.height=window.innerHeight,s),r&&e&&(r.useProgram(e),r.uniform2f(E,s.width,s.height),r.viewport(0,0,s.width,s.height))}sr(()=>{if(r=s.getContext("webgl2"),!r){console.error("WebGL is not supported in this browser.");return}return w=performance.now(),d=w,window.addEventListener("resize",p),T(n,a),()=>{window.removeEventListener("resize",p)}});function T(l,b){if(b||(b=`#version 300 es 
      out vec4 fragColor;
      void main() {
      fragColor = vec4(1, 0, 1, 1);
      }`),l||(l=`#version 300 es 
      void main() {
        vec2 vertices[3]=vec2[3](vec2(-1,-1), vec2(3,-1), vec2(-1, 3));
        gl_Position = vec4(vertices[gl_VertexID],0,1);
      }`),!!r){if($()){const y=r.createShader(r.FRAGMENT_SHADER);if(!y){alert("Could not create fragment shader");return}if(r.shaderSource(y,b),r.compileShader(y),!r.getShaderParameter(y,r.COMPILE_STATUS)){const u=r.getShaderInfoLog(y);console.error("Fragment shader compilation error:",u)}const t=r.createShader(r.VERTEX_SHADER);if(!t){alert("Could not create vertex shader");return}if(r.shaderSource(t,l),r.compileShader(t),!r.getShaderParameter(t,r.COMPILE_STATUS)){const u=r.getShaderInfoLog(t);console.error("Vertex shader compilation error:",u)}if(e&&(r.deleteProgram(e),e=null),e=r.createProgram(),!e){alert("Could not create shader program");return}if(r.attachShader(e,y),r.attachShader(e,t),r.linkProgram(e),!r.getProgramParameter(e,r.LINK_STATUS)){const u=r.getProgramInfoLog(e);console.error("Program link error:",u)}r.deleteShader(y),r.deleteShader(t),r.useProgram(e),E=r.getUniformLocation(e,"resolution"),x=r.getUniformLocation(e,"time")}p(),g()}}function g(){if(!(s&&r))return;let l=performance.now();if(!$()){requestAnimationFrame(g);const b=l-d;w+=b,d=l;return}e||T(n,a),e&&(r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT),r.useProgram(e),r.drawArrays(r.TRIANGLE_STRIP,0,4),r.uniform1f(x,(l-w)/1e3),d=l,requestAnimationFrame(g))}function V(l){lr[l?"unshift":"push"](()=>{s=l,c(0,s)})}return v.$$set=l=>{"frag"in l&&c(1,a=l.frag),"vert"in l&&c(2,n=l.vert)},v.$$.update=()=>{v.$$.dirty&6&&T(n,a)},[s,a,n,V]}class U extends rr{constructor(o){super(),er(this,o,hr,mr,Q,{frag:1,vert:2})}}const pr=`#version 300 es\r
\r
precision highp float;\r
\r
uniform float time;\r
uniform vec2 resolution;\r
\r
out vec4 fragColor;\r
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
    fragColor = vec4(col, 1);\r
}`,gr=`#version 300 es\r
\r
precision highp float;\r
\r
uniform float time;\r
uniform vec2 resolution;\r
\r
out vec4 fragColor;\r
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
    fragColor = vec4(c, 1);\r
}`,wr=`#version 300 es\r
\r
precision highp float;\r
\r
uniform float time;\r
uniform vec2 resolution;\r
\r
out vec4 fragColor;\r
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
        fragColor = vec4(background, 1);\r
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
    fragColor = vec4(mix(background, col, m), 1);\r
}`,xr=`#version 300 es\r
\r
precision highp float;\r
\r
uniform float time;\r
uniform vec2 resolution;\r
\r
out vec4 fragColor;\r
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
    fragColor = vec4(0);\r
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
    fragColor = vec4(mix(vec3(1, 1, 1), col, alpha * sm2), 1);\r
}`,yr=`#version 300 es\r
\r
precision highp float;\r
\r
uniform float time;\r
uniform vec2 resolution;\r
\r
out vec4 fragColor;\r
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
    fragColor = vec4(col, 1);\r
}`;function _r(v){let o,c,a,n,s,e,r,w,d,E,x,$,p,T,g,V,l,b="I'm Lumiey, graphics developer and software engineer.",y,t,u,O,nr="(Copied)",Z,B,tr='<svg viewBox="-4.5 0 20 20" stroke="#ffffffcc" stroke-width="0.6" fill="#ffffffaa" class="svelte-f552qf"><path transform="translate(-331.000000, -6519.000000)" d="M338.61,6539 L340,6537.594 L331.739,6528.987 L332.62,6528.069 L332.615,6528.074 L339.955,6520.427 L338.586,6519 C336.557,6521.113 330.893,6527.014 329,6528.987 C330.406,6530.453 329.035,6529.024 338.61,6539" class="svelte-f552qf"></path></svg>',X,M,or='<svg viewBox="-4.5 0 20 20" stroke="#ffffffcc" stroke-width="0.6" fill="#ffffffaa" class="svelte-f552qf"><path transform="scale(-1, 1) translate(-341.000000, -6519.000000)" d="M338.61,6539 L340,6537.594 L331.739,6528.987 L332.62,6528.069 L332.615,6528.074 L339.955,6520.427 L338.586,6519 C336.557,6521.113 330.893,6527.014 329,6528.987 C330.406,6530.453 329.035,6529.024 338.61,6539" class="svelte-f552qf"></path></svg>',G,Y,ar;return n=new ur({}),r=new U({props:{frag:pr}}),d=new U({props:{frag:gr}}),x=new U({props:{frag:wr}}),p=new U({props:{frag:xr}}),g=new U({props:{frag:yr}}),{c(){o=S("div"),c=L(),a=S("div"),A(n.$$.fragment),s=L(),e=S("div"),A(r.$$.fragment),w=L(),A(d.$$.fragment),E=L(),A(x.$$.fragment),$=L(),A(p.$$.fragment),T=L(),A(g.$$.fragment),V=L(),l=S("h1"),l.textContent=b,y=L(),t=S("button"),u=fr(J),O=S("span"),O.textContent=nr,Z=L(),B=S("button"),B.innerHTML=tr,X=L(),M=S("button"),M.innerHTML=or,this.h()},l(i){o=k(i,"DIV",{class:!0}),F(o).forEach(_),c=C(i),a=k(i,"DIV",{id:!0,class:!0});var m=F(a);P(n.$$.fragment,m),s=C(m),e=k(m,"DIV",{id:!0,class:!0});var z=F(e);P(r.$$.fragment,z),w=C(z),P(d.$$.fragment,z),E=C(z),P(x.$$.fragment,z),$=C(z),P(p.$$.fragment,z),T=C(z),P(g.$$.fragment,z),z.forEach(_),V=C(m),l=k(m,"H1",{class:!0,"data-svelte-h":!0}),D(l)!=="svelte-12vckjm"&&(l.textContent=b),y=C(m),t=k(m,"BUTTON",{id:!0,"aria-label":!0,class:!0});var j=F(t);u=vr(j,J),O=k(j,"SPAN",{class:!0,"data-svelte-h":!0}),D(O)!=="svelte-nvhv7g"&&(O.textContent=nr),j.forEach(_),Z=C(m),B=k(m,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),D(B)!=="svelte-1eth16w"&&(B.innerHTML=tr),X=C(m),M=k(m,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),D(M)!=="svelte-3l2q6y"&&(M.innerHTML=or),m.forEach(_),this.h()},h(){f(o,"class","loader svelte-f552qf"),f(e,"id","shaders"),f(e,"class","svelte-f552qf"),f(l,"class","main-text svelte-f552qf"),f(O,"class","hidden svelte-f552qf"),f(t,"id","contact-info"),f(t,"aria-label","Contact me"),f(t,"class","svelte-f552qf"),f(B,"class","arrow-left svelte-f552qf"),f(B,"aria-label","Scroll left"),f(M,"class","arrow-right svelte-f552qf"),f(M,"aria-label","Scroll right"),f(a,"id","gradient"),f(a,"class","glass-pane svelte-f552qf")},m(i,m){q(i,o,m),q(i,c,m),q(i,a,m),R(n,a,null),h(a,s),h(a,e),R(r,e,null),h(e,w),R(d,e,null),h(e,E),R(x,e,null),h(e,$),R(p,e,null),h(e,T),R(g,e,null),v[4](e),h(a,V),h(a,l),h(a,y),h(a,t),h(t,u),h(t,O),h(a,Z),h(a,B),h(a,X),h(a,M),G=!0,Y||(ar=[K(t,"click",v[1]),K(B,"click",v[2]),K(M,"click",v[3])],Y=!0)},p:W,i(i){G||(H(n.$$.fragment,i),H(r.$$.fragment,i),H(d.$$.fragment,i),H(x.$$.fragment,i),H(p.$$.fragment,i),H(g.$$.fragment,i),G=!0)},o(i){I(n.$$.fragment,i),I(r.$$.fragment,i),I(d.$$.fragment,i),I(x.$$.fragment,i),I(p.$$.fragment,i),I(g.$$.fragment,i),G=!1},d(i){i&&(_(o),_(c),_(a)),N(n),N(r),N(d),N(x),N(p),N(g),v[4](null),Y=!1,ir(ar)}}}const J="lumi.main.mail@gmail.com";function br(v,o,c){const a=t=>{navigator.clipboard.writeText(J);const u=t.currentTarget.children.item(0);u&&(u.classList.remove("hidden"),setTimeout(()=>{u.classList.add("hidden")},2e3))};let n,s=null,e=0;const r=async()=>{s!==null&&(clearTimeout(s),s=null),s=setTimeout(()=>{e=Math.round(n.scrollLeft/window.innerWidth),n.scrollTo({left:e*window.innerWidth,behavior:"smooth"})},500)};function w(){n!==null&&(e-=1,e<0&&(e=n.scrollWidth/window.innerWidth-1),n.scrollTo({left:e*window.innerWidth,behavior:"smooth"}))}function d(){n!==null&&(e+=1,e>n.scrollWidth/window.innerWidth-1&&(e=0),n.scrollTo({left:e*window.innerWidth,behavior:"smooth"}))}const E=()=>{r()},x=t=>{switch(t.key){case"ArrowLeft":case"a":w();break;case"ArrowRight":case"d":case" ":d();break}},$=t=>{t.deltaY>0?w():d()};let p=0;const T=()=>{let t=Math.round(n.scrollLeft/p)*window.innerWidth;n&&n.scrollTo({left:t,behavior:"instant"}),p=window.innerWidth};let g=0,V=0;const l=t=>{t.button===0&&(g=t.clientX,V=t.clientY)},b=t=>{if(t.button===0){const u=t.clientX-g,O=t.clientY-V;Math.abs(u)>Math.abs(O)&&(u>0?w():d())}};sr(()=>{n&&n.addEventListener("scroll",E),window&&(p=window.innerWidth,window.addEventListener("keyup",x),window.addEventListener("resize",T),window.addEventListener("wheel",$),window.addEventListener("mousedown",l),window.addEventListener("mouseup",b))}),cr(()=>{n&&n.removeEventListener("scroll",E),typeof window<"u"&&(window.removeEventListener("keyup",x),window.removeEventListener("resize",T),window.removeEventListener("wheel",$),window.removeEventListener("mousedown",l),window.removeEventListener("mouseup",b))});function y(t){lr[t?"unshift":"push"](()=>{n=t,c(0,n)})}return[n,a,w,d,y]}class Sr extends rr{constructor(o){super(),er(this,o,br,_r,Q,{})}}export{Sr as component};
