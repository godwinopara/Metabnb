import SearchInput from "./SearchInput";
import HeroHeading from "./HeroHeading";

const HeroDescription = () => {
  return (
    <div className="md:w-4/5 lg:w-[40%] xl:w-[50%]">
      <HeroHeading />
      <SearchInput />
    </div>
  );
};

export default HeroDescription;
