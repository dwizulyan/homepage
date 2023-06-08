import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import data from "./data.json";

function SearchSection() {
  const [message, setMessage] = useState("");
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  //localStorage.clear();
  return (
    <div className="w-[50%] h-[75vh] p-10 flex flex-col justify-center items-end  absolute  top-0 search-box-animate">
      <h1 className="font-bold text-4xl text-white">Search Something</h1>
      <form action="" className="w-full flex mt-4 flex-col items-end">
        <div className="w-full flex justify-end gap-3">
          <input
            onChange={handleChange}
            type="text"
            required
            className="w-[70%] p-3 focus:bg-[#CADFE8] border-2 focus:border-2 focus:outline-none bg-white transition-all"
          />
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
        </div>
      </form>
      <DisplayData />
    </div>
  );
}
const handleUrl = (query) => {
  if (query === "") return;
  data.map((data) => {
    const findKey = data.keyword.indexOf(query) > -1;
    if (findKey) {
      saveHistorySearch(query, data.url);
      return (location.href = data.url);
    } else {
      const url = `https://www.google.com/search?query=${query}`;
      saveHistorySearch(query, url);
      return (location.href = url);
    }
  });
};

const saveHistorySearch = (query, url) => {
  const prevData = localStorage.getItem("history");
  if (prevData) {
    const processedData = JSON.parse(prevData);
    const currData = {
      id: processedData.length,
      keyword: query,
      url: url,
    };
    processedData.push(currData);
    localStorage.clear();
    return localStorage.setItem("history", JSON.stringify(processedData));
  } else {
    const container = [];
    const currData = {
      id: 0,
      keyword: query,
      url: url,
    };
    container.push(currData);
    const processedData = JSON.stringify(container);
    localStorage.setItem("history", processedData);
    console.log(localStorage.getItem("history"));
  }
};

function DisplayData() {
  const dataHistory = JSON.parse(localStorage.getItem("history"));
  if (dataHistory) {
    return (
      <>
        <div className="flex gap-5 flex-col w-full bg-white p-5 mt-3">
          <div className="flex gap-3 items-center">
            <h1 className="text-xl text-black font-bold">History</h1>
            <button
              onClick={handleClear}
              className="font-bold bg-black text-white px-3 py-2"
            >
              Clear History
            </button>
          </div>
        </div>
        <div className="flex gap-2 w-full">
          {dataHistory.map((data) => (
            <a
              href={data.url}
              className="bg-white w-max flex-wrap px-3 py-2 mt-3 text-black hover:text-[#8099b5]"
              key={data.id}
            >
              {data.keyword}
            </a>
          ))}
        </div>
      </>
    );
  } else {
    return (
      <div className="flex gap-5 items-center w-full bg-white p-5 mt-3">
        <h1 className="text-xl text-black font-bold">History Is Empty</h1>
      </div>
    );
  }
}
function handleClear() {
  localStorage.clear();
  return (location.href = "/");
}

export default SearchSection;
