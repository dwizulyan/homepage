import Loading from "./components/partial/Loading";
import { Suspense, lazy } from "react";
const MainContent = lazy(() => import("./components/partial/MainContent"));
import "./App.css";

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <MainContent />
      </Suspense>
    </>
  );
}

export default App;
