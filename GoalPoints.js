/* const buttons = document.getElementByClassName("cbut");


// looping through all ten buttons
for (let i = 0; i < buttons.length; i++ ){
    buttons[i].addEventListener("click", function(){
        const buttonValue = buttons[i].value;
    });
}

// assigning point values for button pushed
const points = buttonValue * 10; */




document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.getElementsByClassName("cbut");
    const dropdown = dropdowns[0];
    dropdown.addEventListener("change", function() {
        const selectedValue = dropdown.value;

    });
});
const points = selectedValue * 10