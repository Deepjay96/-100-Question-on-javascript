// Hash tag Generator

// let s = "my name is jaydeep girase";

function convert(s) {
  let newString = "";

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) != " ") {
      newString = newString + s.charAt(i);
    } else {
      newString = newString + s.charAt(i + 1).toUpperCase();
      i++;
    }
  }

  newString = "#" + newString;
  newString = newString.replace(
    newString.charAt(1),
    newString.charAt(1).toUpperCase()
  );
  console.log(newString);
}

convert(
  "his name is jaydeep girase where you call this number"
);
