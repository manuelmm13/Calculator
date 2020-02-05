let Memory = null;
let Memory2 = null;
let sumClicked = false;

function AccessValueButton (i) {
    let buttons = document.getElementsByTagName("button")
    return buttons[i].value
}

function clickSum () {
    sumClicked = true;
}

function handleClicks(){
     for (let i = 0; i < 10; i++) {
        let target = document.getElementById(i) 
         target.addEventListener("click", function(){Action(i)})
        }
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


function Action (i) {
    if (sumClicked == false) {
        if (Memory == null) {
            Memory = AccessValueButton(i).toString()
        } else {
            Memory = Memory + AccessValueButton(i).toString()
            console.log(Memory)
        } 
        printToScreen(Memory)
    } else {
        if (Memory2 == null) {
            Memory2 = AccessValueButton(i).toString()
        } else {
            Memory2 = Memory2 + AccessValueButton(i).toString()
            console.log(Memory2)
    }
    printToScreen(Memory2)
}
   
    
    
    console.log(Memory)
}

handleClicks();

