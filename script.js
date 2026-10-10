//your JS code here. If required.
let count = 0;
const counter = document.getElementById("counter");
const btn = document.getElementById("incrementBtn");

btn.addEventListener("click", () => {
  alert(count);        // un-incremented value
  count++;
  counter.textContent = count;
});