 let personagem = {
    nome: 'juarez',
    idade: 90,
    pais: 'brasil',
    olhos: ['azul', 'preto'],
    caracteristicas: {
        forca: 20,
        magia: 5,
        stamina: 15
    }
 }

//trocar algum dado do array:
personagem.nome = 'maciel'
console.log(personagem)

personagem.caracteristicas.forca = 50

console.log(personagem.caracteristicas.forca)

personagem.olhos.push('verde')

console.log(personagem.olhos)