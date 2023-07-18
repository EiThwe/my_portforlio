import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import OtherKnowledge from "./components/OtherKnowledge";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

import "./App.css";
import Skills from "./components/Skill/Skills";
import Education from "./components/Education/Education";

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
  return (
    <Layout>
      <OtherKnowledge />
      <Portfolio />
      <Services />
      <Skills />
      <Education />
      {/* {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <p key={i} className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quas,
          nisi vero deserunt aliquid recusandae, nostrum molestias asperiores
          aspernatur pariatur illo consequuntur nobis! Fuga tempore expedita
          nam! Doloremque, deserunt harum!
        </p>
      ))} */}
    </Layout>
  );
};

export default App;
