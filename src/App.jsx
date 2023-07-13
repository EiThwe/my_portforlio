import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";

import "./App.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(
    () =>
      setTimeout(() => {
        setIsLoading(false);
      }, 2000),
    []
  );
  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-black ">
        <div className="loading-box">
          <div className="loading-text-box">
            <h3 className="loading-text">Raphtalia Kay</h3>
          </div>
          <span className="loading-underline"> </span>
        </div>
      </div>
    );
  }
  return <Layout></Layout>;
};

export default App;
