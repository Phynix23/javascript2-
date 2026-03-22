let fullName = "emeka chukwu okafor";
let words = fullName.split(" ");
let result = "";

for (let i = 0; i < words.length; i++) {
    let word = words[i];
    result += word[0].toUpperCase() + word.slice(1) + " ";
}

console.log(result.trim());