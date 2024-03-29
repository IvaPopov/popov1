const canvasPlot = document.getElementById('canvas_plot')
const ctx = canvasPlot.getContext('2d')
const canvasPlotWidth=canvasPlot.clientWidth;
const canvasPlotHeight=canvasPlot.clientHeight;
console.log(canvasPlotWidth, canvasPlotHeight);
const scaleX=30;
const scaleY=30;

ctx.textAlign='left';
ctx.textBaseline='top';

const xAxis=Math.round(canvasPlotWidth/scaleX/2)*scaleX;
const yAxis=Math.round(canvasPlotHeight/scaleY/2)*scaleY;

ctx.beginPath();
ctx.strokeStyle='#999999';
ctx.moveTo(xAxis,0);
ctx.lineTo(xAxis,canvasPlotHeight);
ctx.moveTo(0,yAxis);
ctx.lineTo(canvasPlotWidth,yAxis);
ctx.stroke();

for (let i=0;i<=canvasPlotWidth;i=i+scaleX)
{
ctx.moveTo(i,0);
ctx.lineTo(i,canvasPlotHeight);
ctx.stroke();

ctx.font=`${Math.round(scaleX/2)}px Arial`;
ctx.fillText((i-xAxis)/scaleX,i,yAxis);
}


for (let i=0;i<=canvasPlotHeight;i=i+scaleY)
{
ctx.moveTo(0,i);
ctx.lineTo(canvasPlotWidth,i);
ctx.stroke();

ctx.font=`${Math.round(scaleY/2)}px Arial`;
ctx.fillText((yAxis-i)/scaleY,xAxis,i);
}






for (let i=0;i<=canvasPlotWidth;i++)
{
const x=(i-xAxis)/scaleX;
const y=Math.pow(x,2);
ctx.fillRect(x*scaleX+xAxis,yAxis-scaleY*y,4,4);
}

ctx.fillRect(0,0,100,100);
ctx.fillStyle='#ff0000';
ctx.fillRect(100,100,200,200);
ctx.stroke();

ctx.fillRect(100,100,200,200);
ctx.fillStyle='#f0E68C';
ctx.fillRect(200,200,300,300);
ctx.stroke();

ctx.fillRect(200,200,300,300);
ctx.fillStyle='#0000ff';
ctx.fillRect(300,300,400,400);
ctx.stroke(); 

ctx.beginPath(); 
ctx.strokeStyle='#ff0000'
ctx.moveTo(320,300);
ctx.lineTo(420,400);
ctx.stroke();

ctx.fillStyle='#ff0000';
ctx.fillRect(400,500,3,3);
ctx.font='50px Arial';
ctx.textAlign='right';
ctx.textBaseLine='top';
ctx.fillText('Привет',200,300);
ctx.stroke();

var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.shadowBlur=20;
ctx.shadowColor="black";
ctx.fillStyle="red";
ctx.fillRect(20,20,100,80);






