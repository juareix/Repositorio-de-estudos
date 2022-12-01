let pessoa = {
    nome: 'juarez',
    sobrenome: 'maciel',
    idade: 90,
    nomeCompleto: function(){
        return this.nome +" "+ this.sobrenome
    }  
}

console.log(pessoa.nomeCompleto()); 