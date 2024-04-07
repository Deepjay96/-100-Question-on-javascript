// write a function to find n factorial

function factorial(n) {
  let fact = 1;
  if (n >= 0) {
    for (let i = n; i > 0; i--) {
      fact = fact * i;
    }

    console.log(fact);
  }
}

factorial(5);
