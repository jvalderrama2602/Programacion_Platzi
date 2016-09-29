function movimiento(eventos) {
    var x = eventos.clientX;
    var y = eventos.clientY;
    var cuadro=document.getElementById("areaMouse");
	var papel=cuadro.getContext("2d");
    dibujar("blue",x+1,y+1,x-1,y-1,papel);  
}

function dibujar(color,xinicial,yinicial,xfinal,yfinal,lienzo)
	{
		lienzo.beginPath();
		lienzo.strokeStyle=color;
		lienzo.moveTo(xinicial,yinicial);
		lienzo.lineTo(xfinal,yfinal);
		lienzo.stroke();
		lienzo.closePath();
	}
