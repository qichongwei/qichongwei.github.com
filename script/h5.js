/**
//  * Created by H on 2016/10/19.
//  */
//
// $(window).ready(function(){
//
//     draw();
// });
//
// function draw() {
//         var canvas=document.getElementById('canvas');
//         var context=canvas.getContext('2d');
//         context.beginPath();
//
//         context.fillStyle='red';
//         context.closePath();
//         context.fill();
//
//
// }

var c = document.getElementById("canvas");

var ctx = c.getContext("2d");

//画圆方法

function drawArc()

{
ctx.beginPath();
    ctx.lineWidth='5';
    ctx.moveTo(0,0);
    ctx.lineTo(100,100);
    ctx.strokeStyle='red';
    ctx.closePath();
    ctx.stroke();


// 红色矩形
//     ctx.beginPath();
//     ctx.lineWidth="6";
//     ctx.strokeStyle="red";
//     ctx.rect(5,5,290,140);
//     ctx.stroke();
}

drawArc();