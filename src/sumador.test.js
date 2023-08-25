import totalizadorVentas from "./sumador.js";


describe("Totalizar", () => {
  it("deberia mostrar la cantidad de items ingresados", () => {
    const calcu = new totalizadorVentas();
    expect(calcu.calcularTotal(3)).toEqual(3);
  });

  it("deberia mostrar el precio de los items", () => {
    const calcu = new totalizadorVentas();
    expect(calcu.calcularTotal(4)).toEqual(4);
  });
});
