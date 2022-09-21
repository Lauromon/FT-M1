'use strict'

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
/* necesito un pivote (un elemento del array)
  separar el array en dos(menores y mayores al pivote)
  comparar con el pivote todos los elementos menores y luego con los del array mayores
  concatenar todo en un nuevo array ordenado*/
  var menores = [];
  var mayores = [];
  var pivote = array[0];

  if(array.length < 1){
    return [];
  }

  for (let i = 1; i < array.length; i++) {
    if(array[i] < pivote){
      menores.push(array[i]);
    }
    else{
      mayores.push(array[i]);
    }
  }
  return [].concat(quickSort(menores), pivote, quickSort(mayores));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length < 2){
    return array
  }

  var medio = Math.floor(array.length/2)
  var izq = array.slice(0,medio);
  var der = array.slice(medio);
  
  var merge = function(izq, der) {
    var datos = [];
    
    while(izq.length > 0 && der.length > 0){
      if(izq[0] <= der[0]){
        datos.push(izq.shift());
      }
      else{
        datos.push(der.shift());
      }
    }
    return datos.concat(izq).concat(der);
  }
  return merge(mergeSort(izq),mergeSort(der));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
