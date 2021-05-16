/*alert("esta es la primera pregunta")
let preguntaUno = parseInt(prompt("1 2 3 o 4")),
respuestaCorrecta = 2,
tiempo = 10,
restarTiempo = ()=>--tiempo;
setInterval(restarTiempo,10000)
preguntaUno === respuestaCorrecta ? alert("Bien hecho"):alert("Respuesta incorrecta")*/
const r1 = document.getElementById("r1"), r2 = document.getElementById("r2"), r3 = document.getElementById("r3"), r4 = document.getElementById("r4"), body = document.body, newNode = document.createElement("p"),
alertaBuena = ()=>{
    body.insertBefore(newNode,body.children[body.children.length-1]);
    newNode.innerHTML = `Felicidades lo has logrado`
},
alertaMala = ()=>{
    body.insertBefore(newNode,body.children[body.children.length-1]);
    newNode.innerHTML = `Mal respuesta XD`
};
r1.onclick = ()=> alertaMala()
r2.onclick = ()=> alertaBuena()
r3.onclick = ()=> alertaMala()
r4.onclick = ()=> alertaMala()