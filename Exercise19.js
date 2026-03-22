let sentence = "I love learning JavaScript";
let count = 0;

for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].toLowerCase() === "a") {
        count++;
    }
}

console.log(`The letter "a" appears ${count} times.`);