// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

/** 
# Problem solving tips:

Keep in mind that this is a small part of the entire journey:
1. Understand the problem - reflect the question back into your our words.
    -  Do you understand all the words used in stating the problem?
    -  What are you asked to find or show?
    -  Can you restate the problem in your own words?
    -  Can you think of a picture or diagram that might help you understand the problem?
    -  Is there enough information to enable you to find a solution?

2. Devise a plan
    * Guess and check           |   * Look for a pattern
    * Make an orderly list      |   * Draw a picture
    * Eliminate possibilities   |   * Solve a simpler problem
    * Use symmetry              |   * Use a model
    * Consider special cases    |   * Work backwards
    * Use direct reasoning      |   * Use a formula
    * Solve an equation         |   * Be ingenious

3. Carry out the plan
    * Third. Carry out your plan.
    * Carrying out your plan of the solution, check each step. Can you see clearly that the step is correct? Can you prove that it is correct?

4. Look back -refactor
    * Fourth. Examine the solution obtained.
    * Can you check the result? Can you check the argument?
    * Can you derive the solution differently? Can you see it at a glance?
    * Can you use the result, or the method, for some other problem?

*/

// The caesar() function in the src/caesar.js file has three parameters:

// input refers to the inputted text to be encoded or decoded.
// shift refers to how much each letter is "shifted" by. 

// A positive number means shifting to the right (i.e. "A" becomes "D") whereas a negative number means shifting to the left (i.e. "M" becomes "K").
// encode refers to whether you should encode or decode the message. By default it is set to true.
// When building the function, keep the following constraints and rules in mind:

// If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.
// Spaces should be maintained throughout, as should other non-alphabetic symbols.
// Capital letters can be ignored.
// If a letter is shifted so that it goes "off" the alphabet (e.g. a shift of 3 on the letter "z"), it should wrap around to the front of the alphabet (e.g. "z" becomes "c").

// caesar("thinkful", 3); //> 'wklqnixo'
// caesar("thinkful", -3); //> 'qefkhcri'
// caesar("wklqnixo", 3, false); //> 'thinkful'

// caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
// caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'

// caesar("thinkful"); //> false
// caesar("thinkful", 99); //> false
// caesar("thinkful", -26); //> false

// what's the output? input? return?

const caesarModule = (function () {
  // you can add any code you want within this function scope

  //creating an alphabet to reference the encoded or decoded message
  const alphabet = [
    'a','b','c','d','e','f','g',
    'h','i','j','k','l','m','n',
    'o','p','q','r','s','t','u',
    'v','w','x','y','z'
  ];

  // charCodeAt() - The zero-based index of the desired character. 
  // If there is no character at the specified index, NaN is returned.
  // Returns the Unicode value of the character at the specified location.

  //creating an "alphabet boundary/limit/wrap-around" to ref our characters
  const LIMIT = {
    start: 'a'.charCodeAt(),
    end: 'z'.charCodeAt(),
  }

  // by 🧸 teddy
  function caesar(input, shift, encode = true) {
    if (!shift) return false; 
    if(shift < -25 || shift > 25) return false;
    if (encode === false) {
      shift = shift * -1; 
    }
    // set the inputted message to lowercase
    input = input.toLowerCase();
    return input.split("").reduce((accResult, char) => { // "t", "r", "e", "e"
      const code = char.charCodeAt();
      if(code < LIMIT.start || code > LIMIT.end) return accResult + char;

      let shifted = code + shift;
      if(shifted > LIMIT.end) {
        shifted = LIMIT.start + (shifted - LIMIT.end - 1)
      } else if(shifted < LIMIT.start) {
        shifted = LIMIT.end - (LIMIT.start - shifted - 1)
      }

      return accResult + String.fromCharCode(shifted)
    }, "");

  }
  return {
    caesar,
  };
})();

//   function caesar(input, shift, encode = true) {
//     // If no shift OR shift === 0 OR shift < -25 OR shift > 25 
//     if (!shift || shift === 0 || shift < -25 || shift > 25) {
//       return false; 
//     };

//     // If encode = false
//     if (encode === false) {
//       // then the message will be decoded and run in reverse to shift number
//       shift = shift * -1; 
//     };
    
//     // set the inputted message to lowercase
//     input = input.toLowerCase();
//     // converting input to string input to array of characters
//     input = [...input];
//     // input can be mapped where each character can shift based on the parameter
//     input = input.map((character) => {
//         // if character is not a letter in the alphabet then return the character
//        if (!alphabet.includes(character)) return character;

//         // if char is letter in the alphabet 
//        if (alphabet.includes(character)) {
//          // And if the indices of the character in the alphabet plus the function parameter shift is 26 or more
//          if (alphabet.indexOf(character) + shift > 25) {
//            // then loop over the alphabet array by subtracting 26 from the index of the character, 
//            // and the shift parameter return to the start of the alphabet array index at 0
//            return (alphabet[(alphabet.indexOf(character) + shift) - 26]);
//          };
//          // And if the indices of the character in the alphabet plus the function parameter shift is less than 0
//          if (alphabet.indexOf(character) + shift < 0) {
//            // then loop over the alphabet array by adding 26 from the from the index of the character,
//            // and the shift parameter return to the end of the alphabet array index at 25
//            return (alphabet[(alphabet.indexOf(character) + shift) + 26]);
//          } else {
//            // otherwise return the character's index within the alphabet array plus shift
//            return alphabet[(alphabet.indexOf(character) + shift)];
//          };
//        };
//        // turning the array of characters back into a string
//      }).join("");
   
//   }

//   return {
//     caesar,
//   };
// })();

module.exports = { caesar: caesarModule.caesar };
