let express = require("express"),
    app = express();
let fs = require('fs');
let path = require('path')
let port = 5500;

// app.use(express.static(__dirname + '/public'));


app.listen(port, "127.0.0.1");

app.post("/addGoal", function (req, res) {
    req = req.query.body;
    
    let goal = {
        goal: req.goal,
        priority: 10
    }

    console.log(goal)

    res.code(200)
    res.close();

});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../hackathon.html"));

})

app.get('/*', (req, res) => {

    res.sendFile(path.join(__dirname, ".." + req.path));

})