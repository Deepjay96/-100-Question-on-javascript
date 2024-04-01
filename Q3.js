function countChar(a, b) {
  let c = 0;

  for (let i = 0; i < a.length; i++) {
    if (
      a.charCodeAt(i) == b.charCodeAt(0) ||
      a.charCodeAt(i) + 32 == b.charCodeAt(0) ||
      a.charCodeAt(i) - 32 == b.charCodeAt(0)
    ) {
      c++;
    }
  }

  console.log(c);
}

countChar("asAdaaefasd", "A");


