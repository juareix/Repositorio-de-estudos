function calcular (metragem, quartos) {
    let rst = 0
    if(quartos === 1){
        rst = 3000 * metragem
        return rst
    }
    else if(quartos === 2){
        rst = 3000 * metragem * 1.2
        return rst
    }
    else if(quartos === 3){
        rst = 3000 * metragem * 1.5
        return rst
    }
}

let metragem = 123
let quartos = 3
let preco = calcular(metragem, quartos)

console.log(`A casa custa ${preco}`)