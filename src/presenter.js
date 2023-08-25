import totalizadorVentas from "./sumador";

const first = document.querySelector("#cantidad");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#total-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const calcu = new totalizadorVentas();
  const firstNumber = Number.parseInt(first.value);
  //const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + calcu.calcularTotal(firstNumber) + "</p>";
});
