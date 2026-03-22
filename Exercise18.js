let weeklySavings = 2500;
let weeks = 12;
let balance = 0;

for (let week = 1; week <= weeks; week++) {
    balance += weeklySavings;
    console.log(`Week ${week}: ₦${balance}`);
}