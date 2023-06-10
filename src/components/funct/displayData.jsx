import handleClear from "./handleClear";

function DisplayData() {
  const dataHistory = JSON.parse(localStorage.getItem("history"));
  if (dataHistory) {
    return (
      <>
        <div className="flex gap-5 flex-col h-max w-full bg-slate-100 p-5 mt-3">
          <div className="flex gap-3 items-center">
            <h1 className="text-xl text-black font-bold">History</h1>
            <button
              onClick={handleClear}
              className="font-bold  relative isolate group"
            >
              <p className="bg-slate-900 shadow-bottom text-white group-hover:bg-slate-700 transition-all px-3 py-2">
                Clear History
              </p>
              <span className="w-full h-full bg-slate-500  z-[-99] absolute left-[5%] top-[10%]"></span>
            </button>
          </div>
        </div>
        <div className="flex gap-2 w-full">
          {dataHistory.map((data) => (
            <a
              href={data.url}
              className="relative isolate group mt-3"
              key={data.id}
            >
              <p className="bg-slate-50 shadow-bottom text-slate-900 group-hover:bg-slate-200 font-bold transition-all px-3 py-2">
                {data.keyword}
              </p>
              <span className="w-full h-full bg-slate-400  z-[-99] absolute left-[3%] top-[15%]"></span>
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

export default DisplayData;
