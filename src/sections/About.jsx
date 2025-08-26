import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import AnimatedTextLines from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutSubtitle = "code with purpose, built to scale";
  const aboutTitle = "about";
  const aboutText = `I design clean, engaging, and scalable 
  digital experiences that blend 
  creativity with code.`;
  const aboutTextColor = "text-white";
  const aboutClass = "pt-[50px]";
  const aboutWithScrollTrigger = true;

  const imgRef = useRef(null);
  const aboutRef = useRef(null);

  const descriptionText = `I'm Aditya Raj Singh Ranawat, a frontend and full-stack developer from Jaipur, India.

  ✨ Skilled in React, Tailwind, and GSAP for intuitive, responsive interfaces

  ✨ Experienced with Node.js, Express, and MongoDB for complete solutions

  ✨ Passionate about UX, animation, and interactive design

  ✨ Certified JLPT N5, with a strong interest in Japan's culture & technology

  ✨ Focused on building experiences that connect global ideas with local impact

  ✨ Committed to creating solutions for millions of users worldwide`;

  {
    /*
      GSAP officially recommends passing actual DOM nodes instead 
      of selectors when working in React.

      This ensures GSAP doesn't depend on global selectors, 
      and your animations remain scoped to the component.  

      If you want to use "#id" then use "ScrollTrigger.refresh()"
      in scrollTrigger: {ScrollTrigger.refresh(),}
    */
  }

  useGSAP(() => {
    gsap.to(aboutRef.current, {
      scale: 0.85,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 100%",
        end: "bottom 40%",
        scrub: true,
        
      },
      ease: "power1.in",
    });

    {
      /* Please use 0% instead of 0, otherwise it will cause an error */
    }
    gsap.set(imgRef.current, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    });

    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: imgRef.current,
        invalidateOnRefresh: true,
      },
    });

    ScrollTrigger.refresh();
  });

  return (
    <section id="about" className="min-h-screen">
      <div ref={aboutRef} className=" bg-black rounded-b-4xl">
        <AnimatedHeaderSection
          subTitle={aboutSubtitle}
          title={aboutTitle}
          text={aboutText}
          textColor={aboutTextColor}
          tailwindClass={aboutClass}
          withScrollTrigger={aboutWithScrollTrigger}
        />
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 px-5 sm:px-10 pb-16 text-xl md:text-2xl lg:text-3xl text-white/60 font-light tracking-wide">
          <img
            ref={imgRef}
            src="/images/my-photo.webp"
            alt="my-photo"
            className="rounded-3xl max-h-[80vh] w-md object-cover object-center"
          />
          <AnimatedTextLines
            text={descriptionText}
            linesClassName={"py-2 md:py-1 lg:py-2 text-xl lg:text-2xl"}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
