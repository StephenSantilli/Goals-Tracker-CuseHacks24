const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);



let request = $.ajax({
    type: "GET",
    url: "/getGoals/" + urlParams.get("name"),
});

request.done((res) => {

    const listE = document.getElementById("list")


    let data = JSON.parse(res)

    let boxCount = 0;
    for (let i = 0; i < data.length; i++) {
        let g = data[i];

        let title = document.createElement("h2")
        title.innerHTML = g.goal;
        document.body.appendChild(title)

        let list = document.createElement("table")

        let titleRow = list.insertRow();
        titleRow.insertCell(0).innerHTML = "Task"
        titleRow.insertCell(1).innerHTML = "Due"
        titleRow.insertCell(2).innerHTML = "Difficulty"
        titleRow.insertCell(3).innerHTML = "Done"

        document.body.appendChild(list);

        for (let j = 0; j < g.tasks.length; j++) {

            let t = g.tasks[j]
            let row = list.insertRow();
            let taskCell = row.insertCell(0);
            let dueCell = row.insertCell(1);
            let difficultyCell = row.insertCell(2);
            let doneCell = row.insertCell(3);
            taskCell.innerHTML = t.task
            dueCell.innerHTML = t.date
            difficultyCell.innerHTML = t.difficulty
            let doneBox = document.createElement("input")
            doneBox.setAttribute("id", "doneBox" + (boxCount++))
            doneBox.setAttribute("type", "checkbox")
            doneCell.appendChild(doneBox)
            $("#doneBox" + (boxCount - 1)).prop("checked", t.done == "true")
            doneBox.setAttribute("onclick", "setDone('" + (urlParams.get("name")) + "/" + (g.goal) + "/" + t.task + "/" + (!doneBox.checked) + "')")

        }

    }

})

function setDone(path) {
    console.log(path)
    let req = $.ajax({
        type: "POST",
        url: "/setTaskDone/" + path,
        contentType: "application/json"
    });

}