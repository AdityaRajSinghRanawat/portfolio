import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Welcome = ({ onStartProp }) => {
  const introRef = useRef(null);
  const welcomeTextRef = useRef(null);
  const lineRef = useRef(null);
  const startButtonRef = useRef(null);
  const tl = useRef(null);

  useGSAP(() => {
    tl.current = gsap
      .timeline({ defaults: { ease: "power2.out" } })
      .from(welcomeTextRef.current, {
        delay: 1,
        autoAlpha: 0,
        y: -30,
        duration: 0.8,
      })
      .from(lineRef.current, {
        width: 0,
        duration: 0.8,
      })
      .from(startButtonRef.current, {
        autoAlpha: 0,
        y: -20,
        duration: 0.8,
      });
  }, []);

  const startSite = () => {
    gsap.to(introRef.current, {
      y: "-100%",
      duration: 1.2,
      ease: "power3.inOut",
      onComplete: () => {
        onStartProp();
      },
    });
  };

  {
    /*
    We did not use:-
    return () => tl.kill();

    in the useGSAP hook but used it in the useEffect hook.

    Because:-
    If you use useEffect, you must handle cleanup (tl.kill()).
    If you use useGSAP, cleanup is automatic.
  */
  }
  return (
    <>
      <div
        ref={introRef}
        className="fixed inset-0 bg-black flex flex-col items-center justify-center text-center gap-6"
      >
        <div
          ref={welcomeTextRef}
          className="text-white mb-4 flex flex-col gap-2 justify-center items-center "
        >
          <div className="font-kaushan-script md:text-9xl sm:text-7xl text-5xl text-gold">
            Welcome!
          </div>
          <div
            ref={lineRef}
            className="w-[80%] h-0.5 bg-gold/80 rounded-full"
          ></div>
          <div className=" italic font-medium md:text-2xl sm:text-xl text-md text-white/80 ">
            Let's start the <span className="text-gold">journey</span>.
          </div>
        </div>
        <div
          ref={startButtonRef}
          onClick={startSite}
          className=" md:py-4 sm:py-3 py-2 md:text-2xl sm:text-xl text-md md:px-16 sm:px-12 px-8 font-bold border-2 border-white/80 text-white/80 rounded-full cursor-pointer hover:bg-white/10 hover:border-gold hover:text-gold transition-colors duration-300"
        >
          Start
        </div>
      </div>
    </>
  );
};

export default Welcome;
