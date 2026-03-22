//  Divisibility Checker

function checkDivisibility(num) {
    let divBy2 = num % 2 === 0;
    let divBy3 = num % 3 === 0;
    let divBy5 = num % 5 === 0;
    
    console.log(`Divisible by 2: ${divBy2}`);
    console.log(`Divisible by 3: ${divBy3}`);
    console.log(`Divisible by 5: ${divBy5}`);
    console.log(`Divisible by 2, 3, and 5: ${divBy2 && divBy3 && divBy5}`);
    console.log("---");
}

// Test values
[60, 12, 25, 45, 7].forEach(num => {
    checkDivisibility(num);
});