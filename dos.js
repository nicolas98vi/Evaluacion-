/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/
function mostrar() 
{
  var marca;
  var precio;
  var pesoKilogramo;
  var tipo;
  var pregunta;
  var pesoTotal = 0;
  var precioMayor;
  var vanderaCaro = true;
  var marcaMasCara;
  var vanderaPeso = true;
  var pesoMenor;
  var marcaMasLiviana;

  do {
    do {
      marca = prompt("ingrese la marca del producto");
    } while (!isNaN(marca));
    do {
      precio = prompt("ingrese el precio del producto");
    } while (isNaN(precio) || precio <= 0);
    do {
      pesoKilogramo = prompt("Ingrese el peso en kilogramos");
      pesoKilogramo = parseInt(pesoKilogramo);
    } while (isNaN(pesoKilogramo) || pesoKilogramo <= 0);
    do {
      tipo = prompt("Ingrese el tipo de producto sea sólido o líquido");
    } while (tipo != "sólido" && tipo != "líquido");
    /**a) */

    pesoTotal = pesoTotal + pesoKilogramo;

    /**b) */

    if (vanderaCaro == true) {
      vanderaCaro = false;
      precioMayor = precio;
      marcaMasCara = marca;
    } else {
      if (precioMayor < precio) {
        precioMayor = precio;
        marcaMasCara = marca;
      }
    }

    /**c) */

    if (vanderaPeso == true) {
      vanderaPeso = false;
      pesoMenor = pesoKilogramo;
      marcaMasLiviana = marca;
    } else {
      if (pesoMenor > pesoKilogramo) {
        pesoMenor = pesoKilogramo;
        marcaMasLiviana = marca;
      }
    }

    pregunta = prompt("Ingresar otra compra?(si/no)");
  } while (pregunta == "si");
  document.write("El peso total de la compra es de " + pesoTotal + "<br>");
  document.write("la marca mas cara es " + marcaMasCara + "<br>");
  document.write("la marca mas libiana es " + marcaMasLiviana);
}
