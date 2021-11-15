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
    input = [...input];
    let alpha = input.reduce((alphaTotal, char) => {
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
    let finalResult = "";

    // setting input to lowercase
    input = input.toLowerCase();

    // turning the alphabet parameter (string) into an array
    alphabet = [...alphabet];

    // abc vairable (string) into an array
    abc = [...abc];

    // for/in loop to iterate through the input
    for (let character in input) {
      // if input contains spaces
      if (input[character] === " ") { 
        // keep the spaces (no change)
        finalResult += input[character];
      };
      //for/in loop to iterate throught the abc variable that was created to determine the indices for the letters/characters in the alphabet
      for (let letter in abc) {
        // if encode = true
        if (encode === true) {
          // if the input's character is the same as the abc variable letter 
          if (input[character] == abc[letter]) {
            // then use the alphabet parameter to locate the index of the letter and add it to the final result
            finalResult += alphabet[letter];
          }
          // otherwise if encode = false
        } else if (encode === false) {
          // then if the input's character is equal to the alphabet's letter 
          if (input[character] === alphabet[letter]) {
            // then use the abc variable to identify the character in the decode and add it to the final result
            finalResult += abc[letter];
          }
        }
      }
    }
    return finalResult;

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
