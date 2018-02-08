
function getIndexToIns(arr, num) {
  // Find my place in this sorted array. 
  
  //Push the new number into the array.
  arr.push(num);
  
  // Step 1: Put the array in order by creating a sorting function
  function compareNumbers(a, b) {
    return a - b;
  }
  
  // Then run the above function as the parameter of the sort method
  arr.sort(compareNumbers);
  
  return arr.indexOf(num);
  
}

getIndexToIns([40, 60], 50);