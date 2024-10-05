let express = require("express"),
    app = express();
let fs = require('fs');
let path = require('path')
let port = 5500;
let bodyParser = require('body-parser')

// app.use(express.static(__dirname + '/public'));
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.listen(port, "127.0.0.1");

app.post("/addGoal", urlencodedParser, function (req, res) {
    console.log(req)
    req = req.body;
    let goal = {
        name: req.name,
        goal: req.goal,
        priority: 10
    }

    console.log(goal)

    res.send(200)

});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../hackathon.html"));

})

app.get('/*', (req, res) => {

    res.sendFile(path.join(__dirname, ".." + req.path));

})