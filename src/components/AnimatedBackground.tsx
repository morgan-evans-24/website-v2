// TODO experiment with wireframe
// TODO Make sphere fade in
// Maybe make vertices closer to camera a different color?

import * as THREE from "three";
import { Suspense, useMemo, useRef, useState } from "react";
import { type ThreeElements } from "@react-three/fiber";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

import vertexPars from "../shaders/vertex_pars.glsl?raw";
import vertexMain from "../shaders/vertex_main.glsl?raw";
import fragmentMain from "../shaders/fragment_main.glsl?raw";
import fragmentPars from "../shaders/fragment_pars.glsl?raw";

import "../css/AnimatedBackground.css";

function Orb({
  setLoaded,
  ...props
}: ThreeElements["mesh"] & { setLoaded: (arg0: boolean) => void }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const shaderRef = useRef<THREE.WebGLProgramParametersWithUniforms | null>(
    null,
  );

  const material = useMemo(() => {
    const mat = new THREE.MeshStandardMaterial({
      emissive: 0x0000ff,
      emissiveIntensity: 0.8,
      // wireframe: true,
    });
    mat.onBeforeCompile = (shader) => {
      material.userData.shader = shader;

      shader.uniforms.uTime = { value: 0.0 };

      const parsVertexString = `#include <displacementmap_pars_vertex>`;
      shader.vertexShader = shader.vertexShader.replace(
        parsVertexString,
        parsVertexString + vertexPars,
      );

      const mainVertexString = `#include <displacementmap_vertex>`;
      shader.vertexShader = shader.vertexShader.replace(
        mainVertexString,
        mainVertexString + vertexMain,
      );

      const mainFragmentString = `#include <normal_fragment_maps>`;
      const parsFragmentString = `#include <bumpmap_pars_fragment>`;
      shader.fragmentShader = shader.fragmentShader.replace(
        parsFragmentString,
        parsFragmentString + fragmentPars,
      );
      shader.fragmentShader = shader.fragmentShader.replace(
        mainFragmentString,
        mainFragmentString + fragmentMain,
      );
      shaderRef.current = shader;
    };
    return mat;
  }, []);

  useFrame((_state, delta) => {
    if (shaderRef.current) {
      shaderRef.current.uniforms.uTime.value += delta / 10.0;
    }
  });

  return (
    <mesh
      {...props}
      ref={meshRef}
      onAfterRender={() => {
        setLoaded(true);
      }}
    >
      <Suspense fallback={<p>loading</p>}>
        {/*<icosahedronGeometry args={[1, 2]} />*/}
        <icosahedronGeometry args={[1, 200]} />
        <primitive object={material} attach="material" />
      </Suspense>
    </mesh>
  );
}

function AnimatedBackground() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Suspense>
        <Canvas
          className="scene"
          style={{
            backgroundColor: "black",
            opacity: loaded ? 1 : 0,
            transition: "opacity 3s ease",
          }}
        >
          <ambientLight intensity={Math.PI * 0.2} color="#4255ff" />
          <directionalLight
            position={[2, 2, 2]}
            color="#526cff"
            intensity={Math.PI * 0.8}
          />
          <EffectComposer>
            <Bloom
              luminanceThreshold={0}
              luminanceSmoothing={0.3}
              intensity={0.8} // bloom strength
            />
          </EffectComposer>
          <Suspense>
            <Orb position={[0, 0, 0]} setLoaded={setLoaded} />
          </Suspense>
        </Canvas>
      </Suspense>
    </>
  );
}

export default AnimatedBackground;
