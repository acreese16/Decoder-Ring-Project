// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  // creating decode object for reference of the function
  const decodeKey = {
    11: "a", 21: "b", 31: "c", 41: "d", 51: "e",
    12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "k",
    13: "l", 23: "m", 33: "n", 43: "o", 53: "p",
    14: "q", 24: "r", 34: "s", 44: "t", 54: "u",
    15: "v", 25: "w", 35: "x", 45: "y", 55: "z",
  };
    
  // creating a encode object for reference of the function  
  const encodeKey = {
    a: 11, b: 21, c: 31, d: 41, e: 51,
    f: 12, g: 22, h: 32, i: 42, j: 42, k: 52, 
    l: 13, m: 23, n: 33, o: 43, p: 53, 
    q: 14, r: 24, s: 34, t: 44, u: 54, 
    v: 15, w: 25, x: 35, y: 45, z: 55,
  }

  function polybius(input, encode = true) {
    // your solution code here 

    // creating length variable to support the isEven function by removing any spaces from input
    let length = input.replace(/\s/g, "").length
    // isEven Helper function to determine whether a number input is an even or odd number
    function isEven(length) {
      if (length % 2 == 0) return true;
    };

    // if encode = false and input is odd then return false
    if (encode === false && !isEven(length)) return false;

    // set the inputted message to lowercase
    input = input.toLowerCase();

    // creating empty variable to store new encoded and decoded value in
    let splitString;

    // store encoded key object as our key when true 
    let key = encodeKey; 

    if(encode) { // 1. When encoding, your output should still be a string.
      //splitting the input into individual letters array to determine the corresponding encode number
      splitString = input.split("");
    } else {
      key = decodeKey; // store decoded key object as our key when false
      // set the splitString variable to an array by using regular expression JS to match up 2 numbers that include numbers between 0 and 5, excluding the spaces
      splitString = input.match(/[0-5]{2}|\s/g);
      // return a string of the decoded message by mapping out the splitString array
      return splitString.map((space) => key[space] || " ").join("");
      }
      // return a string of the encoded message by mapping out the splitString array
    return splitString.map((space) => key[space] || " ").join("");
  }
  

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
