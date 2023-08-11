input = document.getElementById('input');
btn = document.getElementById('ok');
div = document.getElementById('dv');

pass1 = 'montessori';
pass2 = 'hinton';

function testInput() {
    if (input.value.toLowerCase().includes(pass1) && input.value.toLowerCase().includes(pass2)) {
        div.innerHTML = "<h3>Parabéns! Você acertou!</h3><a class='btn2' href='https://www.enigmaximo.com.br/h/qr13wd56gtt5cw.html'>Continue aqui</a>";
    } else {
        window.alert("Resposta errada. Tente de novo!");
    }
    return;
}

btn.onclick = testInput;