let express = require("express"),
    app = express();
let fs = require('fs');
let path = require('path')
let port = 5500;
let bodyParser = require('body-parser')

// app.use(express.static(__dirname + '/public'));
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

let goalsList = require('./goals.json')


app.listen(port, "127.0.0.1");

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../hackathon.html"));

})

app.use(express.json())
app.post("/addGoal", urlencodedParser, function (req, res) {

    req = req.body;
    let goal = {
        goal: req.goal,
        tasks: []
    }
    let task = {
        task: req.task,
        date: req.date,
        difficulty: req.difficulty
    }
    goal.tasks.push(task);
    console.log(req.name)
    console.log(req.goal)
    console.log(req.task)
    console.log(req.date)
    console.log(req.difficulty)
    if (!goalsList.Users.hasOwnProperty(req.name))
        goalsList.Users[req.name] = []

    let found = false;
    for (let i = 0; i < goalsList.Users[req.name].length; i++) {
        if (goalsList.Users[req.name][i].goal === req.goal) {
            goalsList.Users[req.name][i].tasks.push(task);
            found = true;
            break;
        }
    }

    if (!found)
        (goalsList.Users[req.name]).push(goal);


    fs.writeFile("./backend/goals.json", JSON.stringify(goalsList), () => {

        console.log("file written")

    })
    res.send(200)

});

app.get('/getGoals/:name', (req, res) => {

    
    let name = req.params.name

    console.log(JSON.stringify(goalsList.Users[name]))

    res.send(JSON.stringify(goalsList.Users[name]))

})



app.get('/goals', (req, res) => {

    res.sendFile(path.join(__dirname, "../goalsList.html"));

})

app.get('/*', (req, res) => {

    res.sendFile(path.join(__dirname, ".." + req.path));

})