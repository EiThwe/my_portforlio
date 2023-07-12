import React from "react";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Layout>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <p key={i} className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quas,
          nisi vero deserunt aliquid recusandae, nostrum molestias asperiores
          aspernatur pariatur illo consequuntur nobis! Fuga tempore expedita
          nam! Doloremque, deserunt harum!
        </p>
      ))}
    </Layout>
  );
};

export default App;
