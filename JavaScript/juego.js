var btnAbrirPopup = document.getElementById("btn-abrir-popup")
var max = 3;
var min = 3;
var numerom = Math.random()*(max-min) + min;
numerom = parseInt(numerom);

while(true){
    var usuario = prompt("Bienvenido! Responde a la siguiente pegunta: Cuantas generaciones de Robots existen? Coloca un número para adivinar. Sólo tienes 4 intentos posibles. (Presiona 0 si deseas omitir esta adivinanza)");

if(usuario == numerom){
    alert("Has Acertado!");
    break;
}
else if(usuario == 0){
    break;
}
else if(usuario < numerom){

    alert("Ups, tu número debería ser más alto" );
}
else if(usuario > numerom){


    alert("Ups, tu número debería ser mas bajo");
}




}