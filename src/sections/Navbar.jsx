import React, { useRef } from "react";
import { contact, socials } from "../constants";

const Navbar = () => {
  {
    /*so now when route change it will not render again and again*/
  }
  const navRef = useRef(null);
  {
    /*to animate each div with index*/
  }
  const linksRef = useRef([]);
  const contactRef = useRef(null);
  return (
    <nav
      ref={navRef}
      className="fixed z-50 flex flex-col justify-between w-full h-[100dvh] px-10 uppercase bg-black text-white/80 py-20 gap-y-10 md:w-1/2 md:left-1/2"
    >
      {/*text-white/80 = 80% opacity */}
      <div className="flex flex-col text-3xl gap-y-2 md:text-4xl lg:text-5xl">
        {/*array*/}
        {/*JS .map() provide index and every array element/section is taken at a time*/}
        {["home", "services", "about", "work", "contact"].map(
          (section, index) => {
            return (
              <div
                key={index}
                ref={(el) => {
                  {
                    /*
                      this is useful in the scrollIntoView() function:- 
                      linksRef.current[0] = <div>home</div>
                      linksRef.current[1] = <div>services</div> 

                      this is another way to use useRef
                  */
                  }
                  linksRef.current[index] = el;
                }}
              >
                {/*el is the current div and we are storing the current element into linksRef array*/}
                <a className="transition-all duration-300 cursor-pointer hover:text-white">
                  {section}
                </a>
              </div>
            );
          }
        )}
      </div>
      <div
        ref={contactRef}
        className="flex flex-col flex-wrap justify-between gap-8 md:flex-row"
      >
        <div>
          <p className="tracking-wider text-white/50">E-mail</p>
          <a
            className="tracking-widest text-sm lg:text-xl lowercase text-pretty cursor-pointer transition-all duration-300  hover:text-white"
            href={contact[0].email}
          >
            adityarajsinghranawatjobs@gmail.com
          </a>
        </div>
        <div>
          <p className="tracking-wider text-white/50">Social Media</p>
          <div className="flex flex-col flex-wrap gap-x-4 md:flex-row">
            {socials.map((social, index) => {
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="tracking-widest leading-loose text-sm lg:text-xl uppercase text-pretty transition-all duration-300 cursor-pointer hover:text-white"
                >
                  {"{ "}
                  {social.name}
                  {" }"}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
