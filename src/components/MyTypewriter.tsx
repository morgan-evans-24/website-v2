import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import TypeWriter from "typewriter-effect";
import "../css/MyTypewriter.css";

function MyTypewriter(text: string) {
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true, // only run once
    threshold: 0.1, // % of element in view to trigger
  });

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={(node) => {
        inViewRef(node);
        containerRef.current = node;
      }}
    >
      {inView && (
        <TypeWriter
          onInit={(typewriter) => {
            typewriter
              .changeDelay(80)
              .typeString(text)
              .pauseFor(1000)
              .start()
              .callFunction(() => {
                const cursor = containerRef.current?.querySelector(
                  ".Typewriter__cursor",
                ) as HTMLElement | null;
                if (cursor) {
                  cursor.style.visibility = "hidden";
                }
              });
          }}
        />
      )}
    </div>
  );
}

export default MyTypewriter;
