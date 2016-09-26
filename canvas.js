var triangulo =document.getElementById("dibujo");

var lienzo=triangulo.getContext("2d");

var lineas=30;

var l =0;

while(l<lineas)
{
	dibujar("grey",0,l*10,10*(l+1),300);
	dibujar("grey",l*10,0,300,10*(l+1));
	l=l+1
}

console.log(l)

while(l==0)
{
	var j=1;
	dibujar("blue",300,j+10,300-(l*10),300)
	l=l-1;
	j=j+1;
}




/*for(i=30;i==0;i--)
{
	console.log(i);
	for(var j=30;j<30;j++)
	{
	dibujar("grey",300,j+10,300-(i*10),300);
};
};*/


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




