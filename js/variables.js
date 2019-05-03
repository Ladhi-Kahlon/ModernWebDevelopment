let x,y,z;

x=10;
y='10';
z=30;

console.log(`x is ${typeof x}`);
// console.log(`x is ${typeof y}`);
// console.log(x);
console.log(`x before change ${x}`);
var newX = x++;
console.log(`x after change ${x}`);
console.log(`New x is ${newX}`);
console.log(x==y);
let tDate = Date.now();
console.log(tDate)


let myDate = new Date('1/1/1970');
console.log(myDate);
console.log(myDate.getFullYear()-(new Date().getFullYear()));