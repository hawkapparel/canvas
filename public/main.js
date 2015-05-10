"use strick";

window.addEventListener("load",load);

function load(){

	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext('2d');

	ctx.fillStyle = "green";
	ctx.fillRect(25,25,100,100);
    ctx.clearRect(45,45,60,60);
    ctx.strokeRect(50,50,50,50);


    ctx.beginPath();
    ctx.arc(175,75,50,1,Math.PI*2,true); // Outer circle
    ctx.moveTo(210,75);
    ctx.arc(175,75,35,0,Math.PI,false);  // Mouth (clockwise)
    ctx.moveTo(165,65);
    ctx.arc(160,65,5,0,Math.PI*2,true);  // Left eye
    ctx.moveTo(195,65);
    ctx.arc(190,65,5,0,Math.PI*2,true);  // Right eye
    ctx.stroke();


}
