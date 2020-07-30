// js file for Project2-Calculator

//Basic operations
let add = (A, B) => A + B
let div = (A, B) => A / B
let sub = (A, B) => A - B
let mult = (A, B) => A * B

// take to input and op then return the result as obj whit message
let operation = (opr,A,B) => {
    let result = Infinity

    // Check if the input is correct
    if (isNaN(A)||isNaN(B)){
        return result
    }
    // Convert to number if it string
    A = parseFloat(A)
    B = parseFloat(B)

    // Select the operation
    switch(opr) {
        case "+":
            result = add(A, B)
            break
        case "/":
            result = div(A, B)
            break
        case "-":
            result = sub(A, B)
            break
        case "*":
            result = mult(A, B)
            break
        default:
            return result
    }
    return result
}

// take the equation then return the result
let equle = (input) => {
    // remove the space
    input=input.replace(" ","")

    // -3627 + 3 
    if (input[0] == "-") input = 0 + input

    //array of all operation
    let ops = ["+","-","*","/"]

    // number array
    let No = []

    // operation array
    let Op = []

    while(true){
        let ind = -1
        let i = -1

        let arrayOfInput = input.split("")
        // find the operations 
        for(let a = 0 ; a < arrayOfInput.length; a++){
            let c = arrayOfInput[a]
            if(ind == -1){
                ind = ops.indexOf(c)
                i++
            }
            if(ind != -1) break 
        }
        // if there is no operation, put all the input in No array
        // if not, put just the number
        (ind == -1)?No.push(input): No.push(input.substring(0,i))

        //if there is more than one number in the No array
        if(No.length > 2){
            let op_temp = Op[Op.length-1]
            // Check if "*" or "/"
            if(["*","/"].indexOf(op_temp) != -1){
                let opr = Op.pop()
                let B = No.pop() 
                let A = No.pop()
                No.push(operation(opr,A,B))
            }
        }
        // Close the loop when the numbers and operations have been distributed
        if(ind == -1) break

        // add the operations to Op array
        Op.push(input.substring(i,i+1))
        // remove what we done from the input
        input=input.substring(i+1,input.lenght)
    }
    // get the final result
    let re;
    if(Op.length == 0){
        re = No.pop()
    }else{
        re = No[0]
        No.splice(0, 1);
        while(Op.length > 0){
            re = operation(Op[0],re,No[0])
            Op.splice(0, 1);
            No.splice(0, 1);
        }
    }
    return re
}

// input = "32+   3*34-34+2"
// console.log(equle(input))
