const buttons = document.getElementByClassName("cbut");

// looping through all ten buttons
for (let i = 0; i < buttons.length; i++ ){
    buttons[i].addEventListener("click", function(){
        const buttonValue = buttons[i].value;
    });
}

// assigning point values for button pushed
const points = buttonValue * 10;