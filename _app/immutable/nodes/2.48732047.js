import{s as b,n as p,o as D,b as I}from"../chunks/scheduler.e108d1fd.js";import{S as w,i as F,g as h,h as g,j as P,f as m,k as x,a as v,s as A,r as z,y as E,c as S,u as L,v as M,d as k,t as H,w as N}from"../chunks/index.0719bd3d.js";function X(f){let r;return{c(){r=h("canvas"),this.h()},l(s){r=g(s,"CANVAS",{class:!0}),P(r).forEach(m),this.h()},h(){x(r,"class","background-shader svelte-1yt0uyx")},m(s,c){v(s,r,c),f[2](r)},p,i:p,o:p,d(s){s&&m(r),f[2](null)}}}function B(f,r,s){let{frag:c=""}=r,o,i,e,d=performance.now();D(()=>{if(!c){console.error("No fragment shader provided");return}if(d=performance.now(),e=o.getContext("webgl2"),!e){console.error("WebGL is not supported in this browser.");return}const n=`
        attribute vec4 a_position;
        void main() {
          gl_Position = a_position;
        }
        `,t=e.createShader(e.FRAGMENT_SHADER);if(!t){alert("Could not create fragment shader");return}if(e.shaderSource(t,c),e.compileShader(t),!e.getShaderParameter(t,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(t);console.error("Fragment shader compilation error:",u)}const a=e.createShader(e.VERTEX_SHADER);if(!a){alert("Could not create vertex shader");return}if(e.shaderSource(a,n),e.compileShader(a),!e.getShaderParameter(a,e.COMPILE_STATUS)){const u=e.getShaderInfoLog(a);console.error("Vertex shader compilation error:",u)}if(i=e.createProgram(),!i){alert("Could not create shader program");return}e.attachShader(i,t),e.attachShader(i,a),e.linkProgram(i),e.useProgram(i);const T=[-1,-1,1,-1,-1,1,1,1],R=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,R),e.bufferData(e.ARRAY_BUFFER,new Float32Array(T),e.STATIC_DRAW);const C=e.getAttribLocation(i,"a_position");e.enableVertexAttribArray(C),e.vertexAttribPointer(C,2,e.FLOAT,!1,0,0);function y(){if(o&&(s(0,o.width=window.innerWidth,o),s(0,o.height=window.innerHeight,o),e&&i)){const u=e.getUniformLocation(i,"resolution");e.uniform2f(u,o.width,o.height)}}return y(),window.addEventListener("resize",y),l(),()=>{window.removeEventListener("resize",y)}});function l(){if(o){if(!e){console.error("Cannot render, WebGL context not present");return}if(e.viewport(0,0,o.width,o.height),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_STRIP,0,4),i){const n=e.getUniformLocation(i,"time");n&&e.uniform1f(n,(performance.now()-d)/1e3)}requestAnimationFrame(l)}}function _(n){I[n?"unshift":"push"](()=>{o=n,s(0,o)})}return f.$$set=n=>{"frag"in n&&s(1,c=n.frag)},[o,c,_]}class U extends w{constructor(r){super(),F(this,r,B,X,b,{frag:1})}}function G(f){let r,s="Portfolio",c,o,i,e,d,l,_="I'm George Azmaipharashvili, Software engineer mainly specialized at graphics.",n;return e=new U({props:{frag:f[0]}}),{c(){r=h("title"),r.textContent=s,c=A(),o=h("meta"),i=A(),z(e.$$.fragment),d=A(),l=h("div"),l.textContent=_,this.h()},l(t){r=g(t,"TITLE",{"data-svelte-h":!0}),E(r)!=="svelte-1f3dkaw"&&(r.textContent=s),c=S(t),o=g(t,"META",{name:!0}),i=S(t),L(e.$$.fragment,t),d=S(t),l=g(t,"DIV",{class:!0,"data-svelte-h":!0}),E(l)!=="svelte-1yualih"&&(l.textContent=_),this.h()},h(){x(o,"name","description"),x(l,"class","main-text svelte-k0jtaa")},m(t,a){v(t,r,a),v(t,c,a),v(t,o,a),v(t,i,a),M(e,t,a),v(t,d,a),v(t,l,a),n=!0},p,i(t){n||(k(e.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),n=!1},d(t){t&&(m(r),m(c),m(o),m(i),m(d),m(l)),N(e,t)}}}function O(f){return[`
        precision mediump float;
        uniform float time;
        uniform vec2 resolution;
        
        #define MAX_RAY_MARCH_STEPS 32
        #define MAX_DISTANCE 1.0
        #define SURFACE_DISTANCE 0.003
        #define SPEED 0.3

        #define HALF_PI 1.57079632679

        struct Ray
        {
            vec3 pos;
            vec3 dir;
        };

        struct Camera
        {
            Ray ray;
            float fov;
        };
        Camera camera;

        struct Hit
        {
            float dist;
            float min_dist;
            vec3 point;
            vec3 normal;
        };
            
        float specularBlinnPhong(vec3 light_dir, vec3 ray_dir, vec3 normal)
        {
            return max(0.0, dot(normal, normalize(light_dir + ray_dir)));
        }

        vec4 perm(vec4 x) { x = ((x * 34.0) + 1.0) * x; return x - floor(x * (1.0 / 289.0)) * 289.0; }

        float noise(vec3 p)
        {
            vec3 a = floor(p);
            vec3 d = p - a;
            d = d * d * (3.0 - 2.0 * d);

            vec4 b = a.xxyy + vec4(0.0, 1.0, 0.0, 1.0);
            vec4 k1 = perm(b.xyxy);
            vec4 k2 = perm(k1.xyxy + b.zzww);

            vec4 c = k2 + a.zzzz;
            vec4 k3 = perm(c);
            vec4 k4 = perm(c + 1.0);

            vec4 o1 = fract(k3 * (1.0 / 41.0));
            vec4 o2 = fract(k4 * (1.0 / 41.0));

            vec4 o3 = o2 * d.z + o1 * (1.0 - d.z);
            vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);

            return o4.y * d.y + o4.x * (1.0 - d.y);
        }

        float fbm(vec3 p)
        {
            return (noise(p * 1.4) + noise(p * 2.25 + 16.791) * 0.6 + noise(p * 3.375 - 31.613) * .35) * 0.6;
        }

        float SDF(vec3 point, float noise)
        {
            return (dot(point, point) - 0.16 - noise * 0.25) * 0.7;
        }

        Hit raymarch(Ray ray, float noise)
        {
            vec3 point;
            float dist = 0.0;
            float min_dist = MAX_DISTANCE;
            for (int i = 0; i < MAX_RAY_MARCH_STEPS; ++i)
            {
                point = ray.pos + ray.dir * dist; 
                float sdf = SDF(point, noise);
                min_dist = min(min_dist, sdf);
                dist += sdf;
                if (dist >= MAX_DISTANCE)
                    return Hit(MAX_DISTANCE, min_dist, point, vec3(0));
                if (abs(sdf) <= SURFACE_DISTANCE)
                {
                    vec2 e = vec2(0.002, 0.0);
                    Hit hit;
                    hit.normal = normalize(sdf - vec3(SDF(point - e.xyy, noise), SDF(point - e.yxy, noise), SDF(point - e.yyx, noise)));
                    hit.dist = dist;
                    hit.min_dist = min_dist;
                    hit.point = point;
                    return hit;
                }
            }
            
            return Hit(dist, min_dist, point, vec3(0));
        }

        vec4 getColor(Ray ray, vec3 color, float n)
        {
            vec3 col = vec3(0);
            Hit hit = raymarch(ray, n);
            if (hit.normal != vec3(0))
            {
                vec3 n = abs(hit.normal + vec3(0, 0, 0.5));
                col = normalize(color + n * n);
                col += pow(specularBlinnPhong(normalize(vec3(10, 10, -10) - hit.point), normalize(camera.ray.pos - hit.point), hit.normal), 32.0) * 0.5;
            }
            else
            {
                col = vec3(pow(max(0.0, 1.0 - hit.min_dist), 16.0)) * color;
                hit.dist = MAX_DISTANCE + 1.0 - max(0.0, 1.0 - hit.min_dist);
            }
            return vec4(col, hit.dist);
        }

        void main()
        {
            float m = min(resolution.x, resolution.y);
            vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / m;    
            camera.fov = 110.0;
            camera.ray.pos = vec3(0, 0, -1);
            camera.ray.dir = vec3(0, 0, 1);
            float fov = tan(HALF_PI - radians(camera.fov) * 0.5);
            camera.ray.dir = normalize(vec3(uv, fov));

            float n1 = fbm(vec3(uv, time * SPEED));
            float n2 = fbm(vec3(uv, -time * SPEED));
            
            vec4 c0 = getColor(camera.ray, vec3(1, 0.3, 1), n1);
            vec4 c1 = getColor(camera.ray, vec3(0.1, 0.5, 1.0), n2);
            
            if (c0.w > c1.w) { vec4 temp = c0; c0 = c1; c1 = temp; }
            
            if (c0.w >= MAX_DISTANCE)
            {
                gl_FragColor = vec4(mix(c0.rgb, c1.rgb, 0.5), 1);
                return;
            }
            
            gl_FragColor.rgb = c0.rgb;
            if (c1.w < MAX_DISTANCE) gl_FragColor.rgb = mix(gl_FragColor.rgb, c1.rgb, 0.5);
            gl_FragColor.rgb = sqrt(gl_FragColor.rgb * 1.2 - .15);
        }
        `]}class Y extends w{constructor(r){super(),F(this,r,O,G,b,{})}}export{Y as component};
