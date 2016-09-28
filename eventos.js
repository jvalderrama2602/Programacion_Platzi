var teclas={
	UP:38,
	DOWN:40,
	LEFT:37,
	RIGHT:39
};


document.addEventListener("keydown",dibujarTeclado);

var cuadro=document.getElementById("area");
var papel=cuadro.getContext("2d");
var x=100;
var y=100;
dibujar("red",x-1,y-1,x+1,y+1,papel)

function dibujar(color,xinicial,yinicial,xfinal,yfinal,lienzo)
	{

		lienzo.beginPath();

		lienzo.strokeStyle=color;

		lienzo.moveTo(xinicial,yinicial);

		lienzo.lineTo(xfinal,yfinal);

		lienzo.stroke();

		lienzo.closePath();



	}


function dibujarTeclado(evento)
{

	var lineaColor="blue"
	var movimiento=1



	if(evento.keyCode==teclas.UP){
		dibujar(lineaColor,x,y,x,y-movimiento,papel);
		y=y-movimiento;

	}

	if(evento.keyCode==teclas.DOWN){
		
		dibujar(lineaColor,x,y,x,y+movimiento,papel);
		y=y+movimiento;

	}

	if(evento.keyCode==teclas.LEFT){
		dibujar(lineaColor,x,y,x-movimiento,y,papel);
		x=x-movimiento;


	}

	if(evento.keyCode==teclas.RIGHT){
		dibujar(lineaColor,x,y,x+movimiento,y,papel);
		x=x+movimiento;


	}
}