// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  //write a helper function that changes the decoded/encoded charcters to a new one
function charChange(code, letter1, letter2) {
  return code.map((message) => {
    // find the index of the encoded/decoded message to match the index of the second encoded/decoded message
    const result = letter1.indexOf(message); 
    if (result === -1) return message;
    return letter2[result];
  })
}

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    // see if the alphabet even exist
    if(!alphabet || alphabet.length != 26 || alphabet === 0) 
      return false;

      //set variables for encryting or decrypting message
    const characters = 'abcdefghijklmnopqrstuvwxyz'.split("");
    const translation = alphabet.toLowerCase().split("");
    const message = input.toLowerCase().split("");
    //loop through...............

    for (let i = 0; i < translation.length; i++) {
      //second iteration needs to be equal to first with an increment of 1
      for (let j = i + 1; j < translation.length; j++) {
        if (translation[i] === translation[j]) 
          return false
      }
    }
    //writing a conditional if needing to encode
    if (encode) return charChange(message, characters, translation).join("");
    return charChange(message, translation, characters).join("")
  }
  
  return {
    substitution,
  };
})();


module.exports = { substitution: substitutionModule.substitution };

