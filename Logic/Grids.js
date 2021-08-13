//Size of the Grid
const GRID_SIZE = 21;

export function getRandomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1
    }
}

//Return true if anywhere outside of grid, otherwise will return false
export function outsideGrid(position) {

    //Checking to see if the 'position' we have passed in 
    //Is greater than our grid size (21) or lesser than our min grid size (1)
    return (
        position.x < 1 || position.x > GRID_SIZE ||
        position.y < 1 || position.y > GRID_SIZE
    )
}