let numOne = 1;
let stringOne = '1';
console.log('double ==', numOne == stringOne);
console.log('triple ===', numOne === stringOne);

const date = new Date();
console.log(date);

const day = new Date().getDay();
console.log(day);

//  0 = Sunday 1 = Monday ....  6 = Saturday
if (day == 1) {
    console.log('Back to work');
}  
else if (day == 4) {
    console.log('Over the hump');
}
else if (day == 6 || day ==0) {
    console.log('Is is a weekday');
} else {
    console.log("It is a weekday");
}