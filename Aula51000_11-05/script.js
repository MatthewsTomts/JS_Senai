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
    console.log(index)
    var chaves = Object.keys(index)
    var tamanhoPag = Math.ceil(chaves.length / 10)

    for (i = paginacao; i < paginacao + 10; i++) {
        if (chaves.length == i) {
            break;
        }

        var formattedKey = chaves[i]
        .replace(/-/g, ' ')
        .toLowerCase()
        .replace(/(^|\s)\S/g, function(firstLetter) {
            return firstLetter.toUpperCase();
        });

        index = chaves[i]
        lista.innerHTML += `<li><a href='./index.html?index=${index}'>${i+1}. ${formattedKey}</a></li>`
    }

    document.getElementById('paginacao').innerHTML = `<a href='./index.html?pag=0'>
    First</a>`

    for (j = pag - 1; j < pag + 4; j++) {
        if (j > 0 && j <= tamanhoPag) {
            document.getElementById('paginacao').innerHTML += ` <a href='./index.html?pag=${j-1}'>
            ${j}</a> `
        }
    }

    document.getElementById('paginacao').innerHTML += `<a href='./index.html?pag=${tamanhoPag-1}'>
    Last</a>`

    document.getElementById('paginacao').innerHTML += "<br><a href='./index.html'>Go back</a>"
    });

    fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())
    .then(json => {
    // Do something with the data
    document.getElementById('Chuck').innerHTML = json.value
    });

    fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => response.json())
    .then(json => {
    document.getElementById('cat').setAttribute('src', json[0].url)
    });
}

function page1() {
    var params = new URLSearchParams(location.search);
    var index = params.get('index');
    let lista = document.getElementById('listagem')
    var pag = parseInt(params.get('pag'));
    document.title = index.replace(/-/g, ' ')
    .toLowerCase()
    .replace(/(^|\s)\S/g, function(firstLetter) {
        return firstLetter.toUpperCase();
    });

    if (pag == null || isNaN(pag)) {
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
    options = json.results
    console.log(options)
    var tamanhoPag = Math.ceil(options.length / 10)

    for (i = paginacao; i <  paginacao + 10; i++) {
        if (options.length == i) {
            break;
        }

        lista.innerHTML += `<li><a href='./pageDesc.html?index=${index}&desc=${options[i].index}'>${i+1}. ${options[i].name}</a></li>`
    }

    document.getElementById('paginacao').innerHTML = `<a href='./index.html?pag=0&index=${index}'>
    First</a>`

    for (j = pag - 1; j < pag + 4; j++) {
        if (j > 0 && j <= tamanhoPag) {
            document.getElementById('paginacao').innerHTML += ` <a href='./index.html?pag=${j-1}&index=${index}'>
            ${j}</a> `
        }
    }

    document.getElementById('paginacao').innerHTML += `<a href='./index.html?pag=${tamanhoPag-1}&index=${index}'>
    Last</a>`

    document.getElementById('paginacao').innerHTML += "<br><a href='./index.html'>Go back</a>"
    });

    fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())
    .then(json => {
    // Do something with the data
    document.getElementById('Chuck').innerHTML = json.value
    });
    
    fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => response.json())
    .then(json => {
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
        console.log(desc)

        if (index == "ability-scores") {
            titulo = desc.full_name
            document.title = desc.full_name;
        } else {
            titulo = desc.name
            document.title = desc.name;
        }

        if (index == "classes") {
            descricao = ""
            for (classe = 0; classe < desc.proficiencies.length; classe++) {
                descricao += "<p>" + desc.proficiencies[classe].name + "</p>"
            }
        } else {
            descricao = "<p>" + desc.desc + "</p>"
        }

        div.innerHTML = `
            <h1>${titulo}</h1>
            <div id='desc'>${descricao}</div>
            <a href="./index.html?index=${index}">Go Back</a>`

        if (index == "ability-scores") {
            links = ''
            links +=  `<div id='links'>`

            for (j = 0; j < desc.skills.length; j++) {
                links += `<a href="./pageDesc.html?index=skills&desc=${desc.skills[j].index}">${desc.skills[j].name}</a>`
            }

            links +=  `</div>`
            div.innerHTML += links;
        }

        if (index == "skills") {
            div.innerHTML += `<a href="./pageDesc.html?index=ability-scores&desc=${desc.ability_score.index}">${desc.ability_score.name}</a>`
        }
    })
}
