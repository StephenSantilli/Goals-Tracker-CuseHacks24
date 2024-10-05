 function storeInput() {
    // Initialize an empty array
    const inputArray = [];
    
    // Get the input elements
    const input1 = document.getElementById("fname");
    const input2 = document.getElementById("lname");
    const input3 = document.getElementById("maingoal");
  
    // Get the values of the input elements
    const value1 = fname.value;
    const value2 = lname.value;
    const value3 = maingoal.value;
    
    // Add the values to the array
    inputArray.push(value1, value2, value3);
    
    // Print the array to the console
    console.log(inputArray);

  }
