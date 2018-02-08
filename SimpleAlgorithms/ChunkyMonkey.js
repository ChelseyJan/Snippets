
function chunkArrayInGroups(arr, size) {
  //This will be a multidimensional array
  //Picturing it as a table:
  //Row length = size
  //Column height = (array.length / size)
  //Each chunk is a row of "size" entries

  var length = arr.length;
  
  // If the given size is longer than the array, just return the array
  if (size > length)
  { 
    return arr; 
  }
  
  //Loop through each row, "size" # of columns
  var newArray = [];
  
  for (var i = 0; i < (length / size); i++) 
  {
    //shallowCopy temporarily holds the "i" chunk of the array
    //arr.slice(starting index, ending index)
    var shallowCopy = arr.slice((i * size), (i * size) + (size));
    newArray.push(shallowCopy);
  }
    
  return newArray;
}


chunkArrayInGroups(["a", "b", "c", "d"], 2); // This should return (["a", "b"]["c", "d"])