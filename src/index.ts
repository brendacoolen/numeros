let dimension: number = Number(
  prompt("Ingrese la cantidad de numeros que desea ingresar")
);
let numeros: number;
let arregloNumeros: number[] = [];
let numNeg: number[] = [];
let numPos: number[] = [];
let ceros: number[] = [];

for (let i: number = 0; i < dimension; i++) {
  numeros = Number(prompt("Ingrese un numero"));
  arregloNumeros.push(numeros);
  if (arregloNumeros[i] < 0) {
    numNeg.push(arregloNumeros[i]);
  } else if (arregloNumeros[i] > 0) {
    numPos.push(arregloNumeros[i]);
  } else {
    ceros.push(arregloNumeros[i]);
  }
}
console.log(
  "Hay",
  arregloNumeros.length,
  "numeros:",
  numPos.length,
  "son positivos,",
  numNeg.length,
  "son negativos y hay",
  ceros.length,
  "ceros."
);