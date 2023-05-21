let counterValue = 0;
const buttonDecrement = document.querySelector("[data-action='decrement']");
const buttonIncrement = document.querySelector("[data-action='increment']")
// console.log(buttons);
const actionDecrement = (click)=> {
  console.log(counterValue -= 1);document.getElementById("value").textContent= counterValue;

};
const actionIncrement = (click)=> {
  console.log(counterValue += 1);document.getElementById("value").textContent= counterValue;

};
buttonDecrement.addEventListener("click", actionDecrement);
buttonIncrement.addEventListener("click", actionIncrement);
