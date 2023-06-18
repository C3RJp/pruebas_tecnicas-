let edades = [];

for (let i = 1; i <= 10; i++) {
  let edad = prompt('Ingrese la edad de la persona '+i);
  
  // Validar que la edad esté dentro del rango permitido
  while (edad < 1 || edad > 120) {
    edad = prompt('Edad incorrecta. Ingrese la edad de la persona '+i);
  }
  //parseInt:convierte a entero el valor que recibe de la variable edad
  edades.push(parseInt(edad));
}

let menoresEdad = 0;
let mayoresEdad = 0;
let adultosMayores = 0;
let edadMinima = edades[0];
let edadMaxima = edades[0];
let sumaEdades = 0;

//recorrer el vector
for (let i = 0; i < edades.length; i++) {
  const edad = edades[i];
  
  //identificar menores, mayores y adultosMayores
  if (edad < 18) {
    menoresEdad++;
  } else if (edad >= 18 && edad < 60) {
    mayoresEdad++;
  } else {
    adultosMayores++;
  }

  //identificar menor, mayor de edad

  if (edad < edadMinima) {
    edadMinima = edad;
  }
  else if (edad > edadMaxima) {
    edadMaxima = edad;
  }
  //sumar edades
  sumaEdades += edad;
}

 //promedio de edades
const promedioEdades = sumaEdades / edades.length;

alert('Menores de edad: '+menoresEdad);
alert('Mayores de edad: '+mayoresEdad)
alert('Adultos mayores: '+adultosMayores)
alert('Edad mínima: '+edadMinima)
alert('Edad máxima: '+edadMaxima);
alert('Promedio de edades: '+promedioEdades)
