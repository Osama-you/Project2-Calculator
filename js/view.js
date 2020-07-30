let allBtn = document.querySelectorAll(".grid-item")
let output = document.querySelector(".display__bottom")
let allOutput = document.querySelector(".display__top")
let backSpaceBtn = allBtn[16]
let isUpRe = false
let isError = false
let gridContainer = document.querySelector(".grid-container")

let fillInput = (input) =>{
    if(isUpRe || isError){
        clearBtn()
    }
    if (output.innerHTML == 0) output.innerHTML=""
    output.innerHTML+=input
}

let backSpace = () =>{
    if (output.innerHTML != 0) 
        output.innerHTML = output.innerHTML.substring(0,output.innerHTML.length-1)
    if(output.innerHTML =="") output.innerHTML = 0
}

let clearBtn = () => {
    allOutput.innerHTML = ""
    output.innerHTML = 0
    isUpRe = false
    isError = false
}

let moveOutput = (op) => {
    if(!isUpRe){
        allOutput.innerHTML += (output.innerHTML+" "+op+" ")
    }else{
        if(isError){
            clearBtn()
            isError = !isError
        }else{
            allOutput.innerHTML = output.innerHTML+" "+op+" "
            output.innerHTML = ""
        }
        isUpRe = !isUpRe
    }
    output.innerHTML = 0
}

let equleBtn = () => {
    if(!isUpRe){
        let re = equle(allOutput.innerText+" "+ output.innerText);
        moveOutput("=")
        if( re+"" =="NaN"  || re ==Infinity || re ==-Infinity){
            re = "Result_is_undefined"
            isError = true
        }
        isUpRe = true
        output.innerText = re
    }
}
let conv = (X) =>{
    let input = output.innerHTML
    let re = ""
    if(isError){
        clearBtn()
        return
    } 
    if(isUpRe){

        re = con(input,X)
        clearBtn()
        
    }else{
        if(allOutput.innerText == ""){
            re = con(input,X)
            
        }else{
            re = "Error"
        }

    }
    isUpRe = true
    isError = true
    output.innerHTML = re
}

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
        if(backSpaceBtn == event.currentTarget){
            backSpace()
        }
        if(isNamber){
            fillInput(El.innerText);
        }else{
            switch (El.innerText) {
                case '-':
                    moveOutput("-")
                    break;
                case '*':
                    moveOutput("*")
                    break;
                case '/':
                    moveOutput("/")
                    break;
                case '+':
                    moveOutput("+")
                    break;
                case "=":
                    equleBtn()
                    break; 
                case "Clear":
                    clearBtn()
                    break;    
                case "USD/ILS":
                    conv("USD/ILS")
                    break;   
                case "ILS/USD":
                    conv("ILS/USD")
                    break;   
                case "EUR/ILS":
                    conv("EUR/ILS")
                    break;   
                case "ILS/EUR":
                    conv("ILS/EUR")
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
            moveOutput("-")
            break;
        case 42:
            moveOutput("*")
            break;
        case 47:
            moveOutput("/")
            break;
        case 43:
            moveOutput("+")
            break;
        case 61:
            equleBtn()
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
        //Enter
        equleBtn()
    }
})