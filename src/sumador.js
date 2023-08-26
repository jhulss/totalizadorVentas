
class totalizadorVentas
{ 
    calcularTotal(cantidad, precio)
    {
      return cantidad * precio;
    }

    verificarEstado(codigo)
    {
      const cod = codigo.toUpperCase();
      const estados = 
      {
        UT: 6.65,
        NV: 8.00,
        TX: 6.25,
        AL: 4.00,
        CA: 8.25
      }
      return estados[cod];
    }

}

export default totalizadorVentas;