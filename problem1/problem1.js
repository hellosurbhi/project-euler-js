//This is the solution for Project Euler's problem #1.

//Find the sum of all the multiples of 3 or 5 below 1000.

// I really complicated this for myself initially
// by writing multiple if statements in a function
// which did give me a result but with 10 more lines
// than you currently see. I simplified it by
// removing the function entirely and adding the conditionals
// in a single if statement. I also used the += shortcut


exports.multiplesOf3and5 = (upto) => {
  let sum = 0;
  for (let i = 1; i < upto; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
      }
    }
  return sum
}

console.log(multiplesOf3and5(1000)); 

