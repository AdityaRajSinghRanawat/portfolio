import { Icon } from "@iconify/react/dist/iconify.js";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
const Work = () => {
  const workSubtitle = "logic meets asthetics, seamlessly";
  const workTitle = "work";
  const workText = `Featured projects that have been meticulously 
    crafted with passion to drive 
    results and impace`;
  const workTextColor = "text-black";
  const workClass = "mt-[50px]";
  const workWithScrollTrigger = true;

  return (
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
        subTitle={workSubtitle}
        title={workTitle}
        text={workText}
        textColor={workTextColor}
        tailwindClass={workClass}
        withScrollTrigger={workWithScrollTrigger}
      />
      <div className="relative flex flex-col font-light">
        {projects.map((project) => (
          <div
            key={project.id}
            id="project"
            className="group relatve flex flex-col gap-1 py-5 cursor-pointer md:gap-0"
          >
            {/* 
              - You put the class group on a parent element.
              
              - Then, in its children, you use modifiers like group-hover:, 
              group-focus:, etc.
              
              - syntax [groupName]-[event]:[actionOnChild]
            */}

            {/* title */}
            <div className="flex justify-between px-5 sm:px-10 text-black transition-all duration-500 md:group-hover:text-white md:group-hover:px-12">
              <h2 className="work-text-responsive leading-none">
                {project.name}
              </h2>
              <Icon icon="lucide:arrow-up-right" className="size-5 md:size-6" />
            </div>

            {/* divider */}
            <div className="w-full h-0.5 bg-black/80 my-2" />

            {/* framework */}
            <div className="flex px-5 sm:px-10 text-xm md:text-sm leading-loose uppercase transition-all duration-500 gap-x-5 md:group-hover:px-12 flex-wrap">
              {project.frameworks.map((framework) => (
                <p
                  key={framework.id}
                  className="text-black transition-colors duration-500 md:group-hover:text-white"
                >
                  {framework.name}
                </p>
              ))}
            </div>

            {/* mobile preview images */}
            <div className="relative flex justify-center items-center my-1 px-5 sm:px-10 h-[400px] md:hidden">
              <div className="relative w-full h-full">
                {/* bg image */}
                <img
                  src={project.bgImage}
                  alt={`${project.name}-bg-image`}
                  className=" object-cover object-center w-full h-full rounded-md brightness-50"
                />
                <div className="absolute inset-0 flex justify-center items-center w-full h-full">
                  {/* project image */}
                  <img
                    src={project.image}
                    alt={`${project.name}-image`}
                    className="object-cover max-w-[90%] max-h-[90%] rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
