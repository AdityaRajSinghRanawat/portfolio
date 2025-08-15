
import { useRef, useState, useEffect } from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-[99999]">
      <p className="text-xl italic tracking-wider text-white/80">
        Please wait for the experience to begin...
      </p>
    </div>
  );
};

export default Loader;