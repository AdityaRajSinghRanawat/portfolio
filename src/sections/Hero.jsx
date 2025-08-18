import { Suspense, useRef, useMemo, useState, useEffect } from "react";
import AnimatedTextLines from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Canvas } from "@react-three/fiber";
import { Phoenix } from "../components/Phoenix";
import { Environment, Float, Lightformer, OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const Hero = () => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);

  // Responsive camera and model scale (dynamic)
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 640
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cameraProps = useMemo(
    () =>
      isMobile
        ? { position: [0, 0, 18], fov: 30, near: 1, far: 40 }
        : { position: [0, 0, 12], fov: 17.5, near: 1, far: 40 },
    [isMobile]
  );
  const phoenixScale = isMobile ? 0.014 : 0.01;

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
      <div ref={contextRef} className="relative z-10" style={{ pointerEvents: "none" }}>
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
        <Canvas
          dpr={[1, 1.5]}
          camera={cameraProps}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 2, 5]} intensity={0.7} />
          <Suspense fallback={null}>
            <Phoenix scale={phoenixScale} />
          </Suspense>
          <EffectComposer>
            <Bloom
              intensity={1.2}
              luminanceThreshold={0.2}
              luminanceSmoothing={0.85}
              mipmapBlur={true}
            />
          </EffectComposer>
          <Environment resolution={32}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer form={"circle"} intensity={1} position={[0, 5, -9]} scale={10} />
              <Lightformer form={"circle"} intensity={1} position={[0, 3, 1]} scale={10} />
              <Lightformer form={"circle"} intensity={1} position={[-5, -6, -6]} scale={10} />
              <Lightformer form={"circle"} intensity={1} position={[10, 1, 3]} scale={16} />
            </group>
          </Environment>
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={2 * Math.PI / 3}
            // You can adjust the angles above for more/less vertical freedom
          />
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
