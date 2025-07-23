// The home page that explains how the website works and points to the other pages

import AnimatedBackground from "../components/AnimatedBackground.tsx";
import "../css/Home.css";
import FloatingText from "../components/FloatingText.tsx";
import TypeWriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

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

function Home() {
  return (
    <>
      <div className="shader-background">
        <AnimatedBackground />
      </div>
      <div className="home-page-content">
        <FloatingText
          headerText={MyTypewriter("Hi There!")}
          bodyText={
            <p className={"text"}>
              My name's Morgan, I'm a software and web developer. Welcome to my
              website. <b>Scroll down</b> to take a look.
            </p>
          }
          animationStyle="fadeIn"
        />
        <FloatingText
          headerText={MyTypewriter("About Me")}
          bodyText={
            <p className={"text"}>
              You can read more about me and <b>my experience</b> in the{" "}
              <a href={"/aboutme"}>About Me</a> section.
            </p>
          }
          animationStyle="flyInLeft"
        />
        <FloatingText
          headerText={MyTypewriter("Past Projects")}
          bodyText={
            <p className={"text"}>
              Take a look at some of the <b>projects</b> I have worked on{" "}
              <a href={"/projects"}> here</a>.
            </p>
          }
          animationStyle="flyInRight"
        />
        <FloatingText
          headerText={MyTypewriter("Contact Me!")}
          bodyText={
            <>
              <p className={"text"}>
                <b>Email</b>: morgan.evans0805@gmail.com
              </p>
              <p className={"text"}>
                <b>Phone number</b>: +447484752322
              </p>
              <p className={"text"}>
                There are links to my social media platforms in the navigation
                menu at the top of the page.
              </p>
            </>
          }
          animationStyle="fadeIn"
        />
      </div>
    </>
  );
}

export default Home;
