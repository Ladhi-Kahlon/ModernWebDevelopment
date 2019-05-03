function displayName(name) {

    console.log(`Hello, ${name}`)
};

displayName('Ladhi Kahlon');

let returnValue = tempConversion('c', 60);

console.log(returnValue);

function tempConversion(tempType, tempValue) {

    // let temperature = tempType;

    let r;

    if (tempType.toUpperCase() == 'F') {
        //convert Fherenheit to Celsius
        const fToCel = (tempValue - 32) * 5 / 9;
        // console.log(`Fherenheit ${tempValue}, is = to ${fToCel} Celsius`)
        r = fToCel;
    } else if (tempType.toUpperCase() == 'C') {
        //convert Celsius to Fherenheit
        const cToFahr = tempValue * 9 / 5 + 32;
        // console.log(`Celsius ${tempValue}, is = to ${cToFahr} Fherenheit`)
        r = cToFahr;
    } else {
        // console.log("enter valid value for convertion");
        throw('error');
    }

    return r;
}

