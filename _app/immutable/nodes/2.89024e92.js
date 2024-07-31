import{s as Q,n as V,o as ae,b as ie,r as le,f as ce}from"../chunks/scheduler.b108d059.js";import{S as ee,i as re,g as S,s as L,h as k,y as D,c as C,j as F,f as _,k as f,a as q,r as A,m as fe,u as P,n as ve,v as R,x as h,z as K,d as H,t as I,w as N}from"../chunks/index.f5626e03.js";function de(v){let s,l=`<a href="https://shadertoy.com/user/Peace" target="_blank" class="svelte-o61m3w"><img class="nav-icon svelte-o61m3w" src="shadertoy.webp" alt="Shadertoy Icon" width="38" height="38"/>
		Shaders</a> <a href="https://fiverr.com/lumiey" target="_blank" class="svelte-o61m3w"><svg class="nav-icon svelte-o61m3w" width="38" height="38" viewBox="0 0 400 400"><circle cx="200" cy="200" fill="#00b22d" r="200"></circle><g fill="#fff"><path d="M364.4 162.7c0-6.6-5.2-12-11.8-12-6.4 0-11.7 5.3-11.7 12 0 6.6 5.2 12 11.7 12 6.6.1 11.8-5.3 11.8-12zm-11.8 8.7c-4.5 0-8-3.8-8-8.7 0-4.8 3.5-8.6 8-8.6 4.6 0 8.2 3.8 8.2 8.6 0 4.9-3.6 8.7-8.2 8.7z"></path><path d="M355.8 163.7c.6-.2 1.9-1.1 1.9-3 0-2.3-1.5-3.7-4-3.7h-5.3v11.3h3.5v-3.8h.9l1.6 3.8h3.8l-2.1-3.9c-.2-.6-.3-.7-.3-.7zm-3-1.6h-.9v-2.7h.9c.8 0 1.2.4 1.2 1.3.1.9-.4 1.4-1.2 1.4z"></path><circle cx="104.6" cy="163" r="9"></circle><path d="M114 177.9H72.8v-2.7c0-5.3 5.3-5.4 8-5.4 3.1 0 4.5.3 4.5.3v-14.6s-2.8-.4-6.6-.4c-8.6 0-24.5 2.4-24.5 20.6v2.3h-7.5v13.5h7.5V220h-7v13.5H81V220h-8.2v-28.5h22.5V220h-7v13.5H121V220h-7zm70 0h-29.5v13.5h5l-6.4 20c-1.2 3.3-1.5 7.3-1.5 7.3h-.4s-.3-4-1.5-7.3l-6.4-20h5v-13.5h-29.5v13.5h6.2l15.4 42h22l15.4-42h6.2zm54.6 25.5c0-15.4-9.3-26.8-25.8-26.8-17.9 0-28.9 12.7-28.9 29 0 14.8 10.7 29.1 30.5 29.1 15 0 23.9-7.8 23.9-7.8l-6.8-12.9s-7.4 5.3-15.6 5.3c-5.9 0-11.5-3.1-12.9-10.2h35.2c-.1-.1.4-3.9.4-5.7zm-35.2-4.6c1-4.3 3.6-8.2 8.9-8.2 4.1 0 7 3.8 7 8.2zm114.1-8.1h-.2s.2-1.1.2-2.8V185c0-5.1-2.8-7.1-7.9-7.1h-17.5v13.5h5.2c1.5 0 2.4.9 2.4 2.4V220h-7.5v13.5h33.7V220h-7.5v-8.1c0-10.1 5-16.7 15.3-16.7 2.3 0 3.8.3 3.8.3v-18.3s-1.1-.2-2.2-.2c-8.4-.1-15.4 6.1-17.8 13.7zm-49.3 0h-.2s.2-1.1.2-2.8V185c0-5.1-2.8-7.1-7.9-7.1h-17.5v13.5h5.2c1.5 0 2.4.9 2.4 2.4V220h-7.5v13.5h33.7V220h-7.5v-8.1c0-10.1 5-16.7 15.3-16.7 2.3 0 3.8.3 3.8.3v-18.3s-1.1-.2-2.2-.2c-8.5-.1-15.5 6.1-17.8 13.7z"></path></g></svg>Fiverr</a> <a href="https://github.com/GeorgeAzma" target="_blank" class="svelte-o61m3w"><svg class="nav-icon svelte-o61m3w" viewBox="0 0 98 96" width="38" height="38"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"></path></svg>
		Github</a> <a href="https://www.linkedin.com/in/george-azmaipharashvili-ab8b7b286/" target="_blank" class="svelte-o61m3w"><svg class="nav-icon svelte-o61m3w" width="38" height="38" viewBox="0 0 128 128" id="linkedin"><circle cx="64" cy="64" r="64" fill="#0a66c2"></circle><path fill="#fff" d="M92 32H36a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h56a4 4 0 0 0 4-4V36a4 4 0 0 0-4-4ZM52 86H42V56h10Zm-5-34a6 6 0 1 1 6-6 6 6 0 0 1-6 6Zm39 34H76V66c0-1.66-2.24-3-5-3-4 0-5 5.34-5 7v16H56V56h10v7c0-5 4.48-7 10-7a10 10 0 0 1 10 10Z"></path></svg>
		LinkedIn</a>`,a,n;return{c(){s=S("nav"),s.innerHTML=l,a=L(),n=S("div"),this.h()},l(t){s=k(t,"NAV",{id:!0,class:!0,"data-svelte-h":!0}),D(s)!=="svelte-w5m299"&&(s.innerHTML=l),a=C(t),n=k(t,"DIV",{}),F(n).forEach(_),this.h()},h(){f(s,"id","navbar"),f(s,"class","svelte-o61m3w")},m(t,r){q(t,s,r),q(t,a,r),q(t,n,r)},p:V,i:V,o:V,d(t){t&&(_(s),_(a),_(n))}}}class ue extends ee{constructor(s){super(),re(this,s,null,de,Q,{})}}function me(v){let s;return{c(){s=S("canvas"),this.h()},l(l){s=k(l,"CANVAS",{id:!0,class:!0}),F(s).forEach(_),this.h()},h(){f(s,"id","background-shader"),f(s,"class","svelte-9zun04")},m(l,a){q(l,s,a),v[3](s)},p:V,i:V,o:V,d(l){l&&_(s),v[3](null)}}}function he(v,s,l){let{frag:a=""}=s,{vert:n=""}=s,t,r=null,e=null,w,d,E=null,x=null;function $(){const i=t.getBoundingClientRect();return i.left>=-window.innerWidth&&i.right<=window.innerWidth*2}function p(){const i=window.devicePixelRatio||1;l(0,t.width=window.innerWidth*i,t),l(0,t.height=window.innerHeight*i,t),l(0,t.style.width=`${window.innerWidth}px`,t),l(0,t.style.height=`${window.innerHeight}px`,t),e&&r&&(e.useProgram(r),e.uniform2f(E,t.width,t.height),e.viewport(0,0,t.width,t.height))}ae(()=>{if(e=t.getContext("webgl2"),!e){console.error("WebGL is not supported in this browser.");return}return w=performance.now(),d=w,window.addEventListener("resize",p),T(n,a),()=>{window.removeEventListener("resize",p)}});function T(i,b){if(b||(b=`#version 300 es 
      out vec4 fragColor;
      void main() {
      fragColor = vec4(1, 0, 1, 1);
      }`),i||(i=`#version 300 es 
      void main() {
        vec2 vertices[3]=vec2[3](vec2(-1,-1), vec2(3,-1), vec2(-1, 3));
        gl_Position = vec4(vertices[gl_VertexID],0,1);
      }`),!!e){if($()){const y=e.createShader(e.FRAGMENT_SHADER);if(!y){alert("Could not create fragment shader");return}if(e.shaderSource(y,b),e.compileShader(y),!e.getShaderParameter(y,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(y);console.error("Fragment shader compilation error:",u)}const o=e.createShader(e.VERTEX_SHADER);if(!o){alert("Could not create vertex shader");return}if(e.shaderSource(o,i),e.compileShader(o),!e.getShaderParameter(o,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(o);console.error("Vertex shader compilation error:",u)}if(r&&(e.deleteProgram(r),r=null),r=e.createProgram(),!r){alert("Could not create shader program");return}if(e.attachShader(r,y),e.attachShader(r,o),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS)){const u=e.getProgramInfoLog(r);console.error("Program link error:",u)}e.deleteShader(y),e.deleteShader(o),e.useProgram(r),E=e.getUniformLocation(r,"resolution"),x=e.getUniformLocation(r,"time")}p(),g()}}function g(){if(!(t&&e))return;let i=performance.now();if(!$()){requestAnimationFrame(g);const b=i-d;w+=b,d=i;return}r||T(n,a),r&&(e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(r),e.drawArrays(e.TRIANGLE_STRIP,0,4),e.uniform1f(x,(i-w)/1e3),d=i,requestAnimationFrame(g))}function M(i){ie[i?"unshift":"push"](()=>{t=i,l(0,t)})}return v.$$set=i=>{"frag"in i&&l(1,a=i.frag),"vert"in i&&l(2,n=i.vert)},v.$$.update=()=>{v.$$.dirty&6&&T(n,a)},[t,a,n,M]}class U extends ee{constructor(s){super(),re(this,s,he,me,Q,{frag:1,vert:2})}}const pe=`#version 300 es\r
\r
precision mediump float;\r
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
}`,ge=`#version 300 es\r
\r
precision mediump float;\r
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
}`,we=`#version 300 es\r
\r
precision mediump float;\r
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
}`,xe=`#version 300 es\r
\r
precision mediump float;\r
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
    if (l > 1.0) discard;\r
    fragColor = vec4(0);\r
	float r = 4.0 / min_res;\r
    float sm = smoothstep(1.0 + r, 1.0 - r, l);\r
    float sm2 = smoothstep(1.0, 1.0 - r * 2.0, l);\r
    float d = sm * l * l * l * 2.0;\r
    vec3 norm = normalize(vec3(uv, 1.0 - d));\r
    float a = atan(uv.y, uv.x) / TAU + t * 0.1;\r
    vec3 col = pal(a, vec3(0.3), vec3(0.5), vec3(1), vec3(0.0, 0.8, 0.8));\r
    vec3 cd = abs(col);\r
    vec3 c = col;\r
    c += l * max(0.0, l - 0.5 * dot(c, c));\r
    c += 0.3 * noise(uv * 3.0 / (1. + norm.z * norm.z * norm.z * 2.0));\r
    col = c + col * pow(1.0 - sm, 4.0) * 16.0;\r
    float f = fbm(normalize(uv + 1e-5) * 2. + t) + 0.1;\r
    uv *= f + 0.1;\r
    uv *= 0.5;\r
    l = dot(uv, uv);\r
    vec3 ins = normalize(cd);\r
    float ind = 0.2 + sqrt(sqrt(smoothstep(0.0, 1.5, sqrt(l)) * 48.0));\r
    ind *= ind * ind * ind;\r
    ind = 1.0 / ind;\r
    ins *= ind;\r
	float m = sm * smoothstep(0.7, 1.0, ind);\r
    col += ins * ins * m;\r
	col -= 0.7 * ins * m;\r
    col += abs(norm) * (1.0 - d) * 0.5;\r
	float alpha = length(col) * d + m + (1. - d) * 0.3;\r
    fragColor = vec4(mix(vec3(1), col, alpha * sm2), 1);\r
}`,ye=`#version 300 es\r
\r
precision mediump float;\r
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
}`;function _e(v){let s,l,a,n,t,r,e,w,d,E,x,$,p,T,g,M,i,b="I'm Lumiey, graphics developer and software engineer.",y,o,u,O,ne="(Copied)",Z,W,te='<svg viewBox="-4.5 0 20 20" stroke="#ffffffcc" stroke-width="0.6" fill="#ffffffaa" class="svelte-f552qf"><path transform="translate(-331.000000, -6519.000000)" d="M338.61,6539 L340,6537.594 L331.739,6528.987 L332.62,6528.069 L332.615,6528.074 L339.955,6520.427 L338.586,6519 C336.557,6521.113 330.893,6527.014 329,6528.987 C330.406,6530.453 329.035,6529.024 338.61,6539" class="svelte-f552qf"></path></svg>',X,B,oe='<svg viewBox="-4.5 0 20 20" stroke="#ffffffcc" stroke-width="0.6" fill="#ffffffaa" class="svelte-f552qf"><path transform="scale(-1, 1) translate(-341.000000, -6519.000000)" d="M338.61,6539 L340,6537.594 L331.739,6528.987 L332.62,6528.069 L332.615,6528.074 L339.955,6520.427 L338.586,6519 C336.557,6521.113 330.893,6527.014 329,6528.987 C330.406,6530.453 329.035,6529.024 338.61,6539" class="svelte-f552qf"></path></svg>',G,Y,se;return n=new ue({}),e=new U({props:{frag:pe}}),d=new U({props:{frag:ge}}),x=new U({props:{frag:we}}),p=new U({props:{frag:xe}}),g=new U({props:{frag:ye}}),{c(){s=S("div"),l=L(),a=S("div"),A(n.$$.fragment),t=L(),r=S("div"),A(e.$$.fragment),w=L(),A(d.$$.fragment),E=L(),A(x.$$.fragment),$=L(),A(p.$$.fragment),T=L(),A(g.$$.fragment),M=L(),i=S("h1"),i.textContent=b,y=L(),o=S("button"),u=fe(J),O=S("span"),O.textContent=ne,Z=L(),W=S("button"),W.innerHTML=te,X=L(),B=S("button"),B.innerHTML=oe,this.h()},l(c){s=k(c,"DIV",{class:!0}),F(s).forEach(_),l=C(c),a=k(c,"DIV",{id:!0,class:!0});var m=F(a);P(n.$$.fragment,m),t=C(m),r=k(m,"DIV",{id:!0,class:!0});var z=F(r);P(e.$$.fragment,z),w=C(z),P(d.$$.fragment,z),E=C(z),P(x.$$.fragment,z),$=C(z),P(p.$$.fragment,z),T=C(z),P(g.$$.fragment,z),z.forEach(_),M=C(m),i=k(m,"H1",{class:!0,"data-svelte-h":!0}),D(i)!=="svelte-12vckjm"&&(i.textContent=b),y=C(m),o=k(m,"BUTTON",{id:!0,"aria-label":!0,class:!0});var j=F(o);u=ve(j,J),O=k(j,"SPAN",{class:!0,"data-svelte-h":!0}),D(O)!=="svelte-nvhv7g"&&(O.textContent=ne),j.forEach(_),Z=C(m),W=k(m,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),D(W)!=="svelte-1eth16w"&&(W.innerHTML=te),X=C(m),B=k(m,"BUTTON",{class:!0,"aria-label":!0,"data-svelte-h":!0}),D(B)!=="svelte-3l2q6y"&&(B.innerHTML=oe),m.forEach(_),this.h()},h(){f(s,"class","loader svelte-f552qf"),f(r,"id","shaders"),f(r,"class","svelte-f552qf"),f(i,"class","main-text svelte-f552qf"),f(O,"class","hidden svelte-f552qf"),f(o,"id","contact-info"),f(o,"aria-label","Contact me"),f(o,"class","svelte-f552qf"),f(W,"class","arrow-left svelte-f552qf"),f(W,"aria-label","Scroll left"),f(B,"class","arrow-right svelte-f552qf"),f(B,"aria-label","Scroll right"),f(a,"id","gradient"),f(a,"class","glass-pane svelte-f552qf")},m(c,m){q(c,s,m),q(c,l,m),q(c,a,m),R(n,a,null),h(a,t),h(a,r),R(e,r,null),h(r,w),R(d,r,null),h(r,E),R(x,r,null),h(r,$),R(p,r,null),h(r,T),R(g,r,null),v[4](r),h(a,M),h(a,i),h(a,y),h(a,o),h(o,u),h(o,O),h(a,Z),h(a,W),h(a,X),h(a,B),G=!0,Y||(se=[K(o,"click",v[1]),K(W,"click",v[2]),K(B,"click",v[3])],Y=!0)},p:V,i(c){G||(H(n.$$.fragment,c),H(e.$$.fragment,c),H(d.$$.fragment,c),H(x.$$.fragment,c),H(p.$$.fragment,c),H(g.$$.fragment,c),G=!0)},o(c){I(n.$$.fragment,c),I(e.$$.fragment,c),I(d.$$.fragment,c),I(x.$$.fragment,c),I(p.$$.fragment,c),I(g.$$.fragment,c),G=!1},d(c){c&&(_(s),_(l),_(a)),N(n),N(e),N(d),N(x),N(p),N(g),v[4](null),Y=!1,le(se)}}}const J="lumi.main.mail@gmail.com";function be(v,s,l){const a=o=>{navigator.clipboard.writeText(J);const u=o.currentTarget.children.item(0);u&&(u.classList.remove("hidden"),setTimeout(()=>{u.classList.add("hidden")},2e3))};let n,t=null,r=0;const e=async()=>{t!==null&&(clearTimeout(t),t=null),t=setTimeout(()=>{r=Math.round(n.scrollLeft/window.innerWidth),n.scrollTo({left:r*window.innerWidth,behavior:"smooth"})},500)};function w(){n!==null&&(r-=1,r<0&&(r=n.scrollWidth/window.innerWidth-1),n.scrollTo({left:r*window.innerWidth,behavior:"smooth"}))}function d(){n!==null&&(r+=1,r>n.scrollWidth/window.innerWidth-1&&(r=0),n.scrollTo({left:r*window.innerWidth,behavior:"smooth"}))}const E=()=>{e()},x=o=>{switch(o.key){case"ArrowLeft":case"a":w();break;case"ArrowRight":case"d":case" ":d();break}},$=o=>{o.deltaY>0?w():d()};let p=0;const T=()=>{let o=Math.round(n.scrollLeft/p)*window.innerWidth;n&&n.scrollTo({left:o,behavior:"instant"}),p=window.innerWidth};let g=0,M=0;const i=o=>{o.button===0&&(g=o.clientX,M=o.clientY)},b=o=>{if(o.button===0){const u=o.clientX-g,O=o.clientY-M;Math.abs(u)>Math.abs(O)&&(u>0?w():d())}};ae(()=>{n&&n.addEventListener("scroll",E),window&&(p=window.innerWidth,window.addEventListener("keyup",x),window.addEventListener("resize",T),window.addEventListener("wheel",$),window.addEventListener("mousedown",i),window.addEventListener("mouseup",b))}),ce(()=>{n&&n.removeEventListener("scroll",E),typeof window<"u"&&(window.removeEventListener("keyup",x),window.removeEventListener("resize",T),window.removeEventListener("wheel",$),window.removeEventListener("mousedown",i),window.removeEventListener("mouseup",b))});function y(o){ie[o?"unshift":"push"](()=>{n=o,l(0,n)})}return[n,a,w,d,y]}class Se extends ee{constructor(s){super(),re(this,s,be,_e,Q,{})}}export{Se as component};
