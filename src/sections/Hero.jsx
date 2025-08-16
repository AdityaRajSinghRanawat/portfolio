import { useRef } from "react";

const Hero = () => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);
  return (
    <section id="home" className="flex flex-col justify-end min-h-screen">
      <div ref={contextRef}>
        <div
          ref={headerRef}
          style={{ clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }}
          className="flex flex-col justify-center gap-3 pt-16 sm:gap-5"
        >
          <p className="text-sm font-light tracking-[0.5rem] uppercase px-10 text-black">
            404 No Bugs Found
          </p>
          <div className="px-10">
            {/*
              banner-text-responsive is my custom class in index.css
            */}
            <h1 className="flex flex-col flex-wrap gap-12 text-black uppercase banner-text-responsive font-bold sm:font-semibold sm:gap-16 md:block">
              Aditya Raj Singh Ranawat
            </h1>
          </div>
        </div>
        <div className="relative px-10 text-black">
          <div className="absolute inset-0 border-t-2" />
          <div className="py-12 sm:py-16 text-end">
            <p className="font-light uppercase value-text-responsive">
              I help growing brands and <br /> startups gain an unfair advantage
              through <br /> premium results driven webs/apps
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
