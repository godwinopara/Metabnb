import HeroDescription from "./HeroDescription";
import HeroImages from "./HeroImages";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse px-6 lg:px-10 lg:flex-row lg:justify-between max-w-[1240px] mx-auto xl:px-0">
      <HeroDescription />
      <HeroImages />
    </section>
  );
};

export default Hero;
