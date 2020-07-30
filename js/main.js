// js file for Project2-Calculator

//Basic operations
let add = (A, B) => A + B
let div = (A, B) => A / B
let sub = (A, B) => A - B
let mult = (A, B) => A * B

// take to input and op then return the result as obj whit message
let operation = (opr,A,B) => {
    let data = {
      result: NaN,
      mes: ""
    }
    // Check if the input is correct
    if (isNaN(A)||isNaN(B)){
      data.mes = "The input is wrong" 
      return data
    }
    // Convert to number if it string
    A = parseFloat(A)
    B = parseFloat(B)

    // Select the operation
    switch(opr) {
      case "+":
        data.result = add(A, B)
        break
      case "/":
        data.result = div(A, B)
        break
      case "-":
        data.result = sub(A, B)
        break
      case "*":
        data.result = mult(A, B)
        break
      default:
        data.mes="The operation is wrong"
    }
    return data
  }