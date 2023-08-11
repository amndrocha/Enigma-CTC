input = document.getElementById('input');
btn = document.getElementById('ok');
div = document.getElementById('dv');

pass = 1967;

function testInput() {
    if (input.value == pass) {
        div.innerHTML = "<h3>Parabéns! Você acertou!</h3><a class='btn2' href='https://www.enigmaximo.com.br/qr2ccer7a8cwh56.html'>Continue aqui</a>";
    } else {
        window.alert("Resposta errada. Tente de novo!");
    }
    return;
}

btn.onclick = testInput;

input.onkeydown = function(e) {
	if(e.code == 'Enter') {
        console.log('aa');
        testInput;
    }
}