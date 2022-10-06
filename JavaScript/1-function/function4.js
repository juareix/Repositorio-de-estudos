//funcoes dentro de funcoes
function square(x){
    return x * x
}

function addSquare (a, b){
    return square(a) + square(b)
}

console.log(addSquare(2, 3))

//ou posso fazer assim:
function addSquare1 (a, b){
    function square1(x){
        return x * x
    }

    return square1(a) + square1(b)
}
console.log(addSquare1(2, 3))