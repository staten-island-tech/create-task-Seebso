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
let i = 0
const DOMSelectors = {
  button: document.querySelector('#btn'),
};
DOMSelectors.button.addEventListener("click", function () {
  random5();
  i++;
  console.log(i);
})
function random5() {
  const a = Math.floor(Math.random() * 1000);
  if (a === 0 || a === 1 || a === 2  || a === 3 || a === 4 || a === 5){
    console.log("nice")
  }
  console.log(a)
}
