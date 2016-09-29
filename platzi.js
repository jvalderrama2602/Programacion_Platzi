var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOK: false
}
var vaca = {
  url: "vaca.png",
  cargaOK: false
};
var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};
var pollo = {
  url: "pollo.png",
  cargaOK: false
};

var cantidad = aleatorio(1, 10);
/*CREACIÓN DE UN OBJETO NUEVO CLASE IMAGE*/
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}
function cargarPollo()
{
  pollo.cargaOK = true;
  dibujar();
}

function cargarCerdo()
{
  cerdo.cargaOK = true;
  dibujar();
}


function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
    console.log(cantidad);
    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 10);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if(cerdo.cargaOK)
  {
    console.log(cantidad);
    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(2, 4);
      var y = aleatorio(0, 10);
      var x = x * 50;
      var y = y * 50;
      papel.drawImage(cerdo.imagen, x, y);
    }
  }
  if(pollo.cargaOK)
  {
    console.log(cantidad);
    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(5, 20);
      var y = aleatorio(0, 10);
      var x = x * 40;
      var y = y * 60;
      papel.drawImage(pollo.imagen, x, y);
    }
  }
}
function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
