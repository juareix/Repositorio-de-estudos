function nomeCompleto(nome, sobrenome){
    return `${nome} ${sobrenome}`
}

let completo = nomeCompleto('Juarez', 'Maciel')
console.log(completo)
//ou

console.log(nomeCompleto('Juarez', 'Maciel'))

//assim nao funciona com o return:
nomeCompleto('Juarez', 'Maciel')
//pois return precisa ser atribuido a algo