//conversor
let valoresCambio = [
  { moneda: "dolarOficial", valor: 245.40 },
  { moneda: "euroOficial", valor: 252.20 },
  { moneda: "realOficial", valor: 47.50 }
];

function obtenerValor(moneda) {
  const monedaEncontrada = valoresCambio.find((valor) => valor.moneda === moneda + "Oficial");
  if (monedaEncontrada) {
    return monedaEncontrada.valor;
  }
  return null;
}

function conversor() {
  let pesos = 0;
  let conversion = 0;

  let continuar = true;
  while (continuar) {
    let moneda = prompt("¿A qué moneda desea convertir? (dolar/euro/real)").toLowerCase();
    pesos = parseFloat(prompt("Ingrese el número en Pesos Argentinos"));

    let valorMoneda = obtenerValor(moneda);
    if (valorMoneda !== null) {
      conversion = pesos / valorMoneda;
      alert("La conversión de Pesos Argentinos a " + moneda + " Oficial es $" + conversion.toFixed(2));
    } else {
      alert("Por favor, seleccione dolar, euro o real.");
      continue;
    }

    let respuesta;
    while (true) {
      respuesta = prompt("¿Desea realizar otra conversión? (si/no)").toLowerCase();
      if (respuesta === "si" || respuesta === "no") {
        break;
      } else {
        alert("Por favor, seleccione si o no.");
      }
    }

    if (respuesta === "si") {
      continuar = true;
    } else {
      alert("¡Muchas gracias por usar el conversor!");
      return;
    }
  }
}




// TRANSFERENCIAS
class datosTransferencia {
  constructor(cbu, nombre, monto) {
    this.cbu = cbu;
    this.nombre = nombre;
    this.monto = monto;
  }
}

function transferir() {
  let cbu = prompt("Ingrese el CBU/Alias de la persona a la que desea transferir:");
  let nombre = prompt("Ingrese el nombre y apellido de la persona a la que desea transferir:");
  let monto = prompt("Ingrese el monto que desea transferir:");
  const nuevaTransferencia = new datosTransferencia(cbu, nombre, monto);
  arrayHistorial.push(nuevaTransferencia);
  alert("Transferencia realizada");

  iniciarMenu();
}

function iniciarMenu() {
  let menu = prompt("Ingrese una opción:\n1 = Realizar otra transferencia\n2 = Ver historial de transferencias\n3 = Finalizar transferencias");

  switch (menu) {
    case "1":
      transferir();
      break;
    case "2":
      verHistorial();
      iniciarMenu();
      break;
    case "3":
      alert("Gracias por usar nuestra billetera virtual");
      break;
    default:
      iniciarMenu();
  }
}

function verHistorial() {
  let opcionFilter = prompt("Ingrese una opción para filtrar el historial:\n1 = Filtrar por Nombre\n2 = Filtrar por Monto");

  let transferenciasFiltradas = arrayHistorial;

  switch (opcionFilter) {
    case "1":
      let nombreFiltro = prompt("Ingrese el Nombre para filtrar:");
      transferenciasFiltradas = transferenciasFiltradas.filter((transferencia) => transferencia.nombre === nombreFiltro);
      break;
    case "2":
      let montoFiltro = Number(prompt("Ingrese el Monto para filtrar:"));
      transferenciasFiltradas = transferenciasFiltradas.filter((transferencia) => Number(transferencia.monto) === montoFiltro);
      break;
  }

  if (transferenciasFiltradas.length> 0) {
    transferenciasFiltradas.forEach((datos) => {
      alert(`Usted transfirió al CBU/ALIAS ${datos.cbu} con nombre ${datos.nombre} un total de $${datos.monto} pesos argentinos`);
    });
  } else {
    alert("No se encontraron transferencias que coincidan con los criterios de filtrado.");
  }
}

const arrayHistorial = [];
