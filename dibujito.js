/*alert("Sachita es magia")*/
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
console.log(lienzo);



lienzo.beginPath();
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
lienzo.closePath();
