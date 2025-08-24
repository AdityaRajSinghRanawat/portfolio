import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const AnimatedTextLines = ({ text, className, linesClassName }) => {
  const containerRef = useRef(null);
  const lineRefs = useRef([]);

  {
    /* 
    
        text.split("\n") 
        - it split terxt by new line character
        
        (line) => {return line.trim() !== ""}
        - it filters out empty lines and returns single lines
        - remove space from start and end of each line
        - eg: "  Hello World  " becomes "Hello World"

        split("\n")
        - it returns an array of lines

        lines 
        - eg: ["Hello World", "This is a test", "Another line"]
    */
  }
  const lines = text.split("\n").filter((line) => {
    return line.trim() !== "";
  });

  useGSAP(() => {
    {
      /* Only animate if we have lines to animate */
    }
    if (lineRefs.current.length > 0) {
      gsap.from(lineRefs.current, {
        y: 100,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        ease: "back.out",
        scrollTrigger: {
          trigger: containerRef.current,
        },
      });
    }
  }, []);

  {
    /*
      trigger: containerRef.current
      - it means animate it when the containerRef is in view  
    */
  }
  return (
    <div ref={containerRef} className={className}>
      {lines.map((line, index) => {
        {
          /*
            Since useRef current for "lineRefs" is an empty array,
            we inset an array element at the current index
            and assign the current span element to it.
            
            e.g:
            lineRefs.current[0] = <span>Hello World</span>
            lineRefs.current[1] = <span>This is a test</span>
            lineRefs.current[2] = <span>Another line</span>

            lineRefs.current[index] will be used to access the span element
            e.g. linesRef.current = 
            [<span> Hello World</span>, 
            <span>This is a test</span>, 
            <span>Another line</span>]
        */
        }
        return (
          <p
            key={index}
            ref={(el) => {
              return (lineRefs.current[index] = el);
            }}
            className = {`block text-pretty leading-relaxed ${linesClassName}`}
          >
            {line}
          </p>
        );
      })}
    </div>
  );
};

export default AnimatedTextLines;
