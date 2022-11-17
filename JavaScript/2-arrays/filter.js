let fruits = ['banana' , 'laranja' , 'maçâ' , 'pêra']

//o filter(value, index, array) onde posso trocar o nome pra qualquer
//mas cada um deles representa uma situção diferente, no caso do exemplo o value recbeu nome de item
//value = valor em si de cada item do array
//index = valor do indice do item
//array = o array inteiro
// posso usar um deles ou todos para fazer a filtragem
let bigFruits = fruits.filter((item) => {
    if(item.length > 4){
        return true;
    }
    else{
        return false;
    }
})

console.log(bigFruits)
console.log(fruits)