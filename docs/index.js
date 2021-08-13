let host = 'http://localhost:8800'
document.addEventListener('DOMContentLoaded', function () {
    const createIDButton = document.getElementById('generate-session');
    const startButton = document.getElementById('start-button')

    var GameId


    createIDButton.addEventListener('click', function () {
        fetch(`${host}`, { method: 'POST' })
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                GameId = json.Game_id;
                sessionStorage.setItem('GameId', `${GameId}`);
                const DisplayIdField = document.getElementById('DisplayID');
                DisplayIdField.innerHTML = GameId;

            });
    }); //createIDButton


    // startButton.addEventListener('click', function () {
    //     const inputSession = document.getElementById('session-id-input')
    //     var InputGame = inputSession.value
        // fetch(`${host}/StartGame?session=${GameId}`,
        //     {
        //         method: "GET"
        //     })
        //     .then((response) => {
        //         if (response.status === 400) {
        //             alert("Error!")
        //         } else {
        //             // return response.json()
        //             window.location.href = "./Snake.html"
        //         }
        //     })
        // .then((json) => {

        //     // Gameid = inputSession.value;
        //     window.location.href = "./Snake.html"
        //     alert("Game started!")
        // })

    // })//start-button



    startButton.addEventListener('click', function () {
        const inputSession = document.getElementById('session-id-input')
        var Name = document.getElementById("Name").value
        localStorage.setItem("Names", Name)

        if (GameId == inputSession.value && Name !== "") {
            window.location = "./Snake.html"
        } else if (Name === "") {
            alert("Please enter your name")
        }
        else if (GameId === undefined) {
            alert('Session Id not detected')
        } else if (inputSession.value === "") {
            alert('Please fill in the session Id before proceeding')
        }
        else if (GameId !== inputSession.value)
            alert('Incorrect Session ID')
    })//start-button


})//DOMContentLoaded







//Original code
// document.addEventListener('DOMContentLoaded', function () {
//     const createIDButton = document.getElementById('generate-session');
//     var sessionId

//     createIDButton.addEventListener('click', function () {
//         fetch('http://localhost:8000', { method: 'POST' })

//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (json) {
//                 sessionId = json.session_id;
//                 const DisplayIdField = document.getElementById('DisplayID');
//                 DisplayIdField.innerHTML = sessionId;

//             });
//     }); //createIDButton



//     const startButton = document.getElementById('start-button')
//     startButton.addEventListener('click', function () {
//         const inputSession = document.getElementById('session-id-input')
//         var Name = document.getElementById("Name").value
//         localStorage.setItem("Names", Name)

//         if (sessionId == inputSession.value && Name !== "") {
//             window.location = "./Snake.html"
//         } else if (Name === "") {
//             alert("Please enter your name")
//         }
//           else if (sessionId === undefined) {
//             alert('Session Id not detected')
//         } else if (inputSession.value === "") {
//             alert('Please fill in the session Id before proceeding')
//         }
//           else if (sessionId !== inputSession.value)
//             alert('Incorrect Session ID')
//     })//start-button




// })//DOMContentLoaded