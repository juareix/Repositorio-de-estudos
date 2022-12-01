function limpar(){
    document.getElementById('texto').classList.remove('azul')
    document.getElementById('texto').classList.remove('vermelho')
    document.getElementById('texto').classList.remove('verde')
}

function azul(){
    limpar();
    document.getElementById('texto').classList.add('azul')
}
function vermelho(){
    limpar();
    document.getElementById('texto').classList.add('vermelho')
}
function verde(){
    limpar();
    document.getElementById('texto').classList.add('verde')
}