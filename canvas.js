function numero(){

	var caja =document.getElementById("dibujo");
	var lienzo=caja.getContext("2d");
	var line=document.getElementById("num_lineas").value;
	var lineas=parseInt(line)
	var ancho = caja.width;
	var espacio=ancho/lineas
	var l =0;
	var j =0;
	while(l<lineas)
	{
		dibujar("grey",300,l*espacio,300-(l*espacio),300);
		dibujar("grey",0,300-(l*espacio),l*espacio,0);
		dibujar("grey",0,l*espacio,espacio*(l+1),300);
		dibujar("grey",l*espacio,0,300,espacio*(l+1));
		l=l+1
	}

	dibujar("grey",1,1,1,299);
	dibujar("grey",1,299,299,299);
	dibujar("grey",299,1,1,1);
	dibujar("grey",299,299,299,0);

	function dibujar(color,xinicial,yinicial,xfinal,yfinal)
	{

		lienzo.beginPath();

		lienzo.strokeStyle=color;

		lienzo.moveTo(xinicial,yinicial);

		lienzo.lineTo(xfinal,yfinal);

		lienzo.stroke();

		lienzo.closePath();



	}
}



