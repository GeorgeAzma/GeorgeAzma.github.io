precision lowp float;

uniform float time;
uniform vec2 resolution;

#define MAX_RAY_MARCH_STEPS 32
#define MAX_DISTANCE 1.0
#define SURFACE_DISTANCE 0.01
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
    vec4 c = perm(perm(b.xyxy).xyxy + b.zzww) + a.zzzz;
    vec4 o3 = fract(perm(c + 1.0) * (1.0 / 41.0)) * d.z + fract(perm(c) * (1.0 / 41.0)) * (1.0 - d.z);
    vec2 o4 = o3.yw * d.x + o3.xz * (1.0 - d.x);
    return o4.y * d.y + o4.x * (1.0 - d.y);
}
float fbm(vec3 p)
{
    return noise(p * 1.4) * .15 + noise(p * 2.25 + 46.791) * .06 + noise(p * 3.375 - 31.613) * .035;
}

float SDF(vec3 point, float noise)
{
    return (dot(point, point) - noise - 0.16) * 0.7;
}

Hit raymarch(Ray ray, float noise)
{
    Hit hit;
    hit.min_dist = MAX_DISTANCE;
    hit.normal = vec3(0);
    hit.point = vec3(0);
    hit.dist = 0.0;
    for (int i = 0; i < MAX_RAY_MARCH_STEPS; ++i)
    {
        hit.point = ray.pos + ray.dir * hit.dist; 
        float sdf = SDF(hit.point, noise);
        hit.min_dist = min(hit.min_dist, sdf);
        hit.dist += sdf;
        if (hit.dist >= MAX_DISTANCE)
            return hit;
        if (abs(sdf) <= SURFACE_DISTANCE)
        {
            vec2 e = vec2(0.002, 0.0);
            hit.normal = normalize(sdf - vec3(SDF(hit.point - e.xyy, noise), SDF(hit.point - e.yxy, noise), SDF(hit.point - e.yyx, noise)));
            return hit;
        }
    }
    
    return hit;
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
        float b = dot(col, col);
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
    
    vec4 c0 = getColor(camera.ray, vec3(1, 0.15, 1), n1);
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