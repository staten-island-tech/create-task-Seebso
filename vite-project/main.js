import './style.css'
/* import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter')) */
let i = 0;
let factor = 0.006;
let history = []
const DOMSelectors = {
  button: document.querySelector('#btn'),
  button2: document.querySelector('#btn2'),
  fifty: document.querySelector('#fifty')
};
DOMSelectors.button.addEventListener("click", function () {
  oneclick();
})
DOMSelectors.button2.addEventListener("click", function () {
  oneclick();
  while (i > 0){
    oneclick(); //once i is back to 0, stop
  }
})
function oneclick(){
  if (i >= 74){
    factor = Math.min(1, factor + 0.06) //if factor + 0.06 exceeds 1, use 1 instead of factor + 0.06
  }
  if (random5()){
    return
  }
  i++;
  console.log(i);
  console.log(factor);
  document.getElementById("pull").innerText = i;
}

function random5() {
  const a = Math.floor(Math.random() * 1000); //takes random number from 0 - 999
  if (a < (factor * 1000)){ //takes percentage to use for random number
    win();
    return true //if win, do not add another i
  }
  console.log(a)
  return false
}
let f = 1
function fifty() {
  DOMSelectors.fifty.innerHTML = ""
  const a = Math.random();
  if (f % 2 === 0){
    console.log("Guaranteed")
    DOMSelectors.fifty.innerHTML = "Guaranteed Win"
    f++;
    return
  }
  if (a < 0.5){
    f++;
    console.log("You lost the 50-50")
    DOMSelectors.fifty.innerHTML = "You lost the 50-50! D:"
    return
  }
  console.log("You won the 50-50")
  DOMSelectors.fifty.innerHTML = "You won the 50-50! :D"
}
function win() {
  fifty();
  let turns = i+1
  console.log("Nice! You got a 5 star after " + (turns) + " pulls")
  history.push(turns)
  factor = 0.006
  document.getElementById("games").innerText = history.length;
  document.getElementById("wish").innerText = avg(history);
  document.getElementById("last").innerText = turns;
  i = 0
}
function avg(numberSet){
  let sum = 0
  for (let x of numberSet){ 
    if (x > 0){
      sum = sum + x //takes sum of every item in numberSet
    }
  }
  return Math.round(sum / numberSet.length * 100) / 100 //Round to integer, then put it back
}
// 74 6.6% 75 12.6% 76 18.6% 