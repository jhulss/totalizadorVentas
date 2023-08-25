import totalizadorVentas from "./sumador.js";


describe("Totalizar", () => {
  it("deberia mostrar el total en base a la cantidad y el precio de los items", () => {
    const calcu = new totalizadorVentas();
    expect(calcu.calcularTotal(4, 4)).toEqual(16);
  });

  


});
