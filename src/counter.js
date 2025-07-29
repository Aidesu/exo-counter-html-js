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

titleDiv.textContent = "My counter";
myNumbers.textContent = counter;
incBtn.textContent = "+ Increment";
decBtn.textContent = "- Decrement";
resetBtn.textContent = "Reset";
paraLimit.textContent = "Limit : "
limitValue.textContent = limiteCounter;

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


incBtn.addEventListener("click", () => {
    if (counter < limiteCounter){
        counter++;
        myNumbers.textContent = counter;
    }
})

decBtn.addEventListener("click", () => {
    if (counter > 0){
        counter--;
        myNumbers.textContent = counter;
    }
})

resetBtn.addEventListener("click", () => {
    counter = 0;
    limiteCounter = Infinity;
    myNumbers.textContent = counter;
    limitValue.textContent = limiteCounter;
    
})

inputLimit.addEventListener("input", () => {
    limiteCounter = inputLimit.value;
    limitValue.textContent = limiteCounter;
})

