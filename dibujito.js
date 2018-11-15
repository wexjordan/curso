/*alert("Sachita es magia")*/
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var l = 0;
var lineas = 30;
console.log(lienzo);
var yi, xf;

dibujarlinea("grey", 0, 0, 10, 300);
dibujarlinea("grey", 0, 10, 20, 300)


while(l < lineas)
{
yi = 10 * l;
xf = 10 * (1 + l);
dibujarlinea("grey", 0, yi, xf, 300);
l++;
console.log("Linea" +l);
}

dibujarlinea("red", 1, 1, 1, 300);
dibujarlinea("red", 1, 299, 299, 299);

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}


/*lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(300, 300);
lienzo.lineTo(1, 300);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.strokeStyle = "red";
lienzo.moveTo(1, 300);
lienzo.lineTo(1, 1);
lienzo.stroke();
lienzo.closePath();*/
