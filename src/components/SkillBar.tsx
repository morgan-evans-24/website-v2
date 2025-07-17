import { ProgressBar } from "react-bootstrap";
import type { Color } from "react-bootstrap/types";

interface Props {
  name: string;
  value: number;
  color?: Color;
  valueColor?: "white" | "black";
}

function SkillBar({ name, value, color, valueColor }: Props) {
  return (
    <>
      <div className="align-items-center">
        <p className="text-center fw-bold mb-0 mt-3">{name}</p>
        <p
          className={
            "position-absolute start-50 translate-middle-x " +
            (valueColor === "white" ? "text-white" : "text-black")
          }
        >
          {value}%
        </p>
        <ProgressBar
          now={value}
          style={
            {
              "--bs-progress-bar-bg": color || "#0d6efd",
              "--bs-progress-box-shadow": "#000000",
              "--bs-progress-height": "25px",
              "--bs-progress-border-radius": "15px",
              border: "2px solid #AdAdAd",
            } as React.CSSProperties
          }
        />
      </div>
    </>
  );
}

export default SkillBar;
