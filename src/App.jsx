import React from "react";
import Layout from "./components/Layout";
import OtherKnowledge from "./components/OtherKnowledge";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

const App = () => {
  return (
    <Layout>
      <OtherKnowledge />
      <Portfolio />
      <Services />
    </Layout>
  );
};

export default App;
