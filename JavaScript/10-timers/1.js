//setInterval executa uma função em intervalos especificado e fica repertindo
/*setInterval(function stime(){
    let d = new Date()

    let seconds = d.getSeconds();

    console.log(seconds)
}, 1000)*/


//este executado a função apenas uma vez apos o tempo setado acabar
console.log('espere 3 segundos')
setTimeout(function stime(){
    console.log(´rodou´)
}, 3000)