function bubbleSort(arr){

    //Outer pass
    for(let i = 0; i < arr.length; i++){

        //Inner pass
        for(let j = 0; j < arr.length - i - 1; j++){

            //Value comparison using ascending order

            if(arr[j + 1] < arr[j]){

                //Swapping
                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
        }
    };
    return arr;
};

console.log(bubbleSort([5,3,8,4,6]));




function insertionSort(arr){
    //Start from the second element.
    for(let i = 1; i < arr.length;i++){

        //Go through the elements behind it.
        for(let j = i - 1; j > -1; j--){
            
            //value comparison using ascending order.
            if(arr[j + 1] < arr[j]){

                //swap
                [arr[j+1],arr[j]] = [arr[j],arr[j + 1]];

            }
        }
    };

  return arr;
}

console.log(insertionSort([23, 1, 10, 5, 2]));




function selectionSort(arr) {
    let min;
  
    //start passes.
    for (let i = 0; i < arr.length; i++) {
      //index of the smallest element to be the ith element.
      min = i;
  
      //Check through the rest of the array for a lesser element
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
  
      //compare the indexes
      if (min !== i) {
        //swap
        [arr[i], arr[min]] = [arr[min], arr[i]];
      }
    }
  
    return arr;
  }
  
  console.log(selectionSort([29, 72, 98, 13, 87, 66, 52, 51, 36]));