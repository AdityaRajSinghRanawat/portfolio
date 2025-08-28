import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { contacts, socials } from "../constants";
const Contact = () => {
  {
    /* Contact Header Constants */
  }
  const contactSubtitle = "Got a project? Let's talk.";
  const contactTitle = "contact";
  const contactText = `Ideas don't wait why should you?
  Let's connect.`;
  const contactTextColor = "text-white";
  const contactClass = "mt-[50px]";
  const contactWithScrollTrigger = true;

  {
    /* Contact Marquee Constants */
  }
  const marqueeItems = [
    "Let's build",
    "Let's build",
    "Let's build",
    "Let's build",
    "Let's build",
  ];
  const marqueeIcon = "ion:rocket-sharp";
  const marqueeClass = "text-white bg-black";
  const marqueeIconClass = "text-white size-12";

  return (
    <section id="contact" className="min-h-screen flex flex-col justify-between bg-black">
      <AnimatedHeaderSection
        subTitle={contactSubtitle}
        title={contactTitle}
        text={contactText}
        textColor={contactTextColor}
        tailwindClass={contactClass}
        withScrollTrigger={contactWithScrollTrigger}
      />

      <div className=" flex px-5 sm:px-10 font-light text-white uppercase text-xl lg:text-2xl leading-none">
        <div className="flex flex-col w-full gap-4">
          {/* Contacts */}
          {contacts.map((contact, index) => (
            <div key={index} className="social-link">
              <h2 className="text-white/50">{contact.name}</h2>
              <div className="w-full h-px bg-white/30 my-3" />
              <a
                className="text-white/80 text-sm lg:text-xl lowercase text-pretty cursor-pointer transition-all duration-300 hover:text-white"
                href={contact.href}
              >
                {contact.text}
              </a>
            </div>
          ))}

          {/* Socials */}
          <div className="social-link">
            <h2 className="text-white/50">Social Media</h2>
            <div className="w-full h-px bg-white/30 my-3" />
            <div className="flex flex-col flex-wrap gap-x-4 md:flex-row">
              {socials.map((social, index) => {
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    className="text-white/80 tracking-widest leading-loose text-sm lg:text-xl uppercase text-pretty transition-all duration-300 cursor-pointer hover:text-white"
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
      </div>
      {/* Marquee */}
      <Marquee
        icon={marqueeIcon}
        className={marqueeClass}
        items={marqueeItems}
        iconClassName={marqueeIconClass}
      />
    </section>
  );
};

export default Contact;
