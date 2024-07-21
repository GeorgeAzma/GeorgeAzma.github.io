import{s as R,n as _,o as U,b as X}from"../chunks/scheduler.e108d1fd.js";import{S as P,i as k,g as x,s as C,h as S,y as F,c as w,j as L,f as v,k as m,a as f,r as I,m as G,u as M,n as O,v as V,x as H,z as Y,d as B,t as N,w as q}from"../chunks/index.7e6319f2.js";function $(l){let t,o=`<a href="https://shadertoy.com/user/Peace" target="_blank" class="svelte-1n0zkqz"><img class="nav-icon svelte-1n0zkqz" src="shadertoy.webp" alt="Shadertoy Icon" width="38" height="38"/>
		Shaders</a> <a href="https://www.linkedin.com/in/george-azmaipharashvili-ab8b7b286/" target="_blank" class="svelte-1n0zkqz"><svg class="nav-icon svelte-1n0zkqz" width="38" height="38" viewBox="0 0 128 128" id="linkedin"><circle cx="64" cy="64" r="64" fill="#0a66c2"></circle><path fill="#fff" d="M92 32H36a4 4 0 0 0-4 4v56a4 4 0 0 0 4 4h56a4 4 0 0 0 4-4V36a4 4 0 0 0-4-4ZM52 86H42V56h10Zm-5-34a6 6 0 1 1 6-6 6 6 0 0 1-6 6Zm39 34H76V66c0-1.66-2.24-3-5-3-4 0-5 5.34-5 7v16H56V56h10v7c0-5 4.48-7 10-7a10 10 0 0 1 10 10Z"></path></svg>
		LinkedIn</a> <a href="https://fiverr.com/lumiey" target="_blank" class="svelte-1n0zkqz"><svg class="nav-icon svelte-1n0zkqz" width="38" height="38" viewBox="0 0 400 400"><circle cx="200" cy="200" fill="#00b22d" r="200"></circle><g fill="#fff"><path d="M364.4 162.7c0-6.6-5.2-12-11.8-12-6.4 0-11.7 5.3-11.7 12 0 6.6 5.2 12 11.7 12 6.6.1 11.8-5.3 11.8-12zm-11.8 8.7c-4.5 0-8-3.8-8-8.7 0-4.8 3.5-8.6 8-8.6 4.6 0 8.2 3.8 8.2 8.6 0 4.9-3.6 8.7-8.2 8.7z"></path><path d="M355.8 163.7c.6-.2 1.9-1.1 1.9-3 0-2.3-1.5-3.7-4-3.7h-5.3v11.3h3.5v-3.8h.9l1.6 3.8h3.8l-2.1-3.9c-.2-.6-.3-.7-.3-.7zm-3-1.6h-.9v-2.7h.9c.8 0 1.2.4 1.2 1.3.1.9-.4 1.4-1.2 1.4z"></path><circle cx="104.6" cy="163" r="9"></circle><path d="M114 177.9H72.8v-2.7c0-5.3 5.3-5.4 8-5.4 3.1 0 4.5.3 4.5.3v-14.6s-2.8-.4-6.6-.4c-8.6 0-24.5 2.4-24.5 20.6v2.3h-7.5v13.5h7.5V220h-7v13.5H81V220h-8.2v-28.5h22.5V220h-7v13.5H121V220h-7zm70 0h-29.5v13.5h5l-6.4 20c-1.2 3.3-1.5 7.3-1.5 7.3h-.4s-.3-4-1.5-7.3l-6.4-20h5v-13.5h-29.5v13.5h6.2l15.4 42h22l15.4-42h6.2zm54.6 25.5c0-15.4-9.3-26.8-25.8-26.8-17.9 0-28.9 12.7-28.9 29 0 14.8 10.7 29.1 30.5 29.1 15 0 23.9-7.8 23.9-7.8l-6.8-12.9s-7.4 5.3-15.6 5.3c-5.9 0-11.5-3.1-12.9-10.2h35.2c-.1-.1.4-3.9.4-5.7zm-35.2-4.6c1-4.3 3.6-8.2 8.9-8.2 4.1 0 7 3.8 7 8.2zm114.1-8.1h-.2s.2-1.1.2-2.8V185c0-5.1-2.8-7.1-7.9-7.1h-17.5v13.5h5.2c1.5 0 2.4.9 2.4 2.4V220h-7.5v13.5h33.7V220h-7.5v-8.1c0-10.1 5-16.7 15.3-16.7 2.3 0 3.8.3 3.8.3v-18.3s-1.1-.2-2.2-.2c-8.4-.1-15.4 6.1-17.8 13.7zm-49.3 0h-.2s.2-1.1.2-2.8V185c0-5.1-2.8-7.1-7.9-7.1h-17.5v13.5h5.2c1.5 0 2.4.9 2.4 2.4V220h-7.5v13.5h33.7V220h-7.5v-8.1c0-10.1 5-16.7 15.3-16.7 2.3 0 3.8.3 3.8.3v-18.3s-1.1-.2-2.2-.2c-8.5-.1-15.5 6.1-17.8 13.7z"></path></g></svg>Fiverr</a> <a href="https://github.com/GeorgeAzma" target="_blank" class="svelte-1n0zkqz"><svg class="nav-icon svelte-1n0zkqz" viewBox="0 0 98 96" width="38" height="38"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff"></path></svg>
		Github</a>`,a,c;return{c(){t=x("nav"),t.innerHTML=o,a=C(),c=x("div"),this.h()},l(n){t=S(n,"NAV",{id:!0,class:!0,"data-svelte-h":!0}),F(t)!=="svelte-1hctsbx"&&(t.innerHTML=o),a=w(n),c=S(n,"DIV",{}),L(c).forEach(v),this.h()},h(){m(t,"id","navbar"),m(t,"class","svelte-1n0zkqz")},m(n,i){f(n,t,i),f(n,a,i),f(n,c,i)},p:_,i:_,o:_,d(n){n&&(v(t),v(a),v(c))}}}class Z extends P{constructor(t){super(),k(this,t,null,$,R,{})}}function W(l){let t;return{c(){t=x("canvas"),this.h()},l(o){t=S(o,"CANVAS",{id:!0,class:!0}),L(t).forEach(v),this.h()},h(){m(t,"id","background-shader"),m(t,"class","svelte-1yt0mdc")},m(o,a){f(o,t,a),l[3](t)},p:_,i:_,o:_,d(o){o&&v(t),l[3](null)}}}function j(l,t,o){let{frag:a=""}=t,{vert:c=""}=t,n,i,e,h=performance.now();const z=[-1,-1,1,-1,-1,1,1,1];let d;function y(){if(n&&(o(0,n.width=window.innerWidth,n),o(0,n.height=window.innerHeight,n),e&&i)){const r=e.getUniformLocation(i,"resolution");e.uniform2f(r,n.width,n.height),e.viewport(0,0,n.width,n.height)}}U(()=>{if(e=n.getContext("webgl2"),!e){console.error("WebGL is not supported in this browser.");return}return d=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,new Float32Array(z),e.STATIC_DRAW),h=performance.now(),window.addEventListener("resize",y),u(c,a),()=>{window.removeEventListener("resize",y)}});function u(r,s){if(s||(s="precision mediump float;void main() {gl_FragColor=vec4(1);}"),r||(r="attribute vec4 a_position;void main() {gl_Position = a_position;}"),!e)return;const p=e.createShader(e.FRAGMENT_SHADER);if(!p){alert("Could not create fragment shader");return}if(e.shaderSource(p,s),e.compileShader(p),!e.getShaderParameter(p,e.COMPILE_STATUS)){const E=e.getShaderInfoLog(p);console.error("Fragment shader compilation error:",E)}const g=e.createShader(e.VERTEX_SHADER);if(!g){alert("Could not create vertex shader");return}if(e.shaderSource(g,r),e.compileShader(g),!e.getShaderParameter(g,e.COMPILE_STATUS)){const E=e.getShaderInfoLog(g);console.error("Vertex shader compilation error:",E)}if(i&&(e.deleteProgram(i),i=null),i=e.createProgram(),!i){alert("Could not create shader program");return}e.attachShader(i,p),e.attachShader(i,g),e.linkProgram(i),e.deleteShader(p),e.deleteShader(g),e.useProgram(i);const D=e.getAttribLocation(i,"a_position");e.enableVertexAttribArray(D),e.vertexAttribPointer(D,2,e.FLOAT,!1,0,0),y(),b()}function b(){if(!(n&&e&&i))return;e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.useProgram(i),e.bindBuffer(e.ARRAY_BUFFER,d),e.drawArrays(e.TRIANGLE_STRIP,0,4);const r=e.getUniformLocation(i,"time");r&&e.uniform1f(r,(performance.now()-h)/1e3),requestAnimationFrame(b)}function A(r){X[r?"unshift":"push"](()=>{n=r,o(0,n)})}return l.$$set=r=>{"frag"in r&&o(1,a=r.frag),"vert"in r&&o(2,c=r.vert)},l.$$.update=()=>{l.$$.dirty&6&&u(c,a)},[n,a,c,A]}class J extends P{constructor(t){super(),k(this,t,j,W,R,{frag:1,vert:2})}}const K=`precision lowp float;\r
\r
uniform float time;\r
uniform vec2 resolution;\r
\r
#define MAX_RAY_MARCH_STEPS 32\r
#define MAX_DISTANCE 1.0\r
#define SURFACE_DISTANCE 0.01\r
#define SPEED 0.3\r
\r
#define HALF_PI 1.57079632679\r
\r
struct Ray\r
{\r
    vec3 pos;\r
    vec3 dir;\r
};\r
\r
struct Camera\r
{\r
    Ray ray;\r
    float fov;\r
};\r
Camera camera;\r
\r
struct Hit\r
{\r
    float dist;\r
    float min_dist;\r
    vec3 point;\r
    vec3 normal;\r
};\r
    \r
float specularBlinnPhong(vec3 light_dir, vec3 ray_dir, vec3 normal)\r
{\r
    return max(0.0, dot(normal, normalize(light_dir + ray_dir)));\r
}\r
\r
vec4 perm(vec4 x) { x = ((x * 34.0) + 1.0) * x; return x - floor(x * (1.0 / 289.0)) * 289.0; }\r
float noise(vec3 p)\r
{\r
    vec3 a = floor(p);\r
    vec3 d = p - a;\r
    d = d * d * (3.0 - 2.0 * d);\r
    vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);\r
    vec4 c = perm(perm(b.xyxy).xyxy + b.zzww) + a.zzzz;\r
    vec4 o3 = fract(perm(c + 1.0) * (1.0 / 41.0)) * d.z + fract(perm(c) * (1.0 / 41.0)) * (1.0 - d.z);\r
    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);\r
    return o4.y * d.y + o4.x * (1.0 - d.y);\r
}\r
float fbm(vec3 p)\r
{\r
    return noise(p * 1.4) * .15 + noise(p * 2.25 + 46.791) * .06 + noise(p * 3.375 - 31.613) * .035;\r
}\r
\r
float SDF(vec3 point, float noise)\r
{\r
    return (dot(point, point) - noise - 0.16) * 0.7;\r
}\r
\r
Hit raymarch(Ray ray, float noise)\r
{\r
    Hit hit;\r
    hit.min_dist = MAX_DISTANCE;\r
    hit.normal = vec3(0);\r
    hit.point = vec3(0);\r
    hit.dist = 0.0;\r
    for (int i = 0; i < MAX_RAY_MARCH_STEPS; ++i)\r
    {\r
        hit.point = ray.pos + ray.dir * hit.dist; \r
        float sdf = SDF(hit.point, noise);\r
        hit.min_dist = min(hit.min_dist, sdf);\r
        hit.dist += sdf;\r
        if (hit.dist >= MAX_DISTANCE)\r
            return hit;\r
        if (abs(sdf) <= SURFACE_DISTANCE)\r
        {\r
            vec2 e = vec2(0.002, 0.0);\r
            hit.normal = normalize(sdf - vec3(SDF(hit.point - e.xyy, noise), SDF(hit.point - e.yxy, noise), SDF(hit.point - e.yyx, noise)));\r
            return hit;\r
        }\r
    }\r
    \r
    return hit;\r
}\r
\r
vec4 getColor(Ray ray, vec3 color, float n)\r
{\r
    vec3 col = vec3(0);\r
    Hit hit = raymarch(ray, n);\r
    if (hit.normal != vec3(0))\r
    {\r
        vec3 n = abs(hit.normal + vec3(0, 0, 0.5));\r
        col = normalize(color + n * n);\r
        col += pow(specularBlinnPhong(normalize(vec3(10, 10, -10) - hit.point), normalize(camera.ray.pos - hit.point), hit.normal), 32.0) * 0.5;\r
    }\r
    else\r
    {\r
        col = vec3(pow(max(0.0, 1.0 - hit.min_dist), 16.0)) * color;\r
        float b = dot(col, col);\r
    }\r
    return vec4(col, hit.dist);\r
}\r
\r
void main()\r
{\r
    float m = min(resolution.x, resolution.y);\r
    vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / m;    \r
    camera.fov = 110.0;\r
    camera.ray.pos = vec3(0, 0, -1);\r
    camera.ray.dir = vec3(0, 0, 1);\r
    float fov = tan(HALF_PI - radians(camera.fov) * 0.5);\r
    camera.ray.dir = normalize(vec3(uv, fov));\r
    float n1 = fbm(vec3(uv, time * SPEED));\r
    float n2 = fbm(vec3(uv, -time * SPEED));\r
    \r
    vec4 c0 = getColor(camera.ray, vec3(1, 0.15, 1), n1);\r
    vec4 c1 = getColor(camera.ray, vec3(0.1, 0.5, 1.0), n2);\r
    \r
    if (c0.w > c1.w) { vec4 temp = c0; c0 = c1; c1 = temp; }\r
    \r
    if (c0.w >= MAX_DISTANCE)\r
    {\r
        gl_FragColor = vec4(mix(c0.rgb, c1.rgb, 0.5), 1);\r
        return;\r
    }\r
    \r
    gl_FragColor.rgb = c0.rgb;\r
    if (c1.w < MAX_DISTANCE) gl_FragColor.rgb = mix(gl_FragColor.rgb, c1.rgb, 0.5);\r
    gl_FragColor.rgb = sqrt(gl_FragColor.rgb * 1.2 - .15);\r
}`;function Q(l){let t,o,a,c,n,i="George Azmaipharashvili, Software engineer mainly specialized at graphics.",e,h,z,d,y="(Copied)",u,b,A;return t=new J({props:{frag:K}}),a=new Z({}),{c(){I(t.$$.fragment),o=C(),I(a.$$.fragment),c=C(),n=x("div"),n.textContent=i,e=C(),h=x("button"),z=G(T),d=x("span"),d.textContent=y,this.h()},l(r){M(t.$$.fragment,r),o=w(r),M(a.$$.fragment,r),c=w(r),n=S(r,"DIV",{class:!0,"data-svelte-h":!0}),F(n)!=="svelte-10kosam"&&(n.textContent=i),e=w(r),h=S(r,"BUTTON",{id:!0,class:!0});var s=L(h);z=O(s,T),d=S(s,"SPAN",{class:!0,"data-svelte-h":!0}),F(d)!=="svelte-nvhv7g"&&(d.textContent=y),s.forEach(v),this.h()},h(){m(n,"class","main-text svelte-plxasi"),m(d,"class","hidden svelte-plxasi"),m(h,"id","contact-info"),m(h,"class","svelte-plxasi")},m(r,s){V(t,r,s),f(r,o,s),V(a,r,s),f(r,c,s),f(r,n,s),f(r,e,s),f(r,h,s),H(h,z),H(h,d),u=!0,b||(A=Y(h,"click",l[0]),b=!0)},p:_,i(r){u||(B(t.$$.fragment,r),B(a.$$.fragment,r),u=!0)},o(r){N(t.$$.fragment,r),N(a.$$.fragment,r),u=!1},d(r){r&&(v(o),v(c),v(n),v(e),v(h)),q(t,r),q(a,r),b=!1,A()}}}const T="lumi.main.mail@gmail.com";function ee(l){return[o=>{navigator.clipboard.writeText(T);const a=o.currentTarget.children.item(0);a&&(a.classList.remove("hidden"),setTimeout(()=>{a.classList.add("hidden")},2e3))}]}class ne extends P{constructor(t){super(),k(this,t,ee,Q,R,{})}}export{ne as component};
