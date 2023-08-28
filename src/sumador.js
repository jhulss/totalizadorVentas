
class totalizadorVentas
{ 
    constructor(cantidad, precio, codigo) 
    {
    this.cantidad = cantidad;
    this.precio = precio;
    this.codigo = codigo;
    }
    calcularTotal(cantidad, precio)
    {
      let resp = cantidad * precio;
      return resp;
    }

    totalizador()
    {
      let total = this.calcularTotal(this.cantidad, this.precio);
      let impuestos = this.verificarEstado(this.codigo);
      let descuento = this.calcularDescuento();

      let resp1 = total * impuestos / 100;
      let resp2 = total + resp1 - (total * descuento / 100);

      return resp2;
  
    }

    verificarEstado(codigo)
    {
      const estados = 
      {
        UT: 6.65,
        NV: 8.00,
        TX: 6.25,
        AL: 4.00,
        CA: 8.25
      }
      return estados[codigo];
    }

    calcularDescuento()
    {
      let monto = this.calcularTotal(this.cantidad, this.precio);
    
      const descuentos = [
      { total: 1000, porcentaje : 3 },
      { total: 3000, porcentaje: 5 },
      { total: 7000, porcentaje: 7 },
      { total: 10000, porcentaje: 1 },
      { total: 30000, porcentaje: 15 }
      ];
  
      let descuentoAplicado = 0;
      for (let descuento of descuentos) {
        if (monto === descuento.total) {
            descuentoAplicado = descuento.porcentaje;
        } else {
          break;
        }
      }
      return descuentoAplicado;
    }

    

}

export default totalizadorVentas;