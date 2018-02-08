
function rot13(str) { // LBH QVQ VG!
  
  // A = 65, Z = 90. If charCode is in this range, add 13. Will need to wrap around as well.
  var stringCharCode;
  var upperCharRange = 90;
  var lowerCharRange = 65;
  var decodedString = "";
  
  // Check each letter in the string, only change if it meets A-Z conditions
  for (var i = 0; i < str.length; i++)
    {
      stringCharCode = str.charCodeAt(i);
      if (stringCharCode <= upperCharRange && stringCharCode >= lowerCharRange)  // A-Z?
        {
          stringCharCode -= 13; // Set back to original, shift 13 spots back.
          
          if (stringCharCode < lowerCharRange)
            {
              // Move past A? Go back around to Z
              stringCharCode = upperCharRange + 1 - (lowerCharRange - stringCharCode); 
            }
        }
      decodedString += String.fromCharCode(stringCharCode);
    } 
  
  return decodedString;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
