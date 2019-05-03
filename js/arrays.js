let hobbies = ["firstArray", "SecondArray", "ThirdArray"];

printHobbies();
function printHobbies() {
    console.log(`I like ${hobbies.length} things:`);
    for (let index = 0; index < hobbies.length; index++) {
        const element = hobbies[index];

        console.log(`I like ${element}`);
        
    }
}
// 2nd option:
printHobbies2(hobbies);
function printHobbies2(passedArray) {
    console.log(`I like ${passedArray.length} things`);
    for (let index = 0; index < passedArray.length; index++) {
        let element = passedArray[index];
        console.log('I like ' + element);
    }  
}