let Memory = null;
let Memory2 = null;
let sumClicked = false;


function clickSum () {
    sumClicked = true;
}

function handleClicks(){
    const buttonsPanel = document.querySelector("#calculator-buttons");
    buttonsPanel.addEventListener("click", function(event){
        const btn = event.target;
        if (isNaN(btn.value)) { return false; }
        Action(btn.value);
    });

    let sumbutton = document.getElementsByClassName("btn")[10]
    sumbutton.addEventListener("click", function(){clickSum()})

    let acbutton = document.getElementsByClassName("btn")[14]
    acbutton.addEventListener("click", function(){clearScreen()})
}

function clearScreen() {
    let screen = document.getElementById("screen")
    screen.value = 0
    Memory = null
    Memory2 = null
}

function printToScreen (number) {
    let screen = document.getElementById("screen")
    screen.value = number
}


function Action (value) {

    if (sumClicked == false) {
        if (Memory == null) {
            Memory = value
        } else {
            Memory = Memory + value
            console.log(Memory)
        } 
        printToScreen(Memory)
    } else {
        if (Memory2 == null) {
            Memory2 = value
        } else {
            Memory2 = Memory2 + value
            console.log(Memory2)
    }
    printToScreen(Memory2)
}
   
    
    
    console.log(Memory)
}

handleClicks();

