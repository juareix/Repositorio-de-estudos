let pessoa = {
    nome: 'juarez',
    sobrenome: 'maciel',
    idade: '34',
    social:{
        facebook: 'juju',
        instagram: 'jujuzinho'
    },
    nomeCompleto: function(){
        return this.nome +' '+ this.sobrenome
    }
}

//isso aqui é a descontrução
let {nome, sobrenome, idade} = pessoa;

console.log(nome, sobrenome, idade)