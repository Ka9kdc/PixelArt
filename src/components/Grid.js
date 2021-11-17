import React, { useEffect, useState } from "react";
import { makeBoard } from "../utils";
import Rows from "./Rows";

const Grid = props => {
    const {gridSize, mouseActive, choosenColor} = props
    const [image, setImage] = useState([])
    const [painting, setPainting] = useState([])

    useEffect(() => {
        const newImage = makeBoard(gridSize)
        setImage(newImage)
    }, [gridSize])

    useEffect(() => {
        const newPainting = []
        for(let i = 0; i < gridSize; i++){
            newPainting.push(image.slice(i*gridSize, (i+1)*gridSize))
        }
        setPainting(newPainting)
    }, [image])


    if(image.length){

        return <table><tbody>{painting.map((row, idx) => <Rows image={image} setImage={setImage} row={row} key={"row:"+idx} choosenColor={choosenColor} mouseActive={mouseActive}/>)}</tbody></table>
    } else return null
}

export default Grid