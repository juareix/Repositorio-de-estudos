//algoritmo que ordena os objetos em um array baseado
//no ano do carro

let cars = [
    {marca: 'fiat', year: 2018},
    {marca: 'gol', year: 2015},
    {marca: 'chevrolet', year: 2013},
]

cars.sort(function(a , b){
    return a.year - b.year
})

console.log(cars);