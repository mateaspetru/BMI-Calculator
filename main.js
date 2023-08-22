import "./style.css";
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

document.addEventListener("DOMContentLoaded", (e) => {
  const queryString = window.location.search;
  const param = new URLSearchParams(queryString);
  const weight = param.get("weight");
  const height = param.get("height");
  const bmi = weight / (height * height);
  return (result.innerHTML = ` 
  <h4>Weight: ${weight} kg</h4>
  <h4>Height: ${height} m</h4>
  <h2>BMI: ${bmi.toFixed(2)}%</h2>`);
});
