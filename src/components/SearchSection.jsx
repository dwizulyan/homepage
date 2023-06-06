import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function SearchSection() {
  const [message, setMessage] = useState("");
  const handleChange = (event) => {
    setMessage(event.target.value);
    console.log(message);
  };
  return (
    <div className="w-[50%] h-[75vh] p-10 flex flex-col justify-center items-end  absolute  top-0 search-box-animate">
      <h1 className="font-bold text-4xl text-white">Search something</h1>
      <form action="" className="w-full flex mt-4 flex-col items-end">
        <div className="w-full flex justify-end gap-3">
          <input
            onChange={handleChange}
            type="text"
            className="w-[70%] p-3 focus:bg-[#CADFE8] border-2 focus:border-2 focus:outline-none bg-white transition-all"
          />
          <div className="hover:bg-[#CADFE8] flex justify-center items-center px-5 p-3 bg-white w-max hover:cursor-pointer transition-all group">
            <button
              onClick={(e) => {
                e.preventDefault();
                location.href = `https://www.google.com/search?query=${message}`;
              }}
            >
              {" "}
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                fontSize={21}
                className="text-[#8099B5] group-hover:text-white transition-all"
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SearchSection;
