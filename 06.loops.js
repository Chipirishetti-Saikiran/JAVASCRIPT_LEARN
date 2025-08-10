//for
for (let i = 0; i < 5; i++) {
  console.log("i =", i);
}


//while
var i = 0;
while (i < 5) {
  console.log("i =", i);
  i++;
}


//do while
let i = 0;
do {
  console.log("i =", i);
  i++;
} while (i < 5);


//break
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i); // Outputs 1, 2
}


//continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i); // Outputs 1, 2, 4, 5
}
