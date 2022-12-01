let idades = [367, 888, 394, 990];

let ok = idades.every((value) =>{
    return value < 18
})
console.log(ok)
if(ok){
    console.log('maiores q 18')
}
else{
    console.log('nao sao')
}

//verifica se todos os itens satisfazem a condição da funçao, precisa que todos 
//satisfaçam para que retorne true