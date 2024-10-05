function storeInput() {


    // Get the input elements
    const nameInput = document.getElementById("name");
    const goalInput = document.getElementById("goal");


    // Get the values of the input elements
    let name = nameInput.value;
    let goal = goalInput.value;

    $.ajax({
        type: "POST",
        url: "/addGoal",
        contentType: "application/json",
        data: JSON.stringify({
            "name": name,
            "goal": goal
        })
    });




}

function showGoals() {

    window.location = "./goals"

}