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

// #######################################################################
// ###########################    Bonus   ################################
// #######################################################################

const skullBtn = document.createElement("button");

myDiv.appendChild(skullBtn);
skullBtn.id = "mySkullBtn";


skullBtn.addEventListener("click", () => {
    skullBtn.classList.add("feur");
    myBody.classList.add("kuroMod");
    titleDiv.textContent = "My hell";
    incBtn.textContent = "Who am I";
inputLimit.remove();
paraLimit.remove();
(function loop() {
  setTimeout(() => {
    counter++;
    myNumbers.textContent = counter;
    incBtn.textContent = counter*2.6;
    decBtn.textContent = counter**1.5;
    resetBtn.textContent = counter/2;
    if (counter >= 1000){
        counter*1.5;
    myNumbers.textContent = counter;
    }
    loop();
  }, 10);
})();
})

skullBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#333"><path d="M240-80v-170q-39-17-68.5-45.5t-50-64.5q-20.5-36-31-77T80-520q0-158 112-259t288-101q176 0 288 101t112 259q0 42-10.5 83t-31 77q-20.5 36-50 64.5T720-250v170H240Zm80-80h40v-80h80v80h80v-80h80v80h40v-142q38-9 67.5-30t50-50q20.5-29 31.5-64t11-74q0-125-88.5-202.5T480-800q-143 0-231.5 77.5T160-520q0 39 11 74t31.5 64q20.5 29 50.5 50t67 30v142Zm100-200h120l-60-120-60 120Zm-80-80q33 0 56.5-23.5T420-520q0-33-23.5-56.5T340-600q-33 0-56.5 23.5T260-520q0 33 23.5 56.5T340-440Zm280 0q33 0 56.5-23.5T700-520q0-33-23.5-56.5T620-600q-33 0-56.5 23.5T540-520q0 33 23.5 56.5T620-440ZM480-160Z"/></svg>`;



