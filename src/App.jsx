import Loading from "./components/partial/Loading";
import MainContent from "./components/partial/MainContent";

import { useState } from "react";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  setInterval(() => {
    setLoading(false);
  }, 1500);
  return <>{loading ? <Loading /> : <MainContent />}</>;
}

export default App;
