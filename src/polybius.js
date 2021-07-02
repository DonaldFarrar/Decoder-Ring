// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

    // Obj showing the numbers/letters used for encoding
    const encoder = {'a':'11', 'b':'21', 'c':'31', 'd':'41', 'e':'51', 'f':'12', 'g':'22', 'h':'32', 'i':'42', 'j':'42', 'k':'52', 'l':'13', 'm':'23', 'n':'33',
      'o':'43', 'p':'53', 'q':'14', 'r':'24', 's':'34', 't':'44', 'u':'54', 'v':'15', 'w':'25', 'x':'35', 'y':'45', 'z':'55'}
    //Obj showing the numbers/letters used for decoding
    const decoder = {'11':'a', '21':'b', '31':'c', '41':'d', '51':'e', '12':'f', '22':'g', '32':'h', '42':'(i/j)', '52':'k',
    '13':'l', '23':'m', '33':'n', '43':'o', '53':'p', '14':'q', '24':'r', '34':'s', '44':'t', '54':'u', '15':'v', '25':'w', 
    '35':'x', '45':'y', '55':'z'}


function encodeHelpFunc(item){
  //if you are encoding transferring the message into a coded message(pair of numbers)
  let newStr1 = "";
  for (let i = 0; i < item.length; i++){
    const char = item[i]
    if(encoder[char]) {
      newStr1 += encoder[char]
    } else if(!encoder[char]) {
      newStr1 += " ";
    }
  return newStr1;
  }
}
//hello world = 3251131343 2543241341
function  decodeHelpFunc(item) {
  let newStr2 = "";
  for (let i = 0; i < item.length; i+=2) {
     let numb = item[i];
     if(numb === " ") {
      newStr2 += " ";
      i--;
     } else {
     numb += item[i+1];
     newStr2 += decoder[numb];
     }
  }
  return newStr2;
}
  function polybius(input, encode = true) {
    // your solution code here
    // checking to see if there is a message to encode.
    // if there is not a message then return false
    if(input.split(" ").join("").length % 2 != 0 && !encode) { // When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.
      return false;
    }
//capital letters can be ignored
  const codedMsg = input.toLowerCase();
  // if encode is false I want to decode
  // if encode is missing and/or true then encode
    if(!encode) {
      return decodeHelpFunc(codedMsg);
      } else if (encode === true){
        return encodeHelpFunc(codedMsg);
      }
    }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };


// console.log(polybiusModule.polybius("3251131343 2543241341", false));
// // let result = polybiusModule.polybius("Hello world");
// // console.log(result);



// const decodeMsg = input.toLowerCase().split("");
// //const decodeMsg = decoder.toLowerCase().split("");
// const output = "";


// //trying to loop through  either a decode or encode and compare it to the input
// //for (let message in input) 
// for (let i = 0; i < decodeMsg.length; i++){

// let objMsg = "";

// if(Object.values(decoder) === decodeMsg || Object.keys(encoder) === decodeMsg) {
// //return Object.values(decoder).push(arrMsg)
// //return arrMsg.filter(decoder);

// console.log(arrMsg.filter(decoder));
  

// }
// }

// //console.log(decoder[message])



// return decoder[message];
