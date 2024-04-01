function checkTriangleType(a, b, c) {
  if (a == b && b == c && a == c) {
    return  'equilateral'
  } else if (a == b) {
      return 'isosceles'
  } else if (b == c) {
      return 'isosceles'
  } else if (a == c) {
      return 'isosceles'
  } else {
       return 'scalene'
  }
}

console.log(checkTriangleType(5,21,5))
