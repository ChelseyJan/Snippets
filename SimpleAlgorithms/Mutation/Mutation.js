function mutation(arr) {
  
  //Copy array to holding strings
  var stringOne = arr[0].toString(); //1st element
  var stringTwo = arr[1].toString(); //2nd element
  
  //Turn both into lowercase strings
  stringOne = stringOne.toLowerCase();
  stringTwo = stringTwo.toLowerCase();
 
  //Look for each individual element of stringTwo in stringOne
  var indexResult = stringOne.indexOf("l");
  
  //Store these results in an array:
  var resultArchive = "";
  resultArchive += indexResult;
  
  
  //If the returned index is already in the archive...
  if (resultArchive.indexOf(indexResult))
    {
      //Do something....
      //Start search over from duplicate?
    }
  
  //find the index of the string, split there
  return result;
}

mutation(["hello", "hey"]);