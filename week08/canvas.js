var canvas2 = document.getElementById('myCanvas');

var context = canvas2.getContext('2d');
context.strokeStyle = "red";
var gradient = context.createLinearGradient(0, 0, 0, 200);
gradient.addColorStop (0, "blue");
gradient.addColorStop(1, "white");
context.fillStyle = gradient;
context.fillRect(10, 10, 100, 100);
context.strokeRect(10, 10, 100, 100);

function drawCircle(canvas) {

var context2 = canvas.getContext("2d");
	context2.beginPath();
	context2.arc(50, 50, 30, 0, Math.PI*2, true);
	context2.closePath();
	context2.strokeStyle = "red";
    context2.fillStyle = "blue";
    context2.lineWidth = 3;
    context2.fill(); 
    context2.stroke(); 
}

drawCircle(document.getElementById('circle'));
