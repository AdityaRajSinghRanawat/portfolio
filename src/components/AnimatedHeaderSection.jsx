import { useRef } from "react";
import AnimatedTextLines from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

{
  /*
        use withScrollTrigger=false as initial value    
    */
}
const AnimatedHeaderSection = ({
  subTitle,
  title,
  text,
  textColor,
  tailwindClass,
  withScrollTrigger = false,
}) => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: withScrollTrigger
        ? {
            trigger: contextRef.current,
          }
        :  undefined ,
    });
    tl.from(contextRef.current, {
      y: "50vh",
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
    <div
      ref={contextRef}
      className={`relative z-10 ${textColor} ${tailwindClass}`}
      style={{ userSelect: "none" }}
    >
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
          <div className="md:text-xl font-light tracking-[0.5rem] uppercase px-5 sm:px-10  flex flex-wrap items-baseline">
            {subTitle}
          </div>
          <div className="px-5 sm:px-10">
            {/*
                  banner-text-responsive is my custom class in index.css
                */}
            <h1 className="flex flex-col flex-wrap gap-12  uppercase banner-text-responsive font-bold sm:font-semibold sm:gap-16 md:block">
              {title}
            </h1>
          </div>
        </div>
      </div>

      <div className="relative px-5 sm:px-10">
        <div className="inset-0 border-t-2 mt-2" />
        <div className="py-5 sm:py-8 text-end">
          <AnimatedTextLines
            text={text}
            className={"font-light uppercase value-text-responsive"}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedHeaderSection;
