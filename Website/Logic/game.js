import { update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from './snake.js';
import { update as updateFood, draw as drawFood } from './snakefood.js';
import { outsideGrid } from './Grids.js'


// let host = 'http://localhost:8800'
//RenderTime starts from 0
let lastRenderTime = 0;
let GameOver = false
const gameBoard = document.getElementById('game-board')

//Number of times the snake moves/sec
var SNAKE_SPEED = 10;

//Displaying of Snake Speed on front end
var DisplaySpeed = document.getElementById("Game-Speed")
DisplaySpeed.innerHTML = SNAKE_SPEED;

//Displaying of player name on front end
document.getElementById("Name-Input").innerHTML = localStorage.getItem("Names")

// Button to update speed of game
var UpdatedSpeed = document.getElementById("Game-Speed-Input")
const UpdateSpeedBtn = document.getElementById('Speed-InputBtn')
UpdateSpeedBtn.addEventListener('click', function () {
    SNAKE_SPEED = UpdatedSpeed.value
    DisplaySpeed.innerHTML = SNAKE_SPEED;
})


// GAME LOOP
function main(currentTime) {
    if (GameOver) {
        if (confirm('You lost!')) {
            window.location = "./Snake.html"
        }
        return
    }
    //requesting for the next frame to be carried out
    window.requestAnimationFrame(main)
    const SecondSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (SecondSinceLastRender < 1 / SNAKE_SPEED) return

    //Updating of lastRenderTime
    lastRenderTime = currentTime

    update()
    draw()
}

//Start our first loop 
window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    //Remove all the previous pieces from the snake
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

//Checking for death
function checkDeath() {
    // Player loses when the snake head is outside the grid or
    // when the snake head runs into it's own body
    GameOver = outsideGrid(getSnakeHead()) || snakeIntersection()

}

// var Names = localStorage.getItem('Names');
// var Score = localStorage.getItem('Score');

// fetch(`${host}/Gamestats?player=${Names}&Score=${Score}`,
//     { method: "POST" })
//     .then((response) => {
//         return response.json()
//     }).then((json) => {
//         var html = `
//         <div class="card" style="direction: flex; opacity: 85%">

//             <div class="card-header" style="background-color: #F77E01; height: 40px; border-top-left-radius: 12px; border-top-right-radius: 12px;">
//                 <p class="card-text" style="padding: 0.8em; padding-left: 1.5em">#${Names}</p>
//             </div>

//             <div class="card-body" style="background-color: white; padding: 1em; 
//             overflow: hidden; text-overflow: ellipsis; max-width: 215px; min-height: 120px; max-height: 120px; word-break: break-all;
//             border-bottom-left-radius: 12px; border-bottom-right-radius: 12px;">

//                 <p class="card-text" style="color: black; overflow: hidden; max-height: 55px; margin-bottom: 1.5em">${Score}</p>
                
//                 <div style="min-height: 20px;">
//                     <a href="owner.html" style="    
//                     padding: 7px 12px;
//                     text-decoration: none;
//                     color: white;
//                     background-color: #BC80F7;
//                     border-radius: 0.5em;
//                     border-top: 4px solid #BC80F7;
//                     border-left: 4px solid #BC80F7;
//                     border-bottom: 4px solid #744a9e;
//                     border-right: 4px solid #744a9e;">View</a>
//                 </div>

//             </div>
//         </div>
//             `;
//             $('#stats-display').append(html);
//     })
// })