let idades = [367, 888, 394, 990];

let ok = idades.some((value) =>{
    return value.length > 18
})

if(ok == true){
    console.log('maiores q 18')
}
else{
    console.log('nao sao')
}