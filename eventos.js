var teclas={
	UP:38,
	DOWN:40,
	LEFT:37,
	RIGHT:39
};

console.log(teclas)
document.addEventListener("keyup",dibujarTeclado);




function dibujarTeclado(evento)
{
	if(evento.keyCode==teclas.UP){
		console.log("arriba")


	}

	if(evento.keyCode==teclas.DOWN){
		console.log("ABAJO")


	}

	if(evento.keyCode==teclas.LEFT){
		console.log("IZQUIERDA")


	}

	if(evento.keyCode==teclas.RIGHT){
		console.log("DERECHO")


	}
}