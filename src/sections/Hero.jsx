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
        <div className="relative px-10 text-black">
          <div className="absolute inset-0 border-t-2" />
          <div className="py-5 sm:py-8 text-end">
            <p className="font-light uppercase value-text-responsive">
              From concept to deployment, I deliver web experiences <br />
              that give brands and startups a competitive <br />
              edge in the digital world
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
