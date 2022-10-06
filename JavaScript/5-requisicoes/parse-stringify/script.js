//o json vem em formato de string assim:
let pessoa = '{"nome" : "juarez"}'
console.log(pessoa)

//o JSON.parse() transforma ele em json real
pessoa = JSON.parse(pessoa)
console.log(pessoa)

//o JSON.stringify transforma o json em string para envio
pessoa = JSON.stringify(pessoa)
console.log(pessoa)