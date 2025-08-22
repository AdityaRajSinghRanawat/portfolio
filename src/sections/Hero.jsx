import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import {
  Environment,
  Float,
  Lightformer,
  OrbitControls,
} from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";

const Hero = () => {
  {
    /* useMediaQuery = this hook returns true or false */
  }
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1023 });

  {
    /*
      <></> this will just be a empty tag
      so my flex-baseline will work in its child elements
      
      and this will act as a empty <></>
    */
  }
  const heroSubtitle = (
    <>
      <div>I am Adi</div>
      <div className="text-xl md:text-2xl font-zen-antique-soft">
        {"("}アディ{")"}
      </div>
    </>
  );
  const heroTitle = "Aditya Raj Singh Ranawat";
  const heroText = `From concept to deployment, I deliver web experiences
    that give brands and startups a competitive
    edge in the digital world`;
  const heroTextColor = "text-black";
  

  return (
    <section id="home" className="flex flex-col justify-end min-h-[100vh]">
      <AnimatedHeaderSection subTitle={heroSubtitle} title={heroTitle} text={heroText} textColor={heroTextColor} />
      {/* 
          npm i three @react-three/fiber @react-three/drei react-responsive maath 
      */}
      <figure
        className="absolute inset-0 z-0"
        style={{ width: "100dvw", height: isMobile ? "80dvh" : "100dvh" }}
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
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.5} />
          <Float speed={1.5}>
            <Planet scale={isMobile ? 0.5 : isTablet ? 0.7 : 1} />
          </Float>
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
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
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            /* 30 degrees (top to 30) */
            minPolarAngle={Math.PI / 6}
            /* 120 degrees (top to 120) */
            maxPolarAngle={(2 * Math.PI) / 3}
            /* difference = 120 - 30 = 90 (move up and down) */
          />
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
