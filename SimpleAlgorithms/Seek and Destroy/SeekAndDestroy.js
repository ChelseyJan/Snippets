
// The following code is my original submission for the Seek and Destroy algorithm.

function destroyer(arr) {

  
 function isInArray(value) {
    
    var trueOrFalse = true;
    
    for (var i = 1; i <= placeHolder.length; i++)
      {
        if (value === placeHolder[i])
          {
            trueOrFalse = false;
          }
      }
      
      return trueOrFalse;
  }

  
  var placeHolder = Array.from(arguments);
  
  var filteredArray = arguments[0].filter(isInArray);
  
  return filteredArray;
  
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
