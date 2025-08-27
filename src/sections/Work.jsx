import { Icon } from "@iconify/react/dist/iconify.js";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Work = () => {
  const workSubtitle = "logic meets asthetics, seamlessly";
  const workTitle = "work";
  const workText = `Featured projects that have been meticulously 
    crafted with passion to drive 
    results and impace`;
  const workTextColor = "text-black";
  const workClass = "mt-[50px]";
  const workWithScrollTrigger = true;
  const [currentIndex, setCurrentIndex] = useState(null);
  const previewRef = useRef(null);

  {
    /* 
      we are using these as ref to use these animation in another function 
      so we will pass them in a function to invoke the animation
    */
  }
  const moveX = useRef(null);
  const moveY = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });

  const overlayRefs = useRef([]);
  const projectRefs = useRef([]);

  useGSAP(() => {
    {
      /* 
        we are using quickTo here because its more perfomance friendly
        and since we are quickly animating opacity and scale  

        
        Note:-

        gsap.quickTo works for a single property (e.g., "x", "y") 
        and returns a function.

        For multiple properties (opacity, scale), you should use 
        gsap.to.
      */
    }

    {
      /*
        Syntax:-
        gsap.quickTo(target, property, vars)

        Instead, it returns a function that 
        you can call anytime with a new value
      */
    }
    moveX.current = gsap.quickTo(previewRef.current, "x", {
      duration: 1.5,
      ease: "power3.out",
    });
    moveY.current = gsap.quickTo(previewRef.current, "y", {
      duration: 1.5,
      ease: "power3.out",
    });

    projectRefs.current.forEach((el) => {
      gsap.from(el, {
        delay: 0.5,
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "back.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: el,
        }
      })
    });
  }, []);

  const handleMouseEnter = (index) => {
    {
      /* dont do anything on mobile */
    }
    if (window.innerWidth < 768) return;
    setCurrentIndex(index);

    const el = overlayRefs.current[index];
    if (!el) return;
    {
      /* it means we are killing the previous animation */
    }
    gsap.killTweensOf(el);

    gsap.fromTo(
      el,
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 0.15,
        ease: "power2.out",
      }
    );

    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;
    setCurrentIndex(null);

    const el = overlayRefs.current[index];

    if (!el) return;
    gsap.killTweensOf(el);

    gsap.to(el, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      duration: 0.2,
      ease: "power2.in",
    });

    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;

    mouse.current.x = e.clientX + 24;
    mouse.current.y = e.clientY - innerWidth / 10;

    moveX.current(mouse.current.x);
    moveY.current(mouse.current.y);
  };

  return (
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
        subTitle={workSubtitle}
        title={workTitle}
        text={workText}
        textColor={workTextColor}
        tailwindClass={workClass}
        withScrollTrigger={workWithScrollTrigger}
      />
      {/*
        - handleMouseMove() is called immidiately since it sees 
        the position of the mouse
        
        - handleMouseEnter() and handleMouseLeave() are passed with 
        parameter since they should be only invoked when 
        mouse enters or leaves
      */}

      {/*
        Correct:-
        onMouseMove={(e) => handleMouseMove(e)}

        Works fine, but React already does this for you if you 
        just write onMouseMove={handleMouseMove}.


        Wrong:-
        handleMouseMove() 
        
        Because it triggers when
        the component renders, even if you did not 
        move the mouse for the first time or  
        the mouse is not moving
      */}
      <div
        className="relative flex flex-col font-light"
        onMouseMove={handleMouseMove}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => {
              projectRefs.current[index] = el;
            }}
            className="group relative flex flex-col gap-1 py-5 cursor-pointer md:gap-0"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* overlay */}

            {/*
              The clip-path property will hide the element in polygon
            */}
            <div
              ref={(el) => {
                overlayRefs.current[index] = el;
              }}
              className="absolute inset-0 hidden md:block bg-black duration-200 -z-10 clip-path"
            />

            {/* 
              - You put the class group on a parent element.
              
              - Then, in its children, you use modifiers like group-hover:, 
              group-focus:, etc.
              
              - syntax [groupName]-[event]:[actionOnChild]
            */}

            {/* title */}
            <div className="flex justify-between px-5 sm:px-10 text-black transition-all duration-500 md:group-hover:text-white md:group-hover:px-12">
              <h2 className="work-text-responsive leading-none">
                {project.name}
              </h2>
              <Icon icon="lucide:arrow-up-right" className="size-5 md:size-6" />
            </div>

            {/* divider */}
            <div className="w-full h-0.5 bg-black/80 my-2" />

            {/* framework */}
            <div className="flex px-5 sm:px-10 text-xm md:text-sm leading-loose uppercase transition-all duration-500 gap-x-5 md:group-hover:px-12 flex-wrap">
              {project.frameworks.map((framework) => (
                <p
                  key={framework.id}
                  className="text-black transition-colors duration-500 md:group-hover:text-white"
                >
                  {framework.name}
                </p>
              ))}
            </div>

            {/* mobile preview images */}
            <div className="relative flex justify-center items-center my-1 px-5 sm:px-10 h-[400px] md:hidden">
              <div className="relative w-full h-full">
                {/* bg image */}
                <img
                  src={project.bgImage}
                  alt={`${project.name}-bg-image`}
                  className=" object-cover object-center w-full h-full rounded-md brightness-50"
                />
                <div className="absolute inset-0 flex justify-center items-center w-full h-full">
                  {/* project image */}
                  <img
                    src={project.image}
                    alt={`${project.name}-image`}
                    className="object-cover max-w-[90%] max-h-[90%] rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* desktop floating preview image */}
        <div
          ref={previewRef}
          className="hidden md:block fixed opacity-0 top-0 left-0 z-50 overflow-hidden border-8 border-black/80 pointer-events-none w-[50vw] "
        >
          {currentIndex !== null && (
            <img
              src={projects[currentIndex].image}
              alt="preview"
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
