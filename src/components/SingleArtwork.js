import React, { useEffect, useState } from "react";

const SingleArtwork = (props) => {
  const { name, id, username, borders, image_array } = props;
  const [cellsArray, setCellsArray] = useState([]);

  useEffect(() => {
    if (image_array && image_array.length) {
      console.log(image_array);
      const newCells = image_array.split("-");
      const count = Math.sqrt(newCells.length);
      let newTable = new Array(count);
      for (let i = 0; i < count; i++) {
        newTable[i] = newCells.slice(i * count, (i + 1) * count);
      }
      setCellsArray(newTable);
    }
  }, [image_array]);

  return (
    <div className="gallery">
      <table>
        <tbody>
          {cellsArray.map((row, idx) => {
            return (
              <tr key={`${id}:row-${idx}`}>
                {row.map((cell, cellIdx) => {
                  return (
                    <td
                      key={`${id}:row-${idx}:cell${(idx + 1) * cellIdx}`}
                      className={borders ? "board" : ""}
                      style={{
                        backgroundColor: cell,
                        "--grid-size": row.length,
                      }}
                    ></td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <h2 className="image_title">
        {name} {username ? `by ${username}` : null}
      </h2>
    </div>
  );
};

export default SingleArtwork;
