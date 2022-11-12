import HeroDescription from "./HeroDescription";
import HeroImages from "./HeroImages";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse xl:flex-row xl:justify-between max-w-[1240px] mx-auto">
      <HeroDescription />
      <HeroImages />
    </section>
  );
};

export default Hero;
