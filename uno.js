/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
  var nombre;
  var temperatura;
  var sexo;
  var edad;
  var contador = 0;
  var contadorFemenino = 0;
  var contadorMasculino = 0;
  var edadSuma = 0;
  var promedio;
  var mujerMasTemperatura = 0;
  var vandera = true;
  var nombreMujerMayorTemp;
  do {
    do {
      nombre = prompt("Ingrese su nombre");
    } while (!isNaN(nombre));
    do {
      temperatura = prompt("ingrese su temperatura");
    } while (isNaN(temperatura) || temperatura <= 0);
    do {
      sexo = prompt("ingrese su sexo(f/m)");
    } while (sexo != "f" && sexo != "m");
    do {
      edad = prompt("Ingrese su edad");
      edad = parseInt(edad);
    } while (isNaN(edad) || edad <= 0);
    switch (sexo) {
      case "f":
        contadorFemenino++;
        break;
      case "m":
        contadorMasculino++;
        break;
    }
    edadSuma = edadSuma + edad;
    if (vandera == true && sexo == "f") {
      vandera = false;
      nombreMujerMayorTemp = nombre;
      mujerMasTemperatura = temperatura;
    } else {
      if (mujerMasTemperatura < temperatura && sexo == "f") {
        mujerMasTemperatura = temperatura;
        nombreMujerMayorTemp = nombre;
      }
    }

    contador++;
  } while (contador < 2);
  if (contadorFemenino != 0) {
    document.write(
      "La cantidad de mujeres que hay es de " + contadorFemenino + "<br>"
    );
    document.write(
      "La mujer con mayor temperatura es " + nombreMujerMayorTemp + "<br>"
    );
  }
  if (contadorMasculino != 0) {
    document.write(
      "La cantidad de hombres es de " + contadorMasculino + "<br>"
    );
  }
  promedio = edadSuma / contador;
  promedio = parseInt(promedio);
  document.write("La edad promedio de las personas es de " + promedio + "<br>");
}
