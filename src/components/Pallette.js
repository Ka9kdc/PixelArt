import React, { useState } from "react";
import AddNewColor from "./AddNewColor";

const Pallette = props => {
    const {setChoosenColor, choosenColor} = props
    const [colorOptions, setColorOptions] = useState(["red", "yellow", "orange", "green", "blue", "purple", "pink", "black", "white"])
    const [addCol, setAdd] = useState(false)
    return <div className="pallette">
        {colorOptions.map(col => <div key={col} className={col === choosenColor ? "cell active" : "cell"} style={{"backgroundColor": col}} onClick={() => setChoosenColor(col)}>{col}</div>)}
        {addCol ? <AddNewColor colorOptions={colorOptions} setColorOptions={setColorOptions} setChoosenColor={setChoosenColor} setAdd={setAdd} /> : <button type="button" onClick={(event) => {event.preventDefault(); setAdd(true)}}>Add A Color</button>}
    </div>
}

export default Pallette