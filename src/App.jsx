import { useState, useEffect } from "react";
import Navbar from "./sections/Navbar";
import Welcome from "./sections/Welcome";
import Hero from "./sections/Hero";
import ServiceSummary from "./sections/ServiceSummary";

const App = () => {
  const [started, setStarted] = useState(false);
  const [visible, setVisible] = useState(false);

  const startSite = () => {
    setStarted(true);
    setTimeout(() => setVisible(true), 1);
  };

  return (
    <>
      {/* 
        "startSite" is passed as prop because of DOM mount and unmount problem
        it will start when onStart is called as a function
      */}

      {!started && <Welcome onStartProp={startSite} />}
      {started && (
        <div
          className={`transition-opacity duration-1000 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/*
            Tailwind does not support dynamic class names like opacity-${value}
            
            so this does not work:-
            
            className={`opacity-${visible ? "100" : "0"} transition-opacity duration-700`}

          */}
          <Navbar />
          <Hero />
          <ServiceSummary/>

          <section id="about" className="h-[200vh] bg-blue-100" />
          <section id="work" className="h-[200vh] bg-red-100" />
        </div>
      )}
    </>
  );
};

export default App;
