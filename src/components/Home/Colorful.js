import React from "react";

const Colorful = () => {
  const red =
    "rgba(255,0,0,.2)-rgba(255,0,0,.2)-rgba(255,0,0,.2)-rgba(255,0,0,.2)-rgba(255,0,0,.2)-rgba(255,0,0,.2)-rgba(255,0,0,.2)-rgba(255,0,0,.2)-rgba(255,0,0,.2)-rgba(255,0,0,.2)-rgba(255,0,0,.2)--rgba(255,0,0,.2)-rgba(255,0,0,.2)--rgba(255,0,0,.2)--rgba(255,0,0,.2)--rgba(255,0,0,.2)-rgba(255,0,0,.2)--rgba(255,0,0,.2)--rgba(255,0,0,.2)".split(
      "-"
    );
  const orange =
    "rgba(255,225,0,.2)-rgba(255,225,0,.2)-rgba(255,225,0,.2)-rgba(255,225,0,.2)-rgba(255,225,0,.2)-rgba(255,225,0,.2)-rgba(255,225,0,.2)-rgba(255,225,0,.2)-rgba(255,225,0,.2)-rgba(255,225,0,.2)-rgba(255,225,0,.2)-rgba(255,225,0,.2)--rgba(255,225,0,.2)-rgba(255,225,0,.2)-rgba(255,225,0,.2)---rgba(255,225,0,.2)-rgba(255,225,0,.2)--rgba(255,225,0,.2)--rgba(255,225,0,.2)-".split(
      "-"
    );
  const green =
    "rgba(0,128,0,.2)-rgba(0,128,0,.2)-rgba(0,128,0,.2)-rgba(0,128,0,.2)-rgba(0,128,0,.2)-rgba(0,128,0,.2)-rgba(0,128,0,.2)-rgba(0,128,0,.2)-rgba(0,128,0,.2)-rgba(0,128,0,.2)-rgba(0,128,0,.2)--rgba(0,128,0,.2)--rgba(0,128,0,.2)--rgba(0,128,0,.2)---rgba(0,128,0,.2)-rgba(0,128,0,.2)--rgba(0,128,0,.2)--rgba(0,128,0,.2)".split(
      "-"
    );
  const blue =
    "rgba(0,0,255,.2)-rgba(0,0,255,.2)-rgba(0,0,255,.2)-rgba(0,0,255,.2)-rgba(0,0,255,.2)-rgba(0,0,255,.2)-rgba(0,0,255,.2)-rgba(0,0,255,.2)-rgba(0,0,255,.2)-rgba(0,0,255,.2)--rgba(0,0,255,.2)--rgba(0,0,255,.2)--rgba(0,0,255,.2)--rgba(0,0,255,.2)-rgba(0,0,255,.2)--rgba(0,0,255,.2)--rgba(0,0,255,.2)-rgba(0,0,255,.2)-".split(
      "-"
    );
  const purple =
    "rgba(128,0,128,.2)-rgba(128,0,128,.2)-rgba(128,0,128,.2)-rgba(128,0,128,.2)-rgba(128,0,128,.2)-rgba(128,0,128,.2)-rgba(128,0,128,.2)-rgba(128,0,128,.2)-rgba(128,0,128,.2)-rgba(128,0,128,.2)-rgba(128,0,128,.2)--rgba(128,0,128,.2)--rgba(128,0,128,.2)-rgba(128,0,128,.2)-rgba(128,0,128,.2)--rgba(128,0,128,.2)-rgba(128,0,128,.2)--rgba(128,0,128,.2)---rgba(128,0,128,.2)".split(
      "-"
    );
  const pink =
    "rgba(255,0,255,.2)-rgba(255,0,255,.2)-rgba(255,0,255,.2)-rgba(255,0,255,.2)-rgba(255,0,255,.2)-rgba(255,0,255,.2)-rgba(255,0,255,.2)-rgba(255,0,255,.2)-rgba(255,0,255,.2)-rgba(255,0,255,.2)-rgba(255,0,255,.2)-rgba(255,0,255,.2)--rgba(255,0,255,.2)-rgba(255,0,255,.2)-rgba(255,0,255,.2)--rgba(255,0,255,.2)-rgba(255,0,255,.2)--rgba(255,0,255,.2)--rgba(255,0,255,.2)-rgba(255,0,255,.2)".split(
      "-"
    );

  return (
    <div className="colorful_grid">
      {red.map((color, idx) => {
        return (
          <div
            key={`red:${idx}`}
            className="colorful_cell"
            style={{ backgroundColor: color }}
          ></div>
        );
      })}
      {orange.map((color, idx) => {
        return (
          <div
            key={`orange:${idx}`}
            className="colorful_cell"
            style={{ backgroundColor: color }}
          ></div>
        );
      })}
      {green.map((color, idx) => {
        return (
          <div
            key={`green:${idx}`}
            className="colorful_cell"
            style={{ backgroundColor: color }}
          ></div>
        );
      })}
      {blue.map((color, idx) => {
        return (
          <div
            key={`blue:${idx}`}
            className="colorful_cell"
            style={{ backgroundColor: color }}
          ></div>
        );
      })}
      {purple.map((color, idx) => {
        return (
          <div
            key={`purple:${idx}`}
            className="colorful_cell"
            style={{ backgroundColor: color }}
          ></div>
        );
      })}
      {pink.map((color, idx) => {
        return (
          <div
            key={`pink:${idx}`}
            className="colorful_cell"
            style={{ backgroundColor: color }}
          ></div>
        );
      })}
    </div>
  );
};

export default Colorful;
