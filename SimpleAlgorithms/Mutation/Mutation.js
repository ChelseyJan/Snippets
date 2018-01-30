function mutation(arr) {
  
  //Copy array to holding strings
  var stringOne = arr[0].toString(); //1st element
  var stringTwo = arr[1].toString(); //2nd element
  var indexResult = "";
  var sliceHolder = "";
  
  //Turn both into lowercase strings
  stringOne = stringOne.toLowerCase();
  stringTwo = stringTwo.toLowerCase();
 
  //Look for each individual element of stringTwo in stringOne
  for (var i = 0; i < stringTwo.length; i++)
    {
      indexResult = stringOne.indexOf(stringTwo.charAt(i));
      
      if (indexResult == -1)
      {
        return false;
      }

        //sliceHolder gets the sliced out piece of stringOne
        //remove the letter at the matching to prevent false double matching
        sliceHolder = stringOne.slice(indexResult, indexResult +1);
    }
  
  return true;
  
}

mutation(["hello", "hey"]);