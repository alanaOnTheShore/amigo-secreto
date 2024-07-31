let listaAmigos = [];

function adicionar() {
    let nomes = document.getElementById('nome-amigo');
    //condicional em seguida de recuperar o valor para checar
    if (nomes.value == '') {
        alert('Insira o nome do amigo!');
        return;
    }
    if (listaAmigos.includes(nomes.value)) {
        alert('Amigo já incluído!');
        return;
    }

    let listaExb = document.getElementById('lista-amigos');

    listaAmigos.push(nomes.value)  

    if (listaExb.textContent == '') {
        listaExb.textContent = nomes.value;   
    } else {
        listaExb.textContent = listaExb.textContent + ', ' + nomes.value;
    }
    nomes.value = '';
    
//não sei só copiei
    atualizarLista();
    atualizarSorteio();
}

function sortear(){
    //conferimos a quantidade mínima
    if (listaAmigos.length <= 3){
        alert('A quantidade mínima de amigos para sortear é 4!');
        return;
    }
    //chamamos a função fisher-yates
    embaralha(listaAmigos);
    let sorteio = document.getElementById('lista-sorteio');
    //criamos o laço para percorrer o array
    for (let i = 0; i < listaAmigos.length; i++) {
        //checamos se o loop chegou no final
        if (i == listaAmigos.length - 1) {
            //sorteio recebe ele mesmo + a posição percorrida + a primeira posição do array
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] +' --> ' + listaAmigos[0] + '<br/>';
        } else {
            //sorteio recebe ele mesmo + a posição percorrida + próxima posição do array
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] +' --> ' + listaAmigos[i + 1] + '<br/>';
        }
    }    
}
//exclui amigo indicado pelo index
function excluirAmigo(index) {
    listaAmigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}


function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}


function embaralha(lista) {
    //método fisher-yates
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    //importante não atribuirmos novas variáveis***
    listaAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}