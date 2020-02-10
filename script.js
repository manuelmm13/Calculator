
function handleClickSum (state) {
    state.sumClicked = true;
}

function init(state){
    const buttonsPanel = document.querySelector("#calculator-buttons");
    buttonsPanel.addEventListener("click", function(event){
        const btn = event.target;
        if (isNaN(btn.value)) { return false; }
        updateMemory(state, btn.value);
        renderScreen(state)
    });

    let sumbutton = document.getElementsByClassName("btn")[10]
    sumbutton.addEventListener("click", () => handleClickSum(state))

    let acbutton = document.getElementsByClassName("btn")[14]
    acbutton.addEventListener("click", function(){
        resetMemory(state);
        renderScreen(state)
    })

    renderScreen(state)
}

function resetMemory(state) {
    state.Memory = null
    state.Memory2 = null
}

function renderScreen (state) {
    let screen = document.getElementById("screen")
    if (state.sumClicked == false) {
        screen.value = state.Memory
    } else {
        screen.value = state.Memory2
    }
}


function updateMemory (state, value) {
    if (state.sumClicked == false) {
        if (state.Memory == null) {
            state.Memory = value
        } else {
            state.Memory = state.Memory + value
        } 
    } else {
        if (state.Memory2 == null) {
            state.Memory2 = value
        } else {
            state.Memory2 = state.Memory2 + value
        }
    }
}

init({
    Memory: null,
    Memory2: null,
    sumClicked: false
});
