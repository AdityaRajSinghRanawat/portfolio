import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
{
  /* 
    target: #title-service-1
    trigger: #service-summary 
*/
}
const ServiceSummary = () => {
  useGSAP(() => {
    gsap.to("#title-service-1", {
      xPercent: 30,
      scrollTrigger: {
        trigger: "service-summary",
        scrub: true,
      },
    });
    gsap.to("#title-service-2", {
      xPercent: -20,
      scrollTrigger: {
        trigger: "#service-summary",
        scrub: true,
      },
    });
    gsap.to("#title-service-3", {
      xPercent: 20,
      scrollTrigger: {
        trigger: "#service-summary",
        scrub: true,
      },
    });
    gsap.to("#title-service-4", {
      xPercent: -30,
      scrollTrigger: {
        trigger: "#service-summary",
        scrub: true,
      },
    });
  });
  return (
    <section
      id="service-summary"
      className="relative mt-20 overflow-x-hidden font-thin leading-snug text-center mb-42 contact-text-responsive"
    >
      <div id="title-service-1">
        <p>Creative Design</p>
      </div>
      <div
        id="title-service-2"
        className="flex items-center justify-center gap-3 translate-x-10 sm:translate-x-2 md:translate-x-12 lg:translate-x-16"
      >
        <p className="font-normal">Web Apps</p>
        <div className="bg-gold responsive-line" />
        <p>Deployment</p>
      </div>

      <div
        id="title-service-3"
        className="flex items-center justify-center gap-3 -translate-x-10 sm:-translate-x-20 md:-translate-x-24 lg:-translate-x-48"
      >
        <p>UI/UX</p>
        <div className="bg-gold responsive-line" />
        <p className="italic">Frontends</p>
        <div className="bg-gold responsive-line" />
        <p>Scalability</p>
      </div>

      <div
        id="title-service-4"
        className="translate-x-10 sm:translate-x-15 md:translate-x-24 lg:translate-x-88"
      >
        <p>Databases</p>
      </div>
    </section>
  );
};

export default ServiceSummary;
