export function makeBoard (gridSize){
    const grid = new Array(gridSize)
    for(let i = 1; i <= gridSize; i++){
        const row = new Array(gridSize)
        for(let j = 1; j <= gridSize; j++){
            row[j] = {
                id: j*i,
                color: "white"
            }
        }
        grid[i] = row
    }
    return grid
}