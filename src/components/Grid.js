import React, { useEffect, useState } from "react";
import { makeBoard } from "../utils";
import Rows from "./Rows";

const Grid = props => {
    const {gridSize, mouseActive, choosenColor} = props
    const [image, setImage] = useState([])

    useEffect(() => {
        const newImage = makeBoard(gridSize)
        setImage(newImage)
    }, [])

    if(image.length){

        return <table>{image.map((row, idx) => <Rows row={row} key={"row"+idx} choosenColor={choosenColor} mouseActive={mouseActive}/>)}</table>
    } else return null
}

export default Grid