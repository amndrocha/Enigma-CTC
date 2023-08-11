input = document.getElementById('input');
btn = document.getElementById('ok');
div = document.getElementById('dv');

pass = 'hans';

function testInput() {
    if (input.value.toLowerCase() == pass) {
        div.innerHTML = "<h3>Parabéns! Você acertou!</h3><a class='btn2' href='https://www.enigmaximo.com.br/h/qr3ed6d7asaba4.html'>Continue aqui</a>";
    } else {
        window.alert("Resposta errada. Tente de novo!");
    }
    return;
}

btn.onclick = testInput;