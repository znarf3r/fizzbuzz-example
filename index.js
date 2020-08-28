/**
 *
 */

function fizzBuzz(n = 100) {
  for (let i = 1; i <= n; i++) {
    const isMultipleOfThree = i % 3 === 0;
    const isMultipleOfFive = i % 5 === 0;

    if (isMultipleOfThree && isMultipleOfFive) {
      console.log("FizzBuzz");
    } else if (isMultipleOfThree) {
      console.log("Fizz");
    } else if (isMultipleOfFive) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();
