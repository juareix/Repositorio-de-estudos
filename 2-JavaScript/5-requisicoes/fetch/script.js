function loadPosts(){
    document.getElementById('posts').innerHTML = 'carregando...'
    //fetch() retorna uma promessa
    //faço a requisiçao
    fetch('https://jsonplaceholder.typicode.com/posts')
        //vou solicitar e receber p resultado
        .then(function(resultado){//quando ja tiver resultado:
            return resultado.json() //retorna uma promise e ja transforma em json
        })
        .then(function(json){//quando tranformar em json eu recebo ele aqui
            montarBlog(json);//aqui estou mandando meu json para uma funçao que vai montar ele no html
        })
        .catch(function(error){
            console.log('deu merda')
        });
}

function montarBlog(lista){
    let html = '';

    for (let i in lista){
        html += '<h3>'+ lista[i].title +'</h3>'
        html += lista[i].body+'</br>'
        html += '<hr/>'
    }
    document.getElementById('posts').innerHTML = html;
}