function situ(media) {
    if (media == '') {
        return ''
    } if (media >= 70){
        return 'Aprovado'
    } else if (media >= 50) {
        return 'Recuperação'
    } else {
        return 'Reprovado'
    }
}

function mediaGeral(medias) {
    var soma = 0
    for(const nota of medias) {
        if (!isNaN(parseInt(nota))) {
            soma += parseInt(nota)
        } else {
            return ''
        }
    }
    return (soma / medias.length).toFixed(2)
}  

export { situ, mediaGeral }