interface Props {
  variant:
    | "Rust"
    | "Python"
    | "Java"
    | "Haskell"
    | "C"
    | "C++"
    | "C#"
    | "Unity"
    | "React"
    | "TypeScript/JavaScript";
}

const tagColors: Record<
  Props["variant"],
  { background: string; color: string }
> = {
  Rust: { background: "#f74b00", color: "#fff" },
  Python: { background: "#ffcd43", color: "#000" },
  Java: { background: "#e76f00", color: "#fff" },
  Haskell: { background: "#5e4f87", color: "#fff" },
  C: { background: "#2a3793", color: "#fff" },
  "C++": { background: "#004283", color: "#fff" },
  "C#": { background: "#80157e", color: "#fff" },
  Unity: { background: "#525252", color: "#fff" },
  React: { background: "#58c4dc", color: "#000" },
  "TypeScript/JavaScript": { background: "#125f97", color: "#fff" },
};

function TechnologyTag({ variant }: Props) {
  const { background, color } = tagColors[variant];

  return (
    <div
      style={{
        backgroundColor: background,
        borderRadius: "10px",
        padding: "2px 10px 2px 10px",
        margin: "5px 5px",
        display: "inline-block",
      }}
    >
      <p style={{ margin: 0, color: color }}>{variant}</p>
    </div>
  );
}

export default TechnologyTag;
