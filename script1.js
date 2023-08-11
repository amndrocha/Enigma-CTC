input = document.getElementById('input');
btn = document.getElementById('ok');
div = document.getElementById('dv');

pass = 'hans';

function testInput() {
    if (input.value.toLowerCase() == pass) {
        div.innerHTML = "<h3>Parabéns! Você acertou!</h3><a class='btn2' href='https://www.youtube.com/playlist?list=PLufoFNVxTHFsaHan1FEAQs8wLDsnSu3BJ'>Continue aqui</a>";
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