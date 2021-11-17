import React from "react";
import Cells from "./Cells";

const Rows = props => {
    const {row, choosenColor, mouseActive, image, setImage} = props
    if(row.length){
         return (<tr>{row.map((cell) => <Cells image={image} id={cell.id} setImage={setImage} key={"cell:"+cell.id} color={cell.color} choosenColor={choosenColor} mouseActive={mouseActive} />)}</tr>)
    } else return null
   
}

export default Rows