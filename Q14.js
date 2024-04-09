// write a function that return true when number is power of two

function powr(wr) {
  let c = false;
  for (let i = 1; i <= wr; i++) {
    if (Math.pow(2, i) === wr) {
      c = true;
    }
  }

  return c;
}

console.log(powr(128));
