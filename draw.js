window.onload=draw;
function draw(){
	first();
	play();
	pre();
	next();
	colorBar();
	volumeButton();
	volumeBar();
}
var firstInterval;
var barInterval;

function first(){
	var canvas=document.getElementById("first");
	var ctx=canvas.getContext("2d");
	var audio=$("audio")[0];
	var a=audio.currentTime/210*200%2;
	
    ctx.clearRect(0,0,300,300);

	ctx.beginPath();
	ctx.arc(150,150,145,0,2*Math.PI);
	ctx.fillStyle="rgb(83,83,83)";
	ctx.fill();
    
	ctx.beginPath();
	ctx.arc(150,150,140,0,a*Math.PI);
	ctx.strokeStyle="rgb(180,240,50)";
	ctx.lineWidth=10;
	ctx.stroke()

	ctx.beginPath();
	ctx.arc(150,150,120,0,2*Math.PI);
	var grad=ctx.createLinearGradient(100,100,300,300);
	grad.addColorStop(0,"black");
	grad.addColorStop(1,"white");
	ctx.fillStyle=grad;
	ctx.fill();

	ctx.beginPath();
	ctx.arc(150,150,115,0,2*Math.PI);
	ctx.fillStyle="rgb(49,49,49)";
	ctx.fill();

	///音符图标
	
	ctx.beginPath();
	ctx.moveTo(150,60);
	ctx.lineTo(150,200);
	ctx.strokeStyle="#f19149";
	ctx.lineWidth=6;
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(153,60);
	ctx.bezierCurveTo(150,130,240,110,180,190);
	ctx.lineTo(175,190);
	ctx.quadraticCurveTo(220,130,150,110);
	ctx.closePath();
	ctx.fillStyle="#f19149";
	ctx.fill();

	ctx.beginPath();
	for(var i=0;i<2*Math.PI;i+=1/70){
		ctx.lineTo(118+35*Math.cos(i),200+20*Math.sin(i));
	}
	ctx.closePath();
	ctx.fillStyle="#19149";
	ctx.fill();
}

function play(){
	var canvas=document.getElementById("play");
	var ctx=canvas.getContext("2d");

    ctx.clearRect(0,0,30,30);
	ctx.beginPath();
	ctx.moveTo(30,15);
	ctx.lineTo(0,0);
	ctx.lineTo(0,30);
	ctx.closePath();
    ctx.fillStyle="#f19149";
    ctx.fill();
}

function pause(){
	var canvas=document.getElementById("play");
	var ctx=canvas.getContext("2d");

	ctx.clearRect(0,0,30,30);
	ctx.beginPath();
	ctx.moveTo(10,0);
	ctx.lineTo(10,30);
	ctx.moveTo(20,0);
	ctx.lineTo(20,30);
	ctx.lineWidth=7;
	ctx.strokeStyle="#f19149";
	ctx.stroke();
}

function pre(){
	var canvas=document.getElementById("pre");
	var ctx=canvas.getContext("2d");

	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(0,30);
	ctx.lineWidth=10;
	ctx.strokeStyle="#f19149";
    ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(0,15);
	ctx.lineTo(30,0);
	ctx.lineTo(30,30);
	ctx.closePath();
	ctx.fillStyle="#f19149";
	ctx.fill();
}

function next(){
	var canvas=document.getElementById("next");
	var ctx=canvas.getContext("2d");

	ctx.beginPath();
	ctx.moveTo(30,0);
	ctx.lineTo(30,30);
	ctx.lineWidth=10;
	ctx.strokeStyle="#f19149";
    ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(30,15);
	ctx.lineTo(0,0);
	ctx.lineTo(0,30);
	ctx.closePath();
	ctx.fillStyle="#f19149";
	ctx.fill();
}


function colorBar(){
	var audio=$("audio")[0];
	var canvas=document.getElementById("colorBar");
	var ctx=canvas.getContext("2d");
    var length=audio.currentTime/audio.duration*400;

    ctx.clearRect(0,0,400,10);
	ctx.beginPath();
	ctx.moveTo(0,5);
	ctx.lineTo(400,5);
	ctx.lineWidth=5;
	ctx.strokeStyle="rgb(130,130,130)";
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(length+5,5,5,0,2*Math.PI);
	ctx.fillStyle="white";
	ctx.fill();

	ctx.beginPath();
	ctx.moveTo(0,5);
	ctx.lineTo(length,5);
	ctx.lineWidth=5;
	ctx.strokeStyle="#f19149";
	ctx.stroke();
}

function volumeButton(){
	var canvas=document.getElementById("volumeButton");
	var ctx=canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(0,5);
    ctx.lineTo(5,5);
    ctx.lineTo(10,0);
    ctx.lineTo(10,15);
    ctx.lineTo(5,10);
    ctx.lineTo(0,10);
    ctx.closePath();
    ctx.fillStyle="rgb(50,50,50)";
    ctx.fill();
}

function volumeBar(){
	var canvas=document.getElementById("volumeBar");
	var ctx=canvas.getContext("2d");

	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(50,0);
    ctx.lineWidth=5;
    ctx.strokeStyle="rgb(100,100,100)";
    ctx.stroke();
}