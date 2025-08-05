import "../css/FloatingText.css";
import { type ReactNode, useEffect, useState } from "react";

type AnimationStyle = "flyInLeft" | "flyInRight" | "fadeIn";

interface props {
  headerText: ReactNode;
  bodyText: ReactNode;
  animationStyle: AnimationStyle;
}

function FloatingText({ headerText, bodyText, animationStyle }: props) {
  const [isMobile, setIsMobile] = useState(false);

  const animationStyleClass =
    animationStyle === "flyInLeft" || animationStyle === "flyInRight"
      ? "fly-in " + animationStyle
      : "fade-in";

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".div-background");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-text");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={
        (isMobile ? "mobile" : animationStyleClass) + " div-background"
      }
    >
      {headerText}
      {bodyText}
    </div>
  );
}

export default FloatingText;
