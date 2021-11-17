import React, { useState } from "react";

const Pallette = props => {
    const {setChoosenColor, choosenColor} = props
    const [colorOptions, setColorOptions] = useState(["red", "yellow", "orange", "green", "blue", "purple", "pink", "black", "white"])
    return <div className="pallette">
        {colorOptions.map(col => <div key={col} className={col === choosenColor ? "cell active" : "cell"} style={{"backgroundColor": col}} onClick={() => setChoosenColor(col)}>{col}</div>)}
    </div>
}

export default Pallette