const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const list = document.getElementById("list")


let request = $.ajax({
    type: "GET",
    url: "/getGoals/" + urlParams.get("name"),
});

request.done((res) => {

    let data = JSON.parse(res)

    for (let i = 0; i < data.length; i++) {
        let g = data[i];

        let row = list.insertRow();

        let goalCell = row.insertCell(0);
        goalCell.innerHTML = g.goal
        for (let j = 0; j < g.tasks.length; j++) {

            let t = g.tasks[j]
            let row = list.insertRow();
            row.insertCell(0)
            let taskCell = row.insertCell(1);
            let dueCell = row.insertCell(2);
            let difficultyCell = row.insertCell(3);
            let doneCell = row.insertCell(4);
            taskCell.innerHTML = t.task
            dueCell.innerHTML = t.date
            difficultyCell.innerHTML = t.difficulty
            let doneBox = document.createElement("input")
            doneBox.setAttribute("id", "doneBox" + j)
            doneBox.setAttribute("type", "checkbox")
            console.log(t.done)
            doneCell.appendChild(doneBox)
            $("#doneBox" + j).prop("checked", t.done == "false")

        }

    }

})