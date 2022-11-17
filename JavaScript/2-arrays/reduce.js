const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce((total, value) => {
    return total + value;
  });

console.log(sum)