var fullDisplay = document.getElementById('full-display');
var miniDisplay = document.getElementById('mini-display');
var evalString = "";
var displayString = "";

setAllThings = (value) => {
    if (!(miniDisplay.value.includes(".") && value === ".") && !(miniDisplay.value === '0' && value === '0')) {
            evalString += value;
            displayString = value;

            if (value === '+' || value === '-' || value === '*' || value === '/' || value === '%' || value === '(' || value === ')') {
                miniDisplay.value = "";
            } else {
                miniDisplay.value += displayString;
            }
            fullDisplay.innerHTML = evalString;
    }
}

evaluation = () => {
    try {
        displayString = eval(evalString);
        evalString = displayString;
        fullDisplay.innerHTML = evalString;
        miniDisplay.value = displayString;
    } catch (err) {
        miniDisplay.value = "ERROR";
        fullDisplay.innerHTML = "0";
        setTimeout(() => {
            clearAllThing();
        }, 1000)
    }
}

clearAllThing = () => {
    evalString = "";
    displayString = "";
    fullDisplay.innerHTML = "0";
    miniDisplay.value = displayString;
}

keyBoardController = (e) => {
    if (e.keyCode === 46) {
        setAllThings(".");
    }
    else if (e.keyCode === 43) {
        setAllThings("+");
    }
    else if (e.keyCode === 45) {
        setAllThings("-");
    }
    else if (e.keyCode === 42) {
        setAllThings("*");
    }
    else if (e.keyCode === 47) {
        setAllThings("/");
    }
    else if (e.keyCode === 37) {
        setAllThings("%");
    }
    else if (e.keyCode === 40) {
        setAllThings("(");
    }
    else if (e.keyCode === 41) {
        setAllThings(")");
    }
    else if (e.keyCode >= 48 && e.keyCode <= 57) {
        setAllThings(e.keyCode - 48 + "");
    }
    else if (e.keyCode === 65 || e.keyCode === 97) {
        clearAllThing();
    }
    else if (e.keyCode === 13) {
        evaluation();
    }
}