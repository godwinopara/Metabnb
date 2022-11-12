const SearchInput = () => {
  return (
    <div>
      <input
        type="search"
        name="search"
        placeholder="Search for location"
        className="border border-[#A3A3A3] h-[54px] w-3/5 rounded-l-lg px-4"
      />
      <button className="w-[40%] xl:w-[30%] h-[54px] text-base gradient rounded-r-lg text-white text-center">
        Search
      </button>
    </div>
  );
};

export default SearchInput;
