var getDisplay = document.getElementById("display");

function appendToDisplay(value){
    getDisplay.value += value;
}

function clearDisplay(){
    getDisplay.value = "";
}

function clearEntry(){
    getDisplay.value = getDisplay.value.slice(0, -1);
}

function calculate(){
    try{
        getDisplay.value = eval(getDisplay.value);
    }catch(error){
        getDisplay.value = "Error: " + error.message;
    }
}