// Declaration des variables

const myBody = document.querySelector("body");
const myDiv = document.createElement("div");
const titleDiv = document.createElement("h3");
const myNumbers = document.createElement("h2");
const myBtnDiv = document.createElement("div")
const incBtn = document.createElement("button");
const decBtn = document.createElement("button");
const resetBtn = document.createElement("button");
const paraLimit = document.createElement("p");
const limitValue = document.createElement("span");
const inputLimit = document.createElement("input");

let counter = 0;
let limiteCounter = Infinity;

// contenu principal 

titleDiv.textContent = "My counter";
myNumbers.textContent = counter;
incBtn.textContent = "+ Increment";
decBtn.textContent = "- Decrement";
resetBtn.textContent = "Reset";
paraLimit.textContent = "Limit : "
limitValue.textContent = limiteCounter;
inputLimit.setAttribute("type", "number");

// mise en page des elements 

myBody.appendChild(myDiv);
myDiv.appendChild(titleDiv);
myDiv.appendChild(myNumbers);
myDiv.appendChild(myBtnDiv);
myBtnDiv.appendChild(incBtn);
myBtnDiv.appendChild(decBtn);
myBtnDiv.appendChild(resetBtn);
myBtnDiv.appendChild(paraLimit);
paraLimit.appendChild(limitValue);
myBtnDiv.appendChild(inputLimit);

// declaration des functions button et input

incBtn.addEventListener("click", () => {
    try {
        if (counter < limiteCounter){
        counter++;
        myNumbers.textContent = counter;
    } } catch(e) {
        return(e);
    }
})

decBtn.addEventListener("click", () => {
    try{
        if (counter > 0){
        counter--;
        myNumbers.textContent = counter;
    }}catch(e) {
        return(e);
    }
})

resetBtn.addEventListener("click", () => {
    try {
        counter = 0;
    limiteCounter = Infinity;
    myNumbers.textContent = counter;
    limitValue.textContent = limiteCounter;
    } catch (e) {
        return(e);
    }
})

inputLimit.addEventListener("input", () => {
    try {
        limiteCounter = inputLimit.value;
    limitValue.textContent = limiteCounter;
    } catch(e){
        return(e);
    }
})


