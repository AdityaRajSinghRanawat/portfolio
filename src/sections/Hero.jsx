import { useRef } from "react";
import AnimatedTextLines from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import {
  Environment,
  Float,
  Lightformer,
  OrbitControls,
} from "@react-three/drei";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  {/* useMediaQuery = this hook returns true or false */}
  const isMobile = useMediaQuery({maxWidth: 767})
  const isTablet = useMediaQuery({maxWidth: 1023})

  const aboutText = `From concept to deployment, I deliver web experiences
  that give brands and startups a competitive
  edge in the digital world`;

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(contextRef.current, {
      y: "50dvh",
      duration: 1,
      ease: "circ.out",
    });
    tl.from(
      headerRef.current,
      {
        y: "200",
        duration: 1,
        ease: "circ.out",
        opacity: 0,
      },
      "<0.2"
    );
  }, []);

  return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
      <div ref={contextRef} className="relative z-10" style={{userSelect: "none"}}>
        {/* 
          We are using the rectangle clip path so 
          that our text appears like coming from the bottom

          below this clip path rectangle our text will not
          be visible, and when we pull it up using gsap, 
          then it will be visible
        */}
        <div style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }}>
          <div
            ref={headerRef}
            className="flex flex-col justify-center gap-3 sm:gap-5"
          >
            {/* We used items-baseline here to align the text */}
            <div className="md:text-xl font-light tracking-[0.5rem] uppercase px-10 text-black flex flex-wrap items-baseline">
              <div>I am Adi</div>
              <div className="text-xl md:text-2xl font-zen-antique-soft">
                {"("}アディ{")"}
              </div>
            </div>
            <div className="px-10">
              {/*
              banner-text-responsive is my custom class in index.css
            */}
              <h1 className="flex flex-col flex-wrap gap-12 text-black uppercase banner-text-responsive font-bold sm:font-semibold sm:gap-16 md:block">
                Aditya Raj Singh Ranawat
              </h1>
            </div>
          </div>
        </div>

        <div className="relative px-10 text-black">
          <div className="absolute inset-0 border-t-2" />
          <div className="py-5 sm:py-8 text-end">
            <AnimatedTextLines
              text={aboutText}
              className={"font-light uppercase value-text-responsive"}
            />
          </div>
        </div>
      </div>
      {/* 
          npm i three @react-three/fiber @react-three/drei react-responsive maath 
      */}
      <figure
        className="absolute inset-0 z-0"
        style={{ width: "100dvw", height: "100dvh" }}
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
            <Planet scale ={isMobile ? 0.4 : isTablet ? 0.7 : 1} />
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
