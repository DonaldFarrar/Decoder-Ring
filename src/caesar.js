// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

/*
PSEUDO CODE

*/

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!input || !shift || shift > 25 || shift < -25 || shift === 0) {
      return false;
    }
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const letters = alphabet.toLowerCase().split("");

    //shiftAmount = 26 + (shift % 26);
    //shiftAmount = (26 + shift) % 26;
    //shiftAmount = 26 + shift
    
    //finding the math and using it to get the index of the input
   //trying to take the shift amount and move the input(message) to compare to the alphabet
    
    let inputArr = input.toLowerCase().split("");
    console.log(inputArr);

    alphaMap = new Map(); // a fancy object

    // iterate through the alphabet array
    // set alphabet character as key to alphaMap object
    // set value to the shifted character
    letters.map((letter)=>{
      let index = alphabet.indexOf(letter);
      let shiftedIndex = 0;
      let offset = 0;

      if (encode){
        shiftedIndex = index + shift;
      }else{
        shiftedIndex = index - shift;
      }

      if (shiftedIndex > 25){
        // have some logic to loop back around the alphabet
        offset = shiftedIndex - 26;
      }else if (shiftedIndex < 0){
        // have some logic to loop back around the alphabet
        offset = shiftedIndex + 26;
      }else{
        offset = shiftedIndex;
      }
      //console.log("letter: ", letter, "--->", alphabet[offset]);
      alphaMap.set(letter, alphabet[offset]);
    })

    // we want to iterate through the input array
    // transcribe the input letters to the new shifted letters
    const output = inputArr.reduce((acc, letter)=>{
      //write a conditonal
      if (letters.indexOf(letter) === -1) {
        acc += letter;
      } else {
      let shiftedLetter = alphaMap.get(letter);
     // console.log("letter: ", letter, "-->", shiftedLetter);
      acc += shiftedLetter;
      }
      return acc;
    }, "");

    return output;
    //console.log("final output: ", output);
  }

// let encoded = caesarModule.caesar("thinkful test", 2);
// let decoded = caesarModule.caesar(encoded, 2, false);

// console.log("encoded: ", encoded);
// console.log("decoded: ", decoded);

  return {
    caesar,
  
  };
})();

//caesarModule.caesar("thinkful", 8);

module.exports = { caesar: caesarModule.caesar };