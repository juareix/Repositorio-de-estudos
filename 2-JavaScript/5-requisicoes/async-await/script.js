async function loadPosts(){
    document.getElementById('posts').innerHTML = 'carregando...'
    //fetch() retorna uma promessa
    //faço a requisiçao
    let req = await fetch('https://jsonplaceholder.typicode.com/posts')//usa o fetch e atribui a uma variavel
    let json = await req.json();//ta fazendo a transformacao do json e atribuindo a uma variavel
    montarBlog(json);//ta mandando o json convertindo para a funçaõ montar
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