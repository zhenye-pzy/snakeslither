import { getInputDirection } from "./input.js";

//Drawing of snake body using x and y
const snakeBody = [{ x: 11, y: 11 }]
let AddonSegments = 0


export function update() {
    AdditionalSegments()
    const inputDirection = getInputDirection()
    //Loop through the whole snake body except for the last piece of block
    //i is gonna be equal to the 2nd - last element
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        // i + 1 = last element
        //Create a duplicate of the snake at i and set it to i + 1 position, so that everything moves forward by 1 position
        snakeBody[i + 1] = { ...snakeBody[i] }
    }


    //Update the snake head based on the input direction
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

//Draw it onto the gameBoard
export function draw(gameBoard) {
    //Loop through each piece of the snake
    snakeBody.forEach(segment => {

        //This will take place in the game board at a specific co-ordinate
        const snakeElement = document.createElement('div')
        //Setting the x and y co-ordinate
        snakeElement.style.gridRowStart = segment.y
        snakeElement.style.gridColumnStart = segment.x

        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

export function GrowSnake(amount) {
    AddonSegments += amount;
}

//Determine if the 'position' is on the snake or not
//if any part of the body is equal to the position passed in, onSnake will return true
export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => {
        if (ignoreHead && index == 0) return false
        return equalPositions(segment, position)
    })
}

export function getSnakeHead() {
    return snakeBody[0]
}

//Checking to see if the snake head is on any part of the body
//Set ignoreHead to true so that it wouldn't compare whether the head of the
//snake is same as the head of the snake which will return true
export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

//Take in new segments and add them onto the bottom of the snake body
function AdditionalSegments() {
    for (let i = 0; i < AddonSegments; i++) {
        //Taking the last element of the snake and duplicating it onto the end of the snake
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
       
    }
    //To stop it from adding elements continuously, only add on when we tell it to add on
    AddonSegments = 0;
}




