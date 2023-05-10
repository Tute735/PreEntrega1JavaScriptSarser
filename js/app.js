const dolarOficial = 235.5;
const euroOficial = 258.51;
const realOficial = 50.91;

function conversor() {
  let pesos = 0;
  let conversion = 0;

  let continuar = true;
  while (continuar) {
    let moneda = prompt("¿A qué moneda desea convertir? (dolar/euro/real)").toLowerCase();
    pesos = (prompt("Ingrese el numero en Pesos Argentinos"));
    switch (moneda) {
      case "dolar":
        conversion = pesos / dolarOficial;
        alert("La conversion de Pesos Argentinos al Dolar Oficial es $"+ conversion.toFixed(2));
        break;
      case "euro":
        conversion = pesos / euroOficial;
        alert("La conversion de Pesos Argentinos al Euro Oficial es $"+ conversion.toFixed(2));
        break;
      case "real":
        conversion = pesos / realOficial;
        alert("La conversion de Pesos Argentinos al Real Oficial es $"+ conversion.toFixed(2));
        break;
      default:
        alert("Por favor, seleccione dolar, euro o real.");
        continue;
    }
    
    let respuesta;
    while (true) {
      respuesta = prompt("¿Desea realizar otra conversion? (si/no)").toLowerCase();
      if (respuesta === "si" || respuesta === "no") {
        break;
      } else {
        alert("Por favor, seleccione si o no.");
      }
    }
    
    if (respuesta === "si") {
      continuar = true;
    } else {
      alert("Muchas gracias por usar el conversor!");
      return;
    }
  }
}