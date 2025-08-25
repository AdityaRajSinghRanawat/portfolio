import { Canvas } from "@react-three/fiber";
import { Planet } from "./Planet";
import {
  Environment,
  Float,
  Lightformer,
  OrbitControls,
} from "@react-three/drei";
import { Suspense } from "react";
import { useMediaQuery } from "react-responsive";

const BackgroundModelCanvas = () => {
  const isMobile = useMediaQuery({ maxWidth: "767px" });
  const isTablet = useMediaQuery({ maxWidth: "1024px" });
  return (
    <figure
      className="absolute inset-0 z-0"
      style={{ width: "100vw", height: isTablet ? "70vh" : "100vh" }}
    >
      {/*
          Camera(position, fov, near, far)
          position: [x, y, z]
          fov: field of view in degrees, means how much of the scene is visible
          near: the closest distance to the camera that will be rendered
          far: the farthest distance from the camera that will be rendered 
        */}
      {/*
            Search: gltf to jsx
            Go to: https://gltf.pmnd.rs/
            Change he "path prefix" to models since we are using models folder
          */}
      <Canvas
        shadows
        camera={{ position: [0, 0, 10], fov: 17.5, near: 1, far: 20 }}
        frameloop={isTablet ? "demand" : "always"}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          {/* check if its tablet/mobile or desktop */}
          {isTablet ? (
            <Planet
              scale={isMobile ? 0.5 : isTablet ? 0.95 : 1}
              rotation={[0, Math.PI, 0]}
            />
          ) : (
            <Float>
              <Planet
                scale={isMobile ? 0.5 : isTablet ? 0.95 : 1}
                rotation={[0, Math.PI, 0]}
              />
            </Float>
          )}

          <Environment resolution={64}>
            <group rotation={[Math.PI / 3, 4 + Math.PI, 1]}>
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 3, 1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[-5, -1, -1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableDamping={true}
          /* 30 degrees (top to 30) */
          minPolarAngle={Math.PI / 6}
          /* 120 degrees (top to 120) */
          maxPolarAngle={(2 * Math.PI) / 3}
          /* difference = 120 - 30 = 90 (move up and down) */
        />
      </Canvas>
    </figure>
  );
};

export default BackgroundModelCanvas;
