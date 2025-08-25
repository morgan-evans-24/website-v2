import "../css/FloatingText.css";
import {type ReactNode, useEffect, useRef, useState} from "react";

type AnimationStyle = "flyInLeft" | "flyInRight" | "fadeIn";

interface props {
  headerText: ReactNode;
  bodyText: ReactNode;
  animationStyle: AnimationStyle;
}

function FloatingText({ headerText, bodyText, animationStyle }: props) {
  const [isMobile, setIsMobile] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

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
        if (!elementRef.current) {
            return;
        }
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsRevealed(true);
                        observer.unobserve(entry.target)
                    }
                });
            },
            { threshold: 0.1 },
        );

        observer.observe(elementRef.current);

        return () => observer.disconnect();
    }, []);

  return (
    <div
        ref={elementRef}
      className={
        (isMobile ? "mobile" : animationStyleClass) + " div-background " + (isRevealed ? "show-text" : "")
      }
    >
      {headerText}
      {bodyText}
    </div>
  );
}

export default FloatingText;
