import { useFrame } from "@react-three/fiber";

function readShader(): string {
  fetch("./shaders/FirstShader.frag").then((res) =>
    res
      .text()
      .then((data) => {
        return data;
      })
      .catch((err) => console.log(err)),
  );
  return "";
}

function ShaderAsBackground() {
  const shader = {
    uniforms: {
      u_time: { value: 0 },
      u_resolution: { value: [window.innerWidth, window.innerHeight] },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: readShader(),
  };

  useFrame(({ clock }) => {
    shader.uniforms.u_time.value = clock.getElapsedTime();
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial attach="material" args={[shader]} />
    </mesh>
  );
}

export default ShaderAsBackground;
