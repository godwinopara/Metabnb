import HeroDescription from "./HeroDescription";
import HeroImages from "./HeroImages";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse mb-20 mx-auto lg:mb-0 px-6 lg:px-10 lg:flex-row lg:justify-between max-w-[1240px]  xl:px-0">
      <HeroDescription />
      <HeroImages />
    </section>
  );
};

export default Hero;
