import React from "react";


const Cells = props => {
    const {color, choosenColor, mouseActive} = props
    function handleColorChange (event){
        console.log(color, event.target)
    }
    return <td onClick={handleColorChange} onMouseOver={mouseActive ? handleColorChange : null} className="cell" >{props.color}</td>
}

export default Cells