function dibujar(color,xinicial,yinicial,xfinal,yfinal)
{

	lienzo.beginPath();

	lienzo.strokeStyle=color;

	lienzo.moveTo(xinicial,yinicial);

	lienzo.lineTo(xfinal,yfinal);

	lienzo.stroke();

	lienzo.closePath();



}

var triangulo =document.getElementById("dibujo");

var lienzo=triangulo.getContext("2d");

dibujar("pink",10,300,200,10)
dibujar("yellow",20,250,150,20)
