 //promises criada
 function pegarTemperatura(){
    return new Promise(
        function(resolve, reject){
            console.log('pegando temperatura');

            setTimeout(function(){
                resolve('40 na sombra');
            }, 2000)
        }
    )
 }

 //usando a promise

 let temp = pegarTemperatura();
 temp.then(function(resultado){
    console.log('temperatura: ' + resultado)
 })