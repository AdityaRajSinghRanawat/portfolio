import { useRef } from "react";
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const ContactSummary = () => {
  const containerRef = useRef(null);

  const upperMarqueeItems = [
    "Development",
    "Excellence",
    "Creativity",
    "Trust",
    "Collaboration",
  ];
  const upperMarqueeIcon = "file-icons:shuriken";
  const upperMarqueeClass = "text-white bg-black";
  const upperMarqueeIconClass = "text-gold size-12";

  const lowerMarqueeItems = [
    "Design",
    "Impact",
    "Experience",
    "Storytelling",
    "Growth",
  ];
  const lowerMarqueeIcon = "game-icons:beveled-star";
  const lowerMarqueeClass = "text-black bg-gold/85";
  const lowerMarqueeIconClass = "text-white size-12";

  {
    /* 
      (end: "+=800 center) means:-
      the animation will end when the element is 800px 
      from the center of the viewport 
    */
  }

  {
    /*
      (pinSpacing: true) means:-
      the animation will be pinned to the top and bottom of the viewport
    */
  }
  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });
  });

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-between h-screen gap-12 mt-16"
    >
      {/* Marquee */}
      <Marquee
        icon={upperMarqueeIcon}
        className={upperMarqueeClass}
        items={upperMarqueeItems}
        iconClassName={upperMarqueeIconClass}
      />

      {/* Main Text */}
      <div className="text-center font-light overflow-hidden contact-text-responsive py-3 px-5 sm:px-10">
        <p className="leading-snug">
          "Transforming <span className="text-gold">ideas</span>
          <br />
          into <span className="text-gold font-kaushan-script">
            powerful
          </span>, <span className="italic font-thin">memorable</span>
          <br />
          digital <span className="font-bold">identities</span>"
        </p>
      </div>

      {/* Marquee */}
      <Marquee
        icon={lowerMarqueeIcon}
        className={lowerMarqueeClass}
        items={lowerMarqueeItems}
        iconClassName={lowerMarqueeIconClass}
        reverse={true}
      />
    </section>
  );
};

export default ContactSummary;
