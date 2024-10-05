function storeInput(difficulty) {


    // Get the input elements
    const nameInput = document.getElementById("name");
    const goalInput = document.getElementById("goal");
    const taskInput = document.getElementById("task");
    const dateInput = document.getElementById("Due");

    // Get the values of the input elements
    let name = nameInput.value;
    let goal = goalInput.value;
    let task = taskInput.value;
    let date = dateInput.value;

    $.ajax({
        type: "POST",
        url: "/addGoal",
        contentType: "application/json",
        data: JSON.stringify({
            "name": name,
            "goal": goal,
            "task": task,
            "date": date,
            "difficulty": difficulty
        })
    });




}

function showGoals() {

    window.location = "./goals"

}