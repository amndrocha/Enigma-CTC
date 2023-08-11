lamp = document.getElementById('lamp');
bckgrnd = document.getElementById('bckgrnd');
light = document.getElementById('light');
msg = document.getElementById('msg');
pics = document.getElementById('pics');

if (window.screen.width < 1100) {
    msg.src = 'img/msg0.png'
} else {
    msg.src = 'img/msg1.png'
}

function start(event) {
    light.style.display = 'flex';
    pics.style.display = 'none';
    msg.style.display = 'flex';
    light.style.backgroundColor = 'rgb(255, 130, 247)';
    bckgrnd.style.backgroundColor = 'black';
    lamp.src = 'img/l2.png'
    lamp.style.zIndex = 1000;
  
    function moveAt(pageX, pageY) {
        lamp.style.left = pageX - lamp.offsetWidth / 2 + 'px';
        lamp.style.top = pageY - lamp.offsetHeight / 2 + 'px';
        light.style.left = pageX - light.offsetWidth / 2 + 'px';
        light.style.top = pageY - light.offsetHeight / 2 + 80 + 'px';
    }
  
    moveAt(event.pageX, event.pageY);
  
    function onMove(event) {
        moveAt(event.pageX, event.pageY);
    }
    
    document.addEventListener('mousemove', onMove);

    function stop() {
        light.style.display = 'none';
        pics.style.display = 'flex';
        light.style.backgroundColor = 'transparent';
        bckgrnd.style.backgroundColor = 'white';
        msg.style.display = 'none';
        lamp.src = 'img/l1.png'
        lamp.style.top = '90px';
        lamp.style.left = '50%';
        document.removeEventListener('mousemove', onMove);
        lamp.onmouseup = null;
    };

    lamp.onmouseup = stop;
};


lamp.onmousedown = start;


lamp.ondragstart = function() {
    return false;
};

lamp.addEventListener("touchmove", (event) => {
    light.style.display = 'flex';
    pics.style.display = 'none';
    msg.style.display = 'flex';
    light.style.backgroundColor = 'rgb(255, 130, 247)';
    bckgrnd.style.backgroundColor = 'black';
    lamp.src = 'img/l2.png'
    lamp.style.zIndex = 1000;

    var touchLocation = event.targetTouches[0];
    lamp.style.left = touchLocation.pageX + 'px';
    light.style.left = touchLocation.pageX + 'px';
    lamp.style.top = touchLocation.pageY + 'px';
    light.style.top = touchLocation.pageY + 'px';
});

lamp.addEventListener("touchend", (event) => {
    light.style.display = 'none';
    pics.style.display = 'flex';
    light.style.backgroundColor = 'transparent';
    bckgrnd.style.backgroundColor = 'white';
    msg.style.display = 'none';
    lamp.src = 'img/l1.png';
    lamp.style.top = '90px';
    lamp.style.left = '50%';
});

input = document.getElementById('input');
btn = document.getElementById('ok');
div = document.getElementById('dv');

pass = ['wilhelm maximilian wundt','wilhelm wundt','wilhelm','maximilian','wundt'];

function testInput() {
    if (pass.includes(input.value.toLowerCase())) {
        div.innerHTML = "<h3>Parabéns! Você acertou!</h3><a class='btn2' href='https://www.youtube.com/playlist?list=PLufoFNVxTHFtkdLBRIDqxWwwZ8Kazrjrf'>Continue aqui</a>";
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