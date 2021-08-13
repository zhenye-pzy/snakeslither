let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

//Modifying of input direction 
window.addEventListener('keydown', event => {
    switch (event.key) {
        //Positive 1 will make the snake move down, -1 will make the snake move up
        //Positive 1 will make the snake move right, -1 will make the snake move left
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break;
            inputDirection = { x: 0, y: -1 }
            break

        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break;
            inputDirection = { x: 0, y: 1 }
            break

        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break;
            inputDirection = { x: -1, y: 0 }
            break

        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break;
            inputDirection = { x: 1, y: 0 }
            break
    }
})

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}