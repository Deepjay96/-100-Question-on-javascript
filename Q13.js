// write a function that takes as input and returns the count of vowels in that string
function countVowels(a) {
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    if (
      a[i] == "a" ||
      a[i] == "e" ||
      a[i] == "i" ||
      a[i] == "o" ||
      a[i] == "u" ||
      a[i] == "A" ||
      a[i] == "E" ||
      a[i] == "I" ||
      a[i] == "O" ||
      a[i] == "U"
    ) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Hello jay AAiee"));
