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

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../hackathon.html"));

})

app.use(express.json())
app.post("/addGoal", urlencodedParser, function (req, res) {

    let goalsList = require('./goals.json')

    req = req.body;
    let goal = {
        goal: req.goal,
        tasks: []
    }
    let task = {
        task: req.task,
        date: req.date,
        difficulty: req.difficulty,
        done: false
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


let goalsList = require('./goals.json')

    let name = req.params.name

    console.log(JSON.stringify(goalsList.Users[name]))

    res.send(JSON.stringify(goalsList.Users[name]))

})

app.post('/setTaskDone/:name/:goal/:task/:done', (req, res) => {

    let goalsList = require('./goals.json')


    let name = req.params.name
    let goal = req.params.goal
    let task = req.params.task
    let done = req.params.done
    console.log("Name: " + name);
    console.log("Goal: " + goal);
    console.log("Task: " + task);
    console.log("Done: " + done);

    console.log("settaskdone")
    for (let i = 0; i < goalsList.Users[name].length; i++) {
        if (goalsList.Users[name][i].goal === goal) {

            for (let j = 0; j < goalsList.Users[name].length; j++) {
                if (goalsList.Users[name][i].tasks[j].task === task) {
                    console.log("Setting: " + done)
                    goalsList.Users[name][i].tasks[j].done = done;
                    console.log(goalsList.Users[name][i].tasks[j].done)
                    break;
                }
            }

            // break;
        }
    }

    fs.writeFile("./backend/goals.json", JSON.stringify(goalsList), () => {

        console.log("file written")

        res.sendStatus(200)

    })

})

app.get('/goals', (req, res) => {

    res.sendFile(path.join(__dirname, "../goalsList.html"));

})

app.get('/*', (req, res) => {

    res.sendFile(path.join(__dirname, ".." + req.path));

})