import texas from "./assets/images/Texas_Elite_2.webp";
import "./App.css";
import TexasDialogue from "./components/TexasDialogue";
import SearchSection from "./components/SearchSection";

function App() {
  return (
    <div className="w-full h-screen bg-[url('./assets/bg/bg.jpeg')] bg-center bg-cover relative overflow-hidden">
      <img
        src={texas}
        alt=""
        className="absolute  texas-entrance pointer-event-none"
      />
      <div className="absolute dialogue-entrance bottom-[1%] px-20 bg-black w-full">
        <TexasDialogue />
      </div>
      <SearchSection />
    </div>
  );
}

export default App;
