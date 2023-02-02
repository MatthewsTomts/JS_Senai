var linha = 1
var notas = 1

function adicionar() {
    var corpo = document.getElementById('tbody')
    linha += 1
    if (linha > 10) {
        alert('Limite de linhas')
    } else {
        corpo.innerHTML += `
        <tr>
            <th>${linha}</th>
            <td><input type="text" class="form-control" id="" placeholder="nome"></td>
            <td><input type="number" class="form-control" id="" placeholder=""></td>
            <td><input type="number" class="form-control" id="" placeholder=""></td>
            <td><input type="number" class="form-control" id="" placeholder=""></td>
            <td><input type="number" class="form-control" id="" placeholder=""></td>
            <td><output></output></td>
            <td><output></output></td>
        </tr>`
    }
}