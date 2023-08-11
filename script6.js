input = document.getElementById('input');
btn = document.getElementById('ok');
div = document.getElementById('dv');

pass = 'hans';

function testInput() {
    if (input.value.toLowerCase() == pass) {
        div.innerHTML = "<h3>Parabéns! Você acertou!</h3><a class='btn2' href='https://www.enigmaximo.com.br/qr4hyzdf78d4eds.html'>Continue aqui</a>";
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