import DisplayData from "./funct/displayData";
import SearchBar from "./partial/SearchBar";

function SearchSection() {
  return (
    <div className="w-[50%] h-[75vh] p-10 flex flex-col justify-center items-end  absolute  top-0 search-box-animate">
      <h1 className="font-bold text-4xl text-white">Search Something</h1>
      <SearchBar />
      <DisplayData />
    </div>
  );
}

export default SearchSection;
