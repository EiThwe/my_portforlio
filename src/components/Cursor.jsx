import React from "react";
import AnimatedCursor from "react-animated-cursor";

const Cursor = () => {
  return (
    <AnimatedCursor
      innerSize={5}
      outerSize={50}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      hasBlendMode={true}
      trailingSpeed={10}
    
      innerStyle={{
        backgroundColor: "#c90076",
      }}
      outerStyle={{
        border: "1px solid #c90076",
      }}
    />
  );
};

export default Cursor;
