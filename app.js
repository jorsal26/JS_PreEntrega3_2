//
// Se Inicializa variable global
let detallePresupuesto="";

function calcularTotalPresupuesto(cant) {
  // Se solicita el nombre del cliente y la cantidad de productos a presupuestar
  const nombreCliente = prompt("Ingrese Nombre del Cliente:");

  // Se Inicializa variable local
  let totalPresupuesto = 0;
    
  // Recorro cada producto
  for (let i = 1; i <= cant; i++) {
    // Se solicita ingresear el nombre del producto
    const nombreProducto = prompt(`Ingrese nombre del producto ${i}:`);
    // Se solicita ingresear el precio del producto
    const precioProducto = parseFloat(prompt(`Ingrese el precio del producto ${i}:`));

    // Validación: Compruebo que el usuario ingrese un número válido y mayor que 0
    if (!isNaN(precioProducto) && precioProducto > 0) {
      totalPresupuesto += precioProducto; // Sumo el precio al costo total
    } else {
      alert("El precio ingresado es inválido. Por favor, inténtelo nuevamente.");
      i--; // Resto 1 al contador para repetir la iteración
    }

    if (i==1){
      detallePresupuesto="PRESUPUESTO PARA "+nombreCliente+"\n"+nombreProducto+"   "+precioProducto;
  }else{
      detallePresupuesto=detallePresupuesto+"\n"+nombreProducto+"   "+precioProducto;
    }
  }
  console.log(detallePresupuesto);
  detallePresupuesto=detallePresupuesto+"\n_____________________________\n"+"TOTAL PRESUPUESTO: $ "+totalPresupuesto.toFixed(2);
}

function generarPresupuesto(){
// Se solicita la cantidad de productos a presupuestar
let cantDeProductos = parseInt(prompt("Ingrese cantidad de productos (0 para salir): "));

while (cantDeProductos!=0){
  if (isNaN(cantDeProductos) || cantDeProductos <= 0) {
      alert("Cantidad de Productos ingresado es inválido. Por favor, inténtelo nuevamente.");
  }else{
      //Llamao la función
      calcularTotalPresupuesto(cantDeProductos);
      alert(detallePresupuesto);
  }

  cantDeProductos = parseInt(prompt("Ingrese cantidad de productos (0 para salir): "));
}
}