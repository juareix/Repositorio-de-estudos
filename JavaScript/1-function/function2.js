function porcentagem (n1 , n2) {
    let pct = (n1 / 100) * n2
    return pct
}

let x = 25
let y = 100

let pct = porcentagem(x , y)

console.log(`${x}% de ${y} é igual ${pct}`)