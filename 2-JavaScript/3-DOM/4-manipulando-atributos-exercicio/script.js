function animalImagem(animalImagem , nomeAnimal){
    document.querySelector('.imagem').setAttribute('src' , animalImagem)
    document.querySelector('.imagem').setAttribute('data-animal' , nomeAnimal )
}

function exibir(){
    let animal = document.querySelector('.imagem').getAttribute('data-animal')
    alert(animal)
}