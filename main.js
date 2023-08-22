import "./style.css";
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

document.addEventListener("DOMContentLoaded", (e) => {
  e.defaultPrevented;
  const queryString = window.location.search;
  const param = new URLSearchParams(queryString);
  const weight = param.get("weight");
  const height = param.get("height");
  const bmi = weight / (height * height);

  if ((weight != null) & (height != null) & (bmi != NaN)) {
    result.innerHTML = `
    <h1>Result</h1> 
    <h4>Weight: ${weight} kg</h4>
    <h4>Height: ${height} m</h4>
    <h2>BMI: ${bmi.toFixed(2)}%</h2>`;
  } else {
    result.innerHTML = ` 
    <h1>Result</h1>
  <h4>Weight: 0 kg</h4>
  <h4>Height: 0 m</h4>
  <h2>BMI: 0%</h2>`;
  }
});
