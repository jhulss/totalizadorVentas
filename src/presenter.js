import totalizadorVentas from "./sumador";

const first = document.querySelector("#cantidad");
const second = document.querySelector("#precio");
const tird = document.querySelector("#estado");
const form = document.querySelector("#total-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const calcu = new totalizadorVentas();
  const calcu2 = new totalizadorVentas();
  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  

  div.innerHTML = "<p>" + "Total: " + calcu.calcularTotal(firstNumber, secondNumber) + "<br>" +  "Impuesto de estado: " + calcu2.verificarEstado(tird.value) + "</p>";
});
