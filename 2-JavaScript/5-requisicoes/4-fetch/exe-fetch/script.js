const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
//variavel de usuario
let indexUser = 0;
let users = '';

window.addEventListener("DOMContentLoaded" , function loadPosts(){
    //fetch() retorna uma promessa
    //faço a requisiçao
    fetch('https://jsonplaceholder.typicode.com/users')
        //vou solicitar e receber p resultado
        .then(function(resultado){//quando ja tiver resultado:
            return resultado.json() //retorna uma promise e ja transforma em json
        })
        .then(function(json){//quando tranformar em json eu recebo ele aqui
            users = json;//aqui estou mandando meu json para uma funçao que vai montar ele no html

        })

})
function montarBlog(indexUser){
    console.log(users[indexUser])
    document.getElementById('name').innerHTML = users[indexUser].name
    document.getElementById('username').innerHTML = users[indexUser].username
    document.querySelector('.email').innerHTML = users[indexUser].email
    document.getElementById('street').innerHTML = users[indexUser].address.street
    document.getElementById('suite').innerHTML = users[indexUser].address.suite
    document.getElementById('city').innerHTML = users[indexUser].address.city
    document.getElementById('zipcode').innerHTML = users[indexUser].address.zipcode
    document.getElementById('phone').innerHTML = users[indexUser].phone
    document.getElementById('website').innerHTML = users[indexUser].website
}

nextBtn.addEventListener("click" , () =>{
    indexUser ++;
    if (indexUser > users.length - 1) {
        indexUser = 0;
      }
    montarBlog(indexUser);
})

prevBtn.addEventListener("click" , () =>{
    indexUser --;
    if (indexUser < 0) {
        indexUser = users.length - 1;
      }
    montarBlog(indexUser);
})