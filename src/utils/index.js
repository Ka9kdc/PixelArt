export function makeBoard (gridSize){
    const grid = []
    for(let i = 0; i < Math.pow(gridSize, 2); i++){
       grid.push({
                id: i,
                color: ""
            }
       )
    }
    return grid
}
