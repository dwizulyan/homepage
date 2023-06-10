import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import handleUrl from "../funct/handleUrl";

function SearchBar() {
  const [message, setMessage] = useState("");
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  //localStorage.clear();
  return (
    <form action="" className="w-full flex mt-4 flex-col items-end">
      <div className="w-full flex justify-end gap-3">
        <div className="relative isolated grup w-[75%] ">
          <input
            onChange={handleChange}
            type="text"
            required
            className="w-[100%] p-3 border-2 focus:border-2 focus:outline-none bg-white transition-all"
          />
          <span className="w-[100%] h-full bg-slate-400 absolute left-[2%] top-[15%] z-[-99]"></span>
        </div>
        <div className="isolate relative group">
          <button
            className="hover:bg-[#CADFE8] flex justify-center items-center px-5 p-3 bg-white w-max hover:cursor-pointer transition-all group"
            onClick={(e) => {
              e.preventDefault();
              handleUrl(message);
            }}
          >
            {" "}
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              fontSize={21}
              className="text-[#8099B5] pointer-event-none group-hover:text-white transition-all"
            />
          </button>
          <span className="w-[100%] h-full bg-slate-400 absolute left-[15%] top-[5%] z-[-99]"></span>
        </div>
      </div>
    </form>
  );
}
export default SearchBar;
