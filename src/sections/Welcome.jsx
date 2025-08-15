import { useRef, useState } from "react";
import gsap from "gsap";

const Welcome = ({ onStart }) => {

    const introRef = useRef(null);

  const startSite = () => {
    gsap.to(introRef.current, {
      y: "-100%",
      duration: 1.2,
      ease: "power3.inOut",
      onComplete: () => {
        onStart()
      },
    });
  };

  return (
    <>
      <div
        ref={introRef}
        className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999] text-center gap-6"
      >
        <div className="text-white mb-4 flex flex-col gap-2 justify-center items-center ">
          <div className="font-bold text-8xl">Welcome!</div>
          <div className="w-[90%] h-0.5 bg-gold rounded-full"></div>
          <div className=" italic font-medium text-2xl text-white/80">
            Let's start the journey.
          </div>
        </div>
        <div
          onClick={startSite}
          className="px-16 py-4 text-2xl font-bold  border-3 border-white/80 text-white/80 rounded-full cursor-pointer hover:border-gold hover:text-gold transition-all duration-500"
        >
          Start
        </div>
      </div>
    </>
  );
};

export default Welcome;
