function proceed() {
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;

    if (!name1 || !name2) {
        alert("Por favor, preencha ambos os campos de nome!");
        return;
    }

    document.getElementById('title').innerText = `Para onde ${name1} e ${name2} vão no dia 12`;
    document.getElementById('name-input').style.display = 'none';
    document.getElementById('place-input').style.display = 'block';
}

function sortearLugar() {
    const lugar1 = document.getElementById('place1').value;
    const lugar2 = document.getElementById('place2').value;
    const lugar3 = document.getElementById('place3').value;

    if (!lugar1 || !lugar2 || !lugar3) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const lugares = [lugar1, lugar2, lugar3];
    const sorteado = lugares[Math.floor(Math.random() * lugares.length)];

    document.getElementById('resultado').innerText = `O lugar sorteado é: ${sorteado}`;
}
