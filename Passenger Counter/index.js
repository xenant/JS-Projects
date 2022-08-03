//document.getElementById("count-el").innerText = 252;

let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let totalEl = document.getElementById("total-el")
let total = 0;
let added = 0;

function increment() {
  count += 1;
  added +=1;
  countEl.textContent = count;
  //DOM --> Document Object Model (how you use javascript to modify websites)
  total += added;
  added = 0;
}

function save() {
  let entry = count + " - ";
  saveEl.textContent += entry;
  
  count = 0;
  countEl.textContent = count;
}

function sum(){
  let finalAdd = "Total: " + total;
  totalEl.textContent = finalAdd

}