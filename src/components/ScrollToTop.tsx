import { useEffect } from "react";

function ScrollToTop() {
  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      console.log("Scroll to Top");
    });
  }, []);

  return null;
}

export default ScrollToTop;
