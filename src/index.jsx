import React from "react";

function handleResize() {
  let height = window.innerHeight;
  document.documentElement.style.setProperty(
    "--tenka-viewport-height",
    `${height}px`
  );
}

const useViewportHeight = () => {
  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return null;
};

export default useViewportHeight;
