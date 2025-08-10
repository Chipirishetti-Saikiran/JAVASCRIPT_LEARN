function sumAll(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10
//Collects all remaining arguments into an array.