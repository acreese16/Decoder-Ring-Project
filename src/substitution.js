// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  
  // creating a 26 uniquie character alpha variable
  let abc = "abcdefghijklmnopqrstuvwxyz";
  // using a helper function to determine if there are unique characters in the alphabet 
  function otherCharacters(input){
    const alpha = input.split("").reduce((alphaTotal, char) => {
      alphaTotal[char] = true;
      return alphaTotal;
    }, {})
    return Object.keys(alpha).length === input.length;
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here

    // if there is no alphabet or the length of the alphabet is not 26 characters return false
    if(!alphabet || alphabet.length !== 26) return false;
    // if there are not unique characters in the alphabet then return false
    if(!otherCharacters(alphabet)) return false;

    // creating empty variable to hold encoded and decoded values
    let splitString;

    // setting input to lowercase
    input = input.toLowerCase();

    // turning the alphabet parameter (string) into an array
    alphabet = [...alphabet];

    // abc vairable (string) into an array
    abc = [...abc];


    // if encode = false then decode the message
    if (encode === false) {
      // creating a string result variable for the decode
      let decodeResult = "";
      //  turning the input from a string into an array of individual characters
      input = [...input];
      // for each element in the input array, use the alphabet to decode the input
      input.forEach((userInput) => {
        let alphaNum = alphabet.indexOf(userInput);
        
        // when the character is a space then input a space otherwise decode the input
        decodeResult += userInput === " " ? " " : abc[alphaNum];
      });
      return decodeResult;
    } else {
      let encodeResult = "";
      abc = [...abc]; // string to array
      // for each character in the abc variable, find the corresponding index and character for the inputted message
      abc.forEach((character, index) => {
        // 
        splitString[character] = alphabet[index];
        encodeResult[alphabet[index]] = character;
      });
      return encodeResult;
    }




  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
