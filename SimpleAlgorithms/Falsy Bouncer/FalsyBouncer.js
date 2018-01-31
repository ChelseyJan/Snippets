
function bouncer(arr) {
  
  //Create a variable to hold the result
  var trueOrFalse;
  var tempElement;
  var tempArray = [];
  
  for (var i = 0; i < arr.length; i ++)
    {
      //Boolean is an object wrapper to convert to true/false
      trueOrFalse = Boolean(arr[i]);
      
      if (trueOrFalse) //only run if the
        {
          //Copy element to a new array
          tempElement = arr[i];
          tempArray.push(tempElement);
        }
     }
  return tempArray;
}

bouncer([7, "ate", "", false, 9]);

//Finished this algorithm while studying with FCC group @ Simple 01/30/18