import texasGif from "../../assets/gifs/texas_not_running.gif";

const Loading = () => {
  return (
    <div className="flex justify-center items-center gap-3 w-full h-screen bg-slate-600 relative overflow-hidden">
      <img src={texasGif} className="w-[150px]" alt="" />
    </div>
  );
};

export default Loading;
