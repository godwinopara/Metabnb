import HeroDescription from "./HeroDescription";
import HeroImages from "./HeroImages";

const Hero = () => {
  return (
    <section className="flex justify-between max-w-[1240px] mx-auto">
      <HeroDescription />
      <HeroImages />
    </section>
  );
};

export default Hero;
