let numeros = [1,2,3,4];
let outros = [...numeros, 5, 6, 7];

console.log(outros)

let info = {
    nome: 'bonieky',
    sobrenome: 'maciel' 
}

let novainfo = {
    ...info,
    idade: 12
}

console.log(info)
console.log(novainfo)