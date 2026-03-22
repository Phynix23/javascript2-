// Word Length Checker

function checkWordLength(word) {
    if (word.length < 5) {
      console.log(`${word} is a short word.`);
    } else if (word.length > 5) {
      console.log(`${word} is Medium`);
    } else {
      console.log(`${word} is Long`);
    }
  }

  ["hi", "hello", "Javascript"].forEach(word => {
    checkWordLength(word);
  });