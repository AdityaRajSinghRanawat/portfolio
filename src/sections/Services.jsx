import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { servicesData } from "../constants";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const serviceSubtitle = "behind the scene, beyond the scene";
  const serviceTitle = "Service";
  const serviceText = `I bill secure high performance Full stack apps 
  with smooth ux to drive growth 
  not headache`;
  const serviceTextColor = "text-white";
  const serviceClass = "pt-[50px]";
  const serviceWithScrollTrigger = true;

  const isTableAndDesktop = useMediaQuery({ minWidth: "768px" });

  return (
    <section id="services" className="min-h-screen bg-black rounded-t-4xl ">
      <AnimatedHeaderSection
        subTitle={serviceSubtitle}
        title={serviceTitle}
        text={serviceText}
        textColor={serviceTextColor}
        tailwindClass={serviceClass}
        withScrollTrigger={serviceWithScrollTrigger}
      />
      {/* 
            In your code, you're using pt-[50px] (padding-top) 
            instead of mt-[50px] (margin-top) in 
            serviceClass constant.

            Why does padding-top work but margin-top does not?

            1. Padding (pt-[50px]):-

            When you use pt-[50px] on the child (AnimatedHeaderSection), the content inside that div is pushed down by 50px, as expected.
            

            2. Margin (mt-[50px]):-

            Margin adds space outside the element.
            If you use mt-[50px] on the child, it tries to push the whole 
            AnimatedHeaderSection down from its parent (section).

            BUT: If the parent (section) has no content above the child, 
            or if the parent has no border/padding/background, 
            the margin may "collapse" (margin collapsing), 
            and you won't see the space you expect.

            3. Margin Collapsing:-

            In CSS, when a parent and its first child both have 
            no border/padding/background, 
            their vertical margins can "collapse" into one, 
            making the margin appear to have no effect.
            Padding does not collapse, so it always pushes the content down.
        */}

      {/*
          const exampleRef = useRef(null);
          console.log(exampleRef);

          Output:- 
          { 
            current: {
              current: null
              prototype: Object
            }
          }


          When we use this constant in any element:-
          <div ref={exampleRef}></div>

          Output:- 
          { 
            current: {
              current: <div>...</div>
              prototype: Object
            }
          }


          When we use function in ref={} react understand that we want to 
          point to the current element:-
          
          <div ref={(el) => (exampleRef.current = el)}></div>
          
          Output:- 
          { 
            current: {
              current: <div>...</div>
              prototype: Object
            }
          }


          So evetually we are just updating this constant 
          exampleRef which is transformed into a object 
          because of useRef hook
        */}
      {servicesData.map((service, index) => (
        <div
          key={index}
          className="sticky px-5 sm:px-10 pt-6 pb-12 text-white bg-black border-t-2 border-white/30"
          style={
            isTableAndDesktop
              ? {
                  top: `calc(10vh + ${index * 5}em)`,
                  marginBottom: `${(servicesData.length - index - 1) * 5}rem`,
                }
              : { top: 0 }
          }
        >
          <div className="flex items-center justify-between gap-4 font-light">
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl lg:text-5xl">{service.title}</h2>
              <p className="text-xl lg:text-2xl leading-relaxed tracking-widest text-white/60 text-pretty">
                {service.description}
              </p>
              <div className="flex flex-col gap-2 text-2xl sm:gap-4 lg:text-3xl text-white/80">
                {service.items.map((item, itemIndex) => (
                  <div key={`item-${index}-${itemIndex}`}>
                    <h3 className="flex">
                      <span className="mr-12 text-lg text-white/30">
                        0{itemIndex + 1}
                      </span>
                      {item.title}
                    </h3>
                    {itemIndex < service.items.length - 1 && (
                      <div className="w-full h-px my-2 bg-white/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
