let allBtn = document.querySelectorAll(".grid-item")
let output = document.querySelector(".display__bottom")
let allOutput = document.querySelector(".display__top")

let fillInput = (input) =>{
    if (output.innerHTML == 0) output.innerHTML=""
    output.innerHTML+=input
}

let backSpace = () =>{
    console.log("dsf");
    if (output.innerHTML != 0) 
        output.innerHTML = output.innerHTML.substring(0,output.innerHTML.length-1)
    if(output.innerHTML =="") output.innerHTML = 0
}

let clearBut = () => {
    output.innerHTML = 0
}

let moveOutput = (op) => {
    allOutput.innerHTML += (output.innerHTML+" "+op+" ")
    clearBut()
}

let press_add = () =>{
    moveOutput("+")
}
let press_div = (A, B) => A / B
let press_sub = (A, B) => A - B
let press_mult = (A, B) => A * B

//EventListener
allBtn.forEach((e)=>{
    e.addEventListener("mousedown",(event)=>{
        event.currentTarget.classList.toggle("grid-item__mousedown");
    })
})

allBtn.forEach((e)=>{
    e.addEventListener("mouseup",(event)=>{
        let El = event.currentTarget
        El.classList.toggle("grid-item__mousedown");
        let isNamber = false
        El.classList.forEach((e)=>{
            if(e == "namber"){
                isNamber = true
            }
        })
        if(isNamber){
            fillInput(El.innerText);
        }else{
            switch (El.innerText) {
                case '-':
                    console.log("-");
                    moveOutput("-")
                    break;
                case '*':
                    console.log("*");
                    moveOutput("*")
                    break;
                case '/':
                    console.log("/");
                    moveOutput("/")
                    break;
                case '+':
                    console.log("+");
                    moveOutput("+")
                    break;
                case 61:
                    console.log("=");
                    // =
                    break;        
        
                default:
                    break;
            }
        }
    })
})

document.addEventListener('keypress', (e) => {
    var keyCode = e.keyCode 
    if (keyCode >= 48 && keyCode <= 57) { 
        var number = String.fromCharCode(keyCode);
        fillInput(number);
    }
    switch (keyCode) {
        case 45:
            console.log("-");
            moveOutput("-")
            break;
        case 42:
            console.log("*");
            moveOutput("*")
            // *
            break;
        case 47:
            console.log("/");
            moveOutput("/")
            // /
            break;
        case 43:
            console.log("+");
            moveOutput("+")
            // +
            break;
        case 61:
            console.log("=");
            // =
            break;        

        default:
            break;
    }
})
document.addEventListener('keydown', (e) => {
    if(e.key == "Backspace"){
        backSpace()
    }
})
document.addEventListener('keyup', (e) => {
    if(e.keyCode == 13){
        console.log("Enter");
    }
})