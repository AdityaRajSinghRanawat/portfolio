import { useState, useEffect } from "react";
import Navbar from "./sections/Navbar";
import Welcome from "./sections/Welcome";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";
import Services from "./sections/Services";
import ReactLenis from "lenis/react";
import About from "./sections/About";
import gsap from "gsap";
import Work from "./sections/Work";
import ContactSummary from "./sections/ContactSummary";
import Contact from "./sections/Contact";

const App = () => {
  const [started, setStarted] = useState(false);
  const [visible, setVisible] = useState(false);

  const startSite = () => {
    setStarted(true);
    setTimeout(() => setVisible(true), 1);
  };

  useEffect(() => {
    gsap.ticker.lagSmoothing(0);
  }, []);

  return (
    <>
      {/* 
        "startSite" is passed as prop because of DOM mount and unmount problem
        it will start when onStart is called as a function
      */}

      {!started && <Welcome onStartProp={startSite} />}

      {/* 
        We need to use lenis inside div to make it work

        # reason for bug:- 


        1. Without the extra <div> wrapper:

        Your ReactLenis root becomes the scroll root and is 
        the first render container.

        GSAP is trying to animate elements (like your Navbar) 
        that are inside this custom scroll root.

        At the time GSAP runs, Lenis is already wrapping and managing layout 
        so the browser paints differently, and autoAlpha/opacity transitions 
        might not apply correctly because the element is not being seen 
        as in the "normal DOM flow".




        2. When you add an extra <div> around ReactLenis:

        That outer div (relative transition-opacity ...) becomes 
        a stable parent container.

        Your fade-in/out logic (opacity-0 -> opacity-100) runs on 
        hat parent, outside Lenis.

        Since GSAP now targets elements inside a container that already 
        exists and isn’t being “hijacked” by Lenis, your fade 
        animations work as expected.




        # In short:

        ReactLenis changes how the DOM is structured and scroll-managed.

        GSAP animations on children can behave unexpectedly if 
        their parent container is directly managed by Lenis.

        Wrapping Lenis in a stable <div> gives GSAP a "normal" parent 
        to animate from → so the opacity transitions apply properly.
      */}
      {started && (
        <div
          className={`relative transition-opacity duration-1000 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <ReactLenis root>
            {/*
            Tailwind does not support dynamic class names like opacity-${value}
            
            so this does not work:-
            
            className={`opacity-${visible ? "100" : "0"} transition-opacity duration-700`}

          */}
            <Navbar />
            <Hero />
            <ServiceSummary />
            <Services />
            <About />
            <Work />
            <ContactSummary />
            <Contact/>
          </ReactLenis>
        </div>
      )}
    </>
  );
};

export default App;
