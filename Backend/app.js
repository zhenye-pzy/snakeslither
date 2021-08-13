const express = require('express');
const cors = require('cors');
const { customAlphabet } = require('nanoid');
const Datastore = require('nedb')
const nanoid = customAlphabet('123456789', 5)

const database = new Datastore('database.db')
database.loadDatabase();

// Creating the app and enabling cors
const app = express();
app.use(cors());
var GameId

app.post('/', function (req, res) {
    GameId = nanoid();
    res.json({
        Game_id: GameId,
    })
})

app.post('/Gamestats', function (req, res) {
    var Names = req.query.Names
    var Score = req.query.Score

    return res.status(200).json({
        Player: Names,
        Score: Score
    })
})

// app.get('/StartGame', function (req, res) {
//     if (GameId === null) {
//         return res.status(400).json
//     } else {
//         return res.status(200).json
//     }
// })

// Start listening to port 8000
app.listen(8800, function () {
    console.log('Snake Game listening on Port 8800');
});