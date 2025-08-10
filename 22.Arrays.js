//Arrays in JavaScript

let arr = [1, 2, 3, "hello", true];


//Creation of array
let arr1 = [1, 2, 3]; // literal
let arr2 = new Array(4, 5, 6); // using constructor
let arr3 = Array.from("hello"); // ['h', 'e', 'l', 'l', 'o']


//length
var a=arr.length;
console.log(a);

//indexOf()
var b=arr.indexOf(3);
console.log(b);

//push
arr.push(25);
console.log(arr);

//pop
arr.pop();
console.log(arr);


//unshift():Adds elements at the beginning.
arr.unshift(1);
console.log(arr);

//shift():Removes first elememt in the array
arr.shift(35);
console.log(arr);


//splice(start, deleteCount, ...items)
//Adds/removes/replaces elements in-place.
arr.splice(1, 2); 
console.log(arr);
arr.splice(1, 0, 100);
console.log(arr);


//map:Returns a new array with the result of calling a function on every elements
let nums = [1, 2, 3];
let squares = nums.map(n => n * n); // [1, 4, 9]
console.log(squares);


//filter:Returns a new array with elements that pass a test.
let num = [10, 20, 30];
let result = num.filter(n => n > 15); // [20, 30]
console.log(result)


//reduce:Reduces array to a single value.
let nu= [1, 2, 3, 4];
let sum = nu.reduce((acc, val) => acc + val, 0); // 10
console.log(sum);


//sort
arr.sort()
console.log(arr);


//find 
let k=arr.find(n=>n>2);
console.log(k);


//findIndex()
let aa=arr.findIndex(n=>n<2);
console.log(aa);


//every:Returns true if all elements satisfy the condition.
let arrs = [2, 4, 6];
let allEven = arrs.every(n => n % 2 === 0); // true
console.log(allEven)


//some:Returns true if at least one element satisfies the condition.
let arrb = [1, 3, 5, 8];
let hasEven = arrb.some(n => n % 2 === 0); // true
console.log(hasEven);


//reverse
arr.reverse();
console.log(arr);


//join
let ar = ["a", "b", "c"];
let str = ar.join("-"); // "a-b-c"
console.log(str);


//concat 
let arr11 = [1, 2];
let arr22 = [3, 4];
let res = arr11.concat(arr22); // [1, 2, 3, 4]
console.log(res)