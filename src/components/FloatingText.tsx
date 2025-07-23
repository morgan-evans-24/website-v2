import "../css/FloatingText.css";
import { type ReactNode, useEffect } from "react";

type AnimationStyle = "flyInLeft" | "flyInRight" | "fadeIn";

interface props {
  headerText: ReactNode;
  bodyText: ReactNode;
  animationStyle: AnimationStyle;
}

function FloatingText({ headerText, bodyText, animationStyle }: props) {
  const animationStyleClass =
    animationStyle === "flyInLeft" || animationStyle === "flyInRight"
      ? "fly-in " + animationStyle
      : "fade-in";

  useEffect(() => {
    const elements = document.querySelectorAll(".div-background");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
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
    <div className={animationStyleClass + " div-background"}>
      {headerText}
      {bodyText}
    </div>
  );
}

export default FloatingText;
