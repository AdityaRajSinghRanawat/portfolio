import { useState, useEffect } from "react";
import Navbar from "./sections/Navbar";
import Welcome from "./sections/Welcome";

const App = () => {
  const [started, setStarted] = useState(false);
  const [visible, setVisible] = useState(false);

  const startSite = () => {
    setStarted(true);
    setTimeout(() => setVisible(true), 300);
  };

  return (
    <>
      {/* 
        "startSite" is passed as prop because of DOM mount and unmount problem
        it will start when onStart is called as a function
      */}

      {!started && <Welcome onStart={startSite} />}
      {started && (
        <div
          className={`opacity-${visible ? "100" : "0"} transition-opacity duration-700`}
        >
          <Navbar />
          <section id="home" className="h-[200vh] bg-gray-100" />
          <section id="services" className="h-[200vh] bg-red-100" />
          <section id="about" className="h-[200vh] bg-blue-100" />
        </div>
      )}
    </>
  );
};

export default App;
