function movimiento(eventos) {
    var x = eventos.clientX;
    var y = eventos.clientY;
    var cuadro=document.getElementById("areaMouse");
	var papel=cuadro.getContext("2d");

    dibujar("blue",x+1,y+1,x-1,y-1,papel);
    /*var coor = "Coordenadas: (" + x + "," + y + ")";*/
    /*document.getElementById("demo").innerHTML = coor;*/
    /*console.log(coor);*/
    /*console.log(dibujar)*/
    var xy = document.getElementById("coordenadas");
    xy.innerHTML=(y)
}
/*
function limpiar() {
    console.log("Salio");
}*/

function dibujar(color,xinicial,yinicial,xfinal,yfinal,lienzo)
	{

		lienzo.beginPath();

		lienzo.strokeStyle=color;

		lienzo.moveTo(xinicial,yinicial);

		lienzo.lineTo(xfinal,yfinal);

		lienzo.stroke();

		lienzo.closePath();



	}

/*
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
};
*/