import React from "react";
import { makeBoard } from "../utils";

const Cells = (props) => {
	const { color, choosenColor, setMouseActive, mouseActive, id, image, setImage } = props;
	function handleColorChange(event) {
        event.preventDefault()
		let newImage = makeBoard(Math.sqrt(image.length));
		image[id].color = choosenColor;
		image.forEach((el, idx) => {
			if (el.color !== "") newImage[idx].color = el.color;
		});
		setImage(newImage);
	}
	return (
		<td
			onMouseDown={(event) => {handleColorChange(event); setMouseActive(true);} }
            onMouseOver={(event) => mouseActive ? handleColorChange(event) : null}
			onMouseUp={() => setMouseActive(false)}
			className="cell"
			style={{ backgroundColor: color }}
		>
			{props.color}
		</td>
	);
};

export default Cells;
