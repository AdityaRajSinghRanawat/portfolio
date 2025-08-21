import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import {servicesData} from "../constants";

const Services = () => {
  const serviceSubtitle = "behind the scene, beyond the scene";
  const serviceTitle = "Service";
  const serviceText = `I bill secure high performance Full stack apps 
  with smooth ux to drive growth not headache`;
  const serviceTextColor = "text-white";
  const serviceClass = "mt-[50px]";
  const serviceWithScrollTrigger = true;

  return (
    <section
      id="services"
      className="min-h-screen h-screen bg-black rounded-t-4xl p-1"
    >
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
            instead of mt-[50px] (margin-top) in serviceClass.

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
    </section>
  );
};

export default Services;
