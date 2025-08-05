import "../css/BentoGrid.css";

type BentoItem = {
  id: number;
  color: string;
  title: string;
  element: React.ReactNode;
  width: number;
  height: number;
};

type ClassNames = {
  container: string;
  elementContainer: string;
};

interface Props {
  gridCols?: number;
  rowHeight?: number;
  items: BentoItem[];
  classNames?: ClassNames;
}

function BentoGrid({ gridCols, rowHeight, items, classNames }: Props) {
  return (
    <div
      className={"grid " + classNames?.container}
      style={{
        gridTemplateColumns: "repeat(" + gridCols + ", minmax(0px, 1fr))",
        gridAutoRows: rowHeight + "px",
      }}
    >
      {items.map((item: BentoItem) => (
        <div
          className={classNames?.elementContainer}
          key={item.id}
          style={{
            gridArea: "span " + item.height + " / span " + item.width,
          }}
        >
          {item.element}
        </div>
      ))}
    </div>
  );
}

export default BentoGrid;
