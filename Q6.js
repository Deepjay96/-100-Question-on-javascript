// Write a function weather a string is Palidrome or not 

function isPalindrome(str) {
  str = str.toLowerCase();
  let new_str = str.split("").reverse().join("");

  return str === new_str ? true : false;
}

console.log(isPalindrome("DipID"))

