//Llamada a la libreria
var express = require("express");
//invocando la funcion
var app=express();
//El slash indica la direccion url despues del dominio
app.get("/",inicio);
app.get("/cursos",cursos);
//Aui envio información a la direccion solicitada
function inicio(peticion,resultado) {
	resultado.send("Este es el Inicio")
}
function cursos(peticion,resultado) {
	resultado.send("Este es cursos")
}


app.listen(8989)