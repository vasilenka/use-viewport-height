import React from "react";
import useViewportHeight from "./../dist";

const App = () => {
  useViewportHeight();
  return (
    <div
      className="div"
      style={{
        width: "100vw",
        backgroundColor: "rebeccapurple",
      }}
    >
      Helo world
    </div>
  );
};

export default App;
