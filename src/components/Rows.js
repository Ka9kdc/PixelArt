import React from "react";
import Cells from "./Cells";

const Rows = props => {
    const {row, choosenColor, mouseActive} = props
    if(row.length){
         return (<tr>{row.map((cell) => <Cells key={"cell:"+cell.id} color={cell.color} choosenColor={choosenColor} mouseActive={mouseActive} />)}</tr>)
    } else return null
   
}

export default Rows