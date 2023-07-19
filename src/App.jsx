import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import OtherKnowledge from "./components/OtherKnowledge";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";

import "animate.css";
import "./App.css";
import Skills from "./components/Skill/Skills";
import Education from "./components/Education/Education";
import Profile from "./components/Profile";

import { twistedBackground } from "./utils/convas-twisted";
import { motion } from "framer-motion";
import { useOnScreen } from "./utils/Observer";
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const App = () => {
  const [ref, visible] = useOnScreen({ threshold: 0.01 });
  const [ref1, visible1] = useOnScreen({ threshold: 0.01 });
  const [ref2, visible2] = useOnScreen({ threshold: 0.01 });
  const [ref3, visible3] = useOnScreen({ threshold: 0.01 });
  const [ref4, visible4] = useOnScreen({ threshold: 0.01 });
  const [ref5, visible5] = useOnScreen({ threshold: 0.01 });
  const [ref6, visible6] = useOnScreen({ threshold: 0.01 });

  const [activeTab, setActiveTab] = useState("Home");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(
    () =>
      setTimeout(() => {
        setIsLoading(false);
        twistedBackground();
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
    <Layout activeTab={activeTab}>
      <Profile />
      <Hero setActiveTab={setActiveTab} />
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        ref={ref}
      >
        <About setActiveTab={setActiveTab} />
      </motion.div>
      {/* Education  */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={visible5 ? "visible" : "hidden"}
        ref={ref5}
      >
        <Education setActiveTab={setActiveTab}/>
      </motion.div>
     
      {/* Portfolio */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={visible2 ? "visible" : "hidden"}
        ref={ref2}
      >
        <Portfolio setActiveTab={setActiveTab} />
      </motion.div>
       {/* skill  */}
       <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={visible4 ? "visible" : "hidden"}
        ref={ref4}
      >
        <Skills setActiveTab={setActiveTab}/>
      </motion.div>
{/* other OtherKnowledge  */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={visible1 ? "visible" : "hidden"}
        ref={ref1}
      >
        <OtherKnowledge setActiveTab={setActiveTab}/>
      </motion.div>
      {/* services  */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={visible3 ? "visible" : "hidden"}
        ref={ref3}
      >
        <Services setActiveTab={setActiveTab}/>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={visible6 ? "visible" : "hidden"}
        ref={ref6}
      >
        <Contact setActiveTab={setActiveTab} />
      </motion.div>
    </Layout>
  );
};

export default App;
