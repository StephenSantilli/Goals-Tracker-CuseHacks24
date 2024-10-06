/* const buttons = document.getElementByClassName("cbut");


// looping through all ten buttons
for (let i = 0; i < buttons.length; i++ ){
    buttons[i].addEventListener("click", function(){
        const buttonValue = buttons[i].value;
    });
}

// assigning point values for button pushed
const points = buttonValue * 10; */


let totalPoints = 0;

document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.getElementsByClassName("cbut");
    const dropdown = dropdowns[0];
    dropdown.addEventListener("change", function() {
        const selectedValue = parseInt(dropdown.value);
        let points = 0;
        totalPoints += selectedValue * 10;

        console.log("Total Points: ", totalPoints)

        if (totalPointDisplay){
            return totalPointDisplay.textContent = "Total Points: " + totalPoints;
        }
        
    });
    
});



// need to add all points from all tasks together

for(let i = 0; i < )