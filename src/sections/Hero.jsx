import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import BackgroundModelCanvas from "../components/BackgroundModelCanvas";

const Hero = () => {
  {
    /* useMediaQuery = this hook returns true or false */
  }

  {
    /*
      <></> this will just be a empty tag
      so my flex-baseline will work in its child elements
      
      and this will act as a empty <></>
    */
  }
  const heroSubtitle = (
    <>
      <div>I am Adi</div>
      <div className="text-xl md:text-2xl font-zen-antique-soft">
        {"("}アディ{")"}
      </div>
    </>
  );
  const heroTitle = "Aditya Raj Singh Ranawat";
  const heroText = `From concept to deployment, I deliver web experiences
  that give brands and startups a competitive
  edge in the digital world`;

  const heroTextColor = "text-black";

  return (
    <section
      id="home"
      className="flex flex-col justify-end h-[90vh] lg:h-[100vh]"
    >
      <AnimatedHeaderSection
        subTitle={heroSubtitle}
        title={heroTitle}
        text={heroText}
        textColor={heroTextColor}
      />
      {/* 
          npm i three @react-three/fiber @react-three/drei react-responsive maath 
      */}
      <BackgroundModelCanvas/>
    </section>
  );
};

export default Hero;
