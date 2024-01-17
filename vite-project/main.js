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
};
DOMSelectors.button.addEventListener("click", function () {
  oneclick();
})
DOMSelectors.button2.addEventListener("click", function () {
  oneclick();
  while (i > 0){
    oneclick();
  }
})
function oneclick(){
  if (i >= 74){
    factor = Math.min(1, factor + 0.06)
  }
  if (random5()){
    return
  }
  i++;
  console.log(i);
  console.log(factor);
}

function random5() {
  const a = Math.floor(Math.random() * 1000);
  if (a < (factor * 1000)){
    win();
    return true
  }
  console.log(a)
  return false
}
function win() {
  let turns = i+1
  console.log("Nice! You got a 5 star after " + (turns) + " pulls")
  history.push(turns)
  factor = 0.006
  document.getElementById("games").innerText = history.length;
  document.getElementById("wish").innerText = avg();
  document.getElementById("last").innerText = turns;
  i = 0
}
function avg(){
  let sum = 0
  for (let x of history){
    sum = sum + x
  }
  return Math.round(sum / history.length * 100) / 100
}
// 74 6.6% 75 12.6% 76 18.6% 