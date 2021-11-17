import React from "react";
import { makeBoard } from "../utils";


const Cells = props => {
    const {color, choosenColor, mouseActive, id, image, setImage} = props
    function handleColorChange (event){
       let newImage = makeBoard(Math.sqrt(image.length))
       image[id].color = choosenColor
       image.forEach((el, idx) => {
           if(el.color !== "white") newImage[idx].color = el.color
       })
       setImage(newImage)
    }
    return <td onClick={handleColorChange} onMouseMoveCapture={() => mouseActive ? handleColorChange() : console.log(id)} className="cell" style={{"backgroundColor": color}} >{props.color}</td>
}

export default Cells