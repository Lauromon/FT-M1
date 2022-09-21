'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1,2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  //tengo que devolver un array con los nros por los que pude dividir.
  //el factor tiene que guardarse y aumentar con cada vuelta.
  //hay una condicion, no puede ser dividido por un nro cuyo resultado sea un decimal. 
  var arr = [1];
  var factor = 2;
  while(num > 1){
    if(num % factor === 0 ) {
      arr.push(factor);
      num = num / factor;
    }
    else{
      factor ++;
    }
  }
  return arr;
}


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  /*tengo que:
  comparar elementos dentro del array con el que le sigue
  intercambiar sus lugares
  si el elemento que le sigue es mayor, queda como esta, si es menor, cambian de lugar.
  recursivo.*/
  
  for(var i = 0; i < array.length; i++){
    for(var j = i + 1; j < array.length; j++){
      if(array[i] > array[j]){
        var mayor = array[i];
        array[i] = array[j];
        array[j] = mayor;
      }
    }
  }
  return array;
}

  
function insertionSort(array) {
    // Implementar el método conocido como insertionSort para ordenar de menor a mayor
    // el array recibido como parámetro utilizando arreglos
    // Devolver el array ordenado resultante
  // Tu código:
  /*tengo que:
    extraer un elemento del array y compararlo con el resto para luego ubicarlo donde iria, con cada un*/
  for (let i = 1; i < array.length; i++){
    var j = i -1;
    var aux = array[i];
    while (j >= 0 && array[j]> aux){
      array[j+1] = array[j];
      j = j - 1;
    }
    array[j+1] = aux;
  }
  return array
}
  
  
  
function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (var i = 0; i < array.length; i++) {
        var min = i;
    
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      var aux = array[i];
      array[i] = array[min];
      array[min] = aux;
      //[array[i], array[min]] = [array[min], array[i]];
    }
  }

  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
