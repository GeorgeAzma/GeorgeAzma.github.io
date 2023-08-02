<script>
	import Shader from './Shader.svelte';

	const frag = `
        precision highp float;
        uniform float time;
        uniform vec2 resolution;
        
        #define MAX_RAY_MARCH_STEPS 64
        #define MAX_DISTANCE 1.0
        #define SURFACE_DISTANCE 0.001
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
            float closest_dist;
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

        float SDF(vec3 point, float seed)
        {
            return (dot(point, point) - 0.16 - fbm(vec3(point.xy, time * 0.25 + point.z) + seed) * 0.25) * 0.7;
        }

        Hit raymarch(Ray ray, float seed)
        {
            vec3 point;
            float dist = 0.0;
            float closest_dist = MAX_DISTANCE;
            for (int i = 0; i < MAX_RAY_MARCH_STEPS; ++i)
            {
                point = ray.pos + ray.dir * dist; 
                float sdf = SDF(point, seed);
                closest_dist = min(closest_dist, sdf);
                dist += sdf;
                if (dist >= MAX_DISTANCE)
                    return Hit(MAX_DISTANCE, closest_dist, point, vec3(0));
                if (abs(sdf) <= SURFACE_DISTANCE)
                {
                    vec2 e = vec2(0.002, 0.0);
                    Hit hit;
                    hit.normal = normalize(sdf - vec3(SDF(point - e.xyy, seed), SDF(point - e.yxy, seed), SDF(point - e.yyx, seed)));
                    hit.dist = dist;
                    hit.closest_dist = closest_dist;
                    hit.point = point;
                    return hit;
                }
            }
            
            return Hit(dist, closest_dist, point, vec3(0));
        }

        vec4 getColor(Ray ray, vec3 color, float seed)
        {
            vec3 col = vec3(0);
            Hit hit = raymarch(ray, seed);
            if (hit.normal != vec3(0))
            {
                col = normalize(color + abs(hit.normal + vec3(0, 0, 0.5)));
                col += pow(specularBlinnPhong(normalize(vec3(100, 100, -100) - hit.point), normalize(camera.ray.pos - hit.point), hit.normal), 32.0) * 0.5;
            }
            else
            {
                col = vec3(pow(max(0.0, 1.0 - hit.closest_dist), 16.0)) * color;
                hit.dist = MAX_DISTANCE + 1.0 - max(0.0, 1.0 - hit.closest_dist);
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
            
            vec4 c0 = getColor(camera.ray, vec3(1, 0.35, 1), 0.0);
            vec4 c1 = getColor(camera.ray, vec3(0.1, 0.5, 1.0), 1000.612);
            
            if (c0.w > c1.w) { vec4 temp = c0; c0 = c1; c1 = temp; }
            
            if (c0.w >= MAX_DISTANCE)
            {
                gl_FragColor = vec4(mix(c0.rgb, c1.rgb, 0.5), 1);
                return;
            }
            
            gl_FragColor.rgb = c0.rgb;
            if (c1.w < MAX_DISTANCE) gl_FragColor.rgb = mix(gl_FragColor.rgb, c1.rgb, 0.5);
            gl_FragColor.rgb = sqrt(gl_FragColor.rgb * 1.1 - .1);
        }
        `;
</script>

<title>Portfolio</title>
<meta name="description" />
<h1>Welcome to SvelteKit</h1>

<Shader {frag} />

<style>
	:root {
		background-color: black;
		color: white;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		margin: 0;
	}
</style>
