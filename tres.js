/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),

cantidad de personas que viajan.

informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
  var nombre;
  var lugar;
  var temporada;
  var pregunta;
  var personas;
  var cataratas = 0;
  var salta = 0;
  var bariloche = 0;
  var vanderaPersonas = true;
  var personasMayor;
  var conductor;
  var contadorINvierno = 0;
  var sumaInvierno = 0;
  var promedioInvierno;
  do {
    do {
      nombre = prompt("Ingrese el nombre del titular ");
    } while (!isNaN(nombre));
    do {
      lugar = prompt(
        "ingrese el lugar de viaje sea Bariloche, Cataratas o Salta"
      );
    } while (lugar != "Bariloche" && lugar != "Cataratas" && lugar != "Salta");
    do {
      temporada = prompt(
        "Ingrese la temporada sea otoño, invierno, verano o primavera"
      );
    } while (
      temporada != "otoño" &&
      temporada != "invierno" &&
      temporada != "verano" &&
      temporada != "primavera"
    );
    do {
      personas = prompt("ingrese la cantidad de personas");
      personas = parseInt(personas);
    } while (isNaN(personas) || personas <= 0);
    switch (lugar) {
      case "Bariloche":
        bariloche = bariloche + personas;
      case "Cataratas":
        cataratas = cataratas + personas;
      case "Salta":
        salta = salta + personas;
    }
    if (vanderaPersonas == true) {
      vanderaPersonas = false;
      conductor = nombre;
      personasMayor = personas;
    } else {
      if (personasMayor < personas) {
        conductor = nombre;
        personasMayor = personas;
      }
    }
    if (temporada == "invierno") {
      contadorInvierno++;
      sumaInvierno = sumaInvierno + personas;
    }

    pregunta = prompt("ingresar otra estadia?");
  } while (pregunta == "si");
  if (bariloche > cataratas && bariloche > cataratas) {
    document.write("El lugar mas elejido es Bariloche" + "<br>");
  } else {
    if (cataratas > salta && cataratas > bariloche) {
      document.write("el lugar mas elejido son las cataratas" + "<br>");
    } else {
      if (salta > cataratas && salta > bariloche) {
        document.write("El lugar mas elejido es Salta" + "<br>");
      }
    }
  }
  document.write("El titular con  mas pasageros es " + conductor + "<br>");
  if (promedioInvierno != 0) {
    promedioInvierno = sumaInvierno / contadorINvierno;
    document.write(
      "el promedio de personas que viajaron en invierno es " + promedioinvierno
    );
  }
}
