import { Routes, Route } from "react-router-dom";
import * as React from "react";
import "./index.css";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader.tsx";
// import { useAppContext } from "./contexts/AppContext";

const Homepage = lazy(() => import("./pages/Homepage.tsx"));
// const About = lazy(() => import("./pages/About"));

function App() {
  // const { userDetails } = useAppContext();
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Suspense>
  );
}

export default App;
