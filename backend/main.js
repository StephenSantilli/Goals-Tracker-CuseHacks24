var express = require("express"),
    app = express();
var fs = require('fs');
let path = require('path')
var port = 5500;

// app.use(express.static(__dirname + '/public'));


app.listen(port, "127.0.0.1");

app.post("/addGoal", function (request, response) {
    var request = request.query.body;
    console.log(request);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../hackathon.html"));

})

app.get('/*', (req, res) => {

    res.sendFile(path.join(__dirname, ".." + req.path));

})