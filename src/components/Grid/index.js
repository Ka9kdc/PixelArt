import React, { useEffect, useState } from "react";
import { makeBoard } from "../../utils";
import ActionPanel from "./ActionPanel";
import Pallette from "./Pallette";
import Rows from "./Rows";

const Grid = (props) => {
  const { gridSize, setMouseActive, mouseActive } = props;
  const [image, setImage] = useState([]);
  const [painting, setPainting] = useState([]);
  const [choosenColor, setChoosenColor] = useState("red");
  const [cellBordersOn, setCellBordersOn] = useState(true);

  useEffect(() => {
    const newImage = makeBoard(gridSize);
    setImage(newImage);
    // setMouseActive(false);
  }, [gridSize]);

  useEffect(() => {
    const newPainting = [];
    for (let i = 0; i < gridSize; i++) {
      newPainting.push(image.slice(i * gridSize, (i + 1) * gridSize));
    }
    setPainting(newPainting);
  }, [gridSize, image]);

  if (image.length) {
    return (
      <div className="three_columns">
        <Pallette
          choosenColor={choosenColor}
          setChoosenColor={setChoosenColor}
          setMouseActive={setMouseActive}
        />
        <table>
          <tbody>
            {painting.map((row, idx) => (
              <Rows
                image={image}
                setImage={setImage}
                mouseActive={mouseActive}
                row={row}
                key={"row:" + idx}
                choosenColor={choosenColor}
                setMouseActive={setMouseActive}
                gridSize={gridSize}
                cellBordersOn={cellBordersOn}
              />
            ))}
          </tbody>
        </table>
        <ActionPanel
          image={image}
          setImage={setImage}
          choosenColor={choosenColor}
          setMouseActive={setMouseActive}
          cellBordersOn={cellBordersOn}
          setCellBordersOn={setCellBordersOn}
        />
      </div>
    );
  } else return null;
};

export default Grid;
