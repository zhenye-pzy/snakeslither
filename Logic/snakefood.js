import { onSnake, GrowSnake } from './snake.js'
import { getRandomGridPosition } from './Grids.js'

let snakeFood = GetRandomFoodPos()
const growth_rate = 1;
let count = 0;

//Update the food
export function update() {
    
    if (onSnake(snakeFood)) {
        GrowSnake(growth_rate)
        snakeFood = GetRandomFoodPos()
        count ++
        document.getElementById('Score-update').innerHTML = count
     
    }  
    localStorage.setItem('Score', count)
}


//Draw it onto the gameBoard
export function draw(gameBoard) {
    const food = document.createElement('div')
    //Setting the x and y co-ordinate
    food.style.gridRowStart = snakeFood.y
    food.style.gridColumnStart = snakeFood.x
    food.classList.add('food')
    gameBoard.appendChild(food)
}

//Randomizing the position of the foods generated
function GetRandomFoodPos() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = getRandomGridPosition()
    }
    return newFoodPosition
}
