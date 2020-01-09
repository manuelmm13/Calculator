// function to feed tag value into the screen element

function showDigit(){
    let screen = document.getElementsByClassName(screen)
    let y = document.getElementsByTagName("button").value

    screen = screen.setAttribute("value", y)

    return screen
}


var output = document.querySelector(".btn")
const input = document.getElementsByTagName("button").value

function showDigit(){
    return input === output
}
console.log(showDigit)

