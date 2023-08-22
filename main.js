import "./style.css";

const result = document.querySelector(".result");
const weightInput = document.querySelector(".weight");
const heightInput = document.querySelector(".height");

document.addEventListener("DOMContentLoaded", (e) => {
  e.defaultPrevented;

  const queryString = window.location.search;
  const param = new URLSearchParams(queryString);
  const weight = param.get("weight");
  const height = param.get("height");
  const bmi = weight / (height * height);

  if ((bmi != NaN, weight != null, height != null)) {
    result.innerHTML = `
    <h1>Result</h1> 
    <h2>BMI: ${bmi.toFixed(2)}%</h2>`;
  } else {
    result.innerHTML = `
  <h1>Result</h1> 
  <h2>BMI: 0%</h2>`;
  }

  weightInput.value = weight;
  heightInput.value = height;
});
