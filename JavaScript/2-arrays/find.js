const numbers = [4, 9, 16, 25, 29];
let first = numbers.find((value) =>{
  return value > 5;
});

console.log(first)

//retornará o primeiro valor que satisfzaer a condição da função