var radical;
var radicando;
var raiz;
var tipo;
var usuario;
var cantidad;
	
	const audio = document.createElement("audio");
	audio.preload = "auto";
	audio.src = "sounds/142.mp3";
	document.body.appendChild(audio);

//escoge el tipo de ejercio
function escoger_tipo() {
tipo=Math.floor((Math.random()*3));
	audio.play();
		audio.loop = true;
	

	
	switch (tipo){
		case 0:

			document.querySelector('object').setAttribute("data","html/ejercicio_1.html");
	
			document.getElementById("ventana").setAttribute("hidden","");
			document.getElementById("avanzar").removeAttribute("hidden");
			break;
		case 1:
			document.querySelector('object').setAttribute("data","html/ejercicio_2.html");
	
			document.getElementById("ventana").setAttribute("hidden","");
			document.getElementById("avanzar").removeAttribute("hidden");
			break;
		case 2:
			document.querySelector('object').setAttribute("data","html/ejercicio.html");
			document.getElementById("ventana").setAttribute("hidden","");
			document.getElementById("avanzar").removeAttribute("hidden");
			break;




	}
}

//genera el ejercicio
function ejercio() {

	radical=Math.floor((Math.random()*2)+2);
	raiz=Math.floor(Math.random()*9+1);
	radicando=Math.pow(raiz,radical);

}

function tipo_1() {
	ejercio();
	
	document.getElementById("imagen").setAttribute("src","../imagenes/raiz_"+radical+".png");
		document.getElementById("radicando").innerHTML=radicando;

	



}
function tipo_2() {
	ejercio();
	document.getElementById("radical").innerHTML=raiz;
	document.getElementById("radicando").innerHTML=radicando

	document.getElementById("imagen").setAttribute("src","../imagenes/raiz_n.png");


}
function tipo_3() {

	ejercio();
	document.getElementById("raiz").innerHTML=raiz;
	document.getElementById("imagen").setAttribute("src","../imagenes/raiz_"+radical+".png");
	

}



// comprueba los resultados

function comprobar_1(){
	usuario=document.getElementById("usuario1").value
	if(raiz==usuario){
	
			document.getElementById("usuario1").setAttribute("style"," border-width: 3px;border-style: solid;border-color: green;");
document.getElementById("mensaje").innerHTML="¡Correcto! Puedes continuar";
			document.getElementById("mensaje").setAttribute("style","color:green;")
			
	}
	else{
document.getElementById("usuario1").setAttribute("style"," border-width: 3px;border-style: solid;border-color: red;");
document.getElementById("mensaje").innerHTML="Incorrecto, prueba nuevamente";
			document.getElementById("mensaje").setAttribute("style","color:red;")
}}
function comprobar_2() {
	usuario=document.getElementById("usuario2").value

	if(Math.pow(raiz,usuario)==radicando){
			
			document.getElementById("usuario2").setAttribute("style"," border-width: 3px;border-style: solid;border-color: green;");
document.getElementById("mensaje").innerHTML="¡Correcto! Puedes continuar";
			document.getElementById("mensaje").setAttribute("style","color:green;")
	}
	else{

		document.getElementById("usuario2").setAttribute("style"," border-width: 3px;border-style: solid;border-color: red;");
		document.getElementById("mensaje").innerHTML="Incorrecto, prueba nuevamente";
			document.getElementById("mensaje").setAttribute("style","color:red;")
	}

}
function comprobar_3() {
	usuario=document.getElementById("usuario3").value
	if(radicando==usuario){
		
			document.getElementById("usuario3").setAttribute("style"," border-width: 3px;border-style: solid;border-color: green;");
		document.getElementById("mensaje").innerHTML="¡Correcto! Puedes continuar";
			document.getElementById("mensaje").setAttribute("style","color:green;")
	}
	else{
			document.getElementById("usuario3").setAttribute("style"," border-width: 3px;border-style: solid;border-color: red;");
			document.getElementById("mensaje").innerHTML="Incorrecto, prueba nuevamente";
			document.getElementById("mensaje").setAttribute("style","color:red;")
	}
	
}



