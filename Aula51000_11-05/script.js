var url = 'https://www.dnd5eapi.co/api/'

function ex() {
    // Crie um objeto URL com a URL atual
    var url = new URL(window.location.href);

    // Obtenha o valor do parâmetro 'id' da URL
    var id = url.searchParams.get("index");

    if (id == null) {
        index()
    } else {
        page1()
    }
}

function index() {
    let lista = document.getElementById('listagem')
    var params = new URLSearchParams(location.search);
    var pag = parseInt(params.get('pag'));

    if (pag == null || isNaN(pag)) {
        pag = 0;
    }

    var paginacao = pag * 10

    fetch(url)
    .then((response) => response.json())
    .then(json => {
    // Do something with the data
    index = json

    var chaves = Object.keys(index)
    var tamanhoPag = Math.floor(chaves.length / 10)

    for (i = paginacao; i < paginacao + 10; i++) {
        var formattedKey = chaves[i]
        .replace(/-/g, ' ')
        .toLowerCase()
        .replace(/(^|\s)\S/g, function(firstLetter) {
            return firstLetter.toUpperCase();
        });

        index = chaves[i]
        lista.innerHTML += `<li><a href='./index.html?index=${index}'>${i+1}. ${formattedKey}</a></li>`
    }

    document.getElementById('paginacao').innerHTML = `<a href='./index.html?pag=0&index=${index}'>
    First</a>`

    for (j = pag - 1; j < pag + 4; j++) {
        if (j > 0) {
            document.getElementById('paginacao').innerHTML += ` <a href='./index.html?pag=${j-1}&index=${index}'>
            ${j}</a> `
        }
    }

    document.getElementById('paginacao').innerHTML += `<a href='./index.html?pag=${tamanhoPag}&index=${index}'>
    Last</a>`

    document.getElementById('paginacao').innerHTML += "<br><a href='./index.html'>Go back</a>"
    });

    fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())
    .then(json => {
    // Do something with the data
    document.getElementById('Chuck').innerHTML = json.value
    });
}

function page1() {
    var params = new URLSearchParams(location.search);
    var index = params.get('index');
    let lista = document.getElementById('listagem')
    var pag = parseInt(params.get('pag'));

    if (pag == null) {
        pag = 0;
    }

    var paginacao = pag * 10

    document.getElementById('Titulo').innerHTML = index.replace(/-/g, ' ')
    .toLowerCase()
    .replace(/(^|\s)\S/g, function(firstLetter) {
        return firstLetter.toUpperCase();
    });

    fetch(url + index)
    .then((response) => response.json())
    .then(json => {
    // Do something with the data
    spells = json.results
    var tamanhoPag = Math.floor(spells.length / 10)

    for (i = paginacao; i <  paginacao + 10; i++) {
        lista.innerHTML += `<li><a href='./pageDesc.html?index=${index}&desc=${spells[i].index}'>${i+1}. ${spells[i].name}</a></li>`
    }

    document.getElementById('paginacao').innerHTML = `<a href='./index.html?pag=0&index=${index}'>
    First</a>`

    for (j = pag - 1; j < pag + 4; j++) {
        if (j > 0) {
            document.getElementById('paginacao').innerHTML += ` <a href='./index.html?pag=${j-1}&index=${index}'>
            ${j}</a> `
        }
    }

    document.getElementById('paginacao').innerHTML += `<a href='./index.html?pag=${tamanhoPag}&index=${index}'>
    Last</a>`

    document.getElementById('paginacao').innerHTML += "<br><a href='./index.html'>Go back</a>"
    });


    fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => response.json())
    .then(json => {
    // Do something with the data
    console.log(json)
    document.getElementById('cat').setAttribute('src', json[0].url)
    });
}

function pageDesc() {
    var params = new URLSearchParams(location.search);
    var index = params.get('index');
    var desc = params.get('desc');
    let div = document.getElementById('card');

    fetch(url + index + "/" + desc)
    .then(response => response.json())
    .then(json => {
        desc = json
        div.innerHTML = `
            <h1>${desc.name}</h1>
            <p>${desc.desc}</p>`

    })
}
