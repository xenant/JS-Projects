let num1 = 8;
let num2 = 2; 


document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

//code below can be cleaned up better by turning the document.getelement into a variable first!
function add()
{
 let final = num1 + num2 
 document.getElementById("sum-el").textContent = "Sum: " +final
}

function subtract()
{
 let final = num1 - num2 
 document.getElementById("sum-el").textContent = "Sum: " +final
}
function multiply()
{
 let final = num1*num2 
 document.getElementById("sum-el").textContent = "Sum: " +final
}

function divide()
{
 let final = num1/num2 
 document.getElementById("sum-el").textContent = "Sum: " +final
}