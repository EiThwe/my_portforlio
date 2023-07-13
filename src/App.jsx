import React from "react";
import Layout from "./components/Layout";
import OtherKnowledge from "./components/OtherKnowledge";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <Layout>
      <OtherKnowledge />
      <Portfolio />
      <OtherKnowledge />
    </Layout>
  );
};

export default App;
