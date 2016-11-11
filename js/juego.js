//Objetos importantes del canvas
var canvas= document.getElementById('game');
var ctx= canvas.getContext('2d');

//Crear a los personajes
var heroe={
	x:90,
	y: canvas.height-135,
	width: 80,
	height: 80
}

var villano={
	x:45,
	y: canvas.height-135,
	width: 80,
	height: 80
}

var teclado={}

//Definir variables para las imagenes

var fondo;
var imgHeroe;
var imgVillano;
var sonido;

//Definicion de funciones

function loadMedia(){

	fondo= new Image();
	fondo.src='img/tablero.jpg';

	imgHeroe= new Image();
	imgHeroe.src='img/goku.png';

	imgVillano= new Image();
	imgVillano.src='img/cel.png';

	sonido=document.createElement('audio');
	document.body.appendChild(sonido);
	sonido.setAttribute('src', 'video/gokusound.mp3');
	
	fondo.onload = function(){

		var intervalo = window.setInterval(frameLoop, 1000/60);
	}
}


function drawBackground(){
	ctx.drawImage(fondo,0,0);
}

function dibujarPersonaje(){
	ctx.save();
	
	ctx.drawImage(imgHeroe,heroe.x, heroe.y, heroe.width, heroe.height);
	ctx.drawImage(imgVillano,villano.x, villano.y, villano.width, villano.height);
	ctx.restore();
}

function agregarEventosTeclado(){
	function agregarEvento(elemento,nombreEvento,funcion){
		
		//agrega eventos pero segun el navegador que usamos 
		if(elemento.addEventListener){
			//navegadores actualizados
			elemento.addEventListener(nombreEvento,funcion,false);
		}
		else if(elemento.attachEvent){
			//internet explorer :(
			elemento.attachEvent(nombreEvento,funcion);
		}
	}
	agregarEvento(document,"keydown", function(e){
		//ponemos en true la tecla presionada
		teclado[e.keyCode] = true;
		
	});
	agregarEvento(document,"keyup", function(e){
		//ponemos en true la tecla presionada
		teclado[e.keyCode] = false;
	});
	
	
}


function moverHeroe(){

	//movimiento a la izquierda
	if (teclado[100]){
		heroe.x -=6;
		if (heroe.x <0) heroe.x=0;
	}
	//movimiento a la derecha
	if (teclado[102]){
		var limite = canvas.width - heroe.width;
		heroe.x +=6;
		if (heroe.x > limite) heroe.x = limite;
	}

		//movimiento arriba
	if (teclado[104]){
		heroe.y -=6;
		if (heroe.y <0) heroe.y=0;
	}
	//movimiento abajo
	if (teclado[98]){
		var limite = canvas.width - heroe.width;
		heroe.y +=6;
		if (heroe.y > limite) heroe.y = limite;
	}

} 



function moverVillano(){

		//movimiento a la izquierda
	if (teclado[65]){
		villano.x -=6;
		if (villano.x <0) villano.x=0;
	}
	//movimiento a la derecha
	if (teclado[68]){
		var limite = canvas.width - villano.width;
		villano.x +=6;
		if (villano.x > limite) villano.x = limite;
	}

		//movimiento arriba
	if (teclado[87]){
		villano.y -=6;
		if (villano.y <0) villano.y=0;
	}
	//movimiento abajo
	if (teclado[83]){
		var limite = canvas.width - villano.width;
		villano.y +=6;
		if (villano.y > limite) villano.y = limite;
	}

}


function frameLoop(){

	//sonido.play();
	moverHeroe();
	moverVillano();
	drawBackground();
	dibujarPersonaje();
}

var face0=new Image()
face0.src="img/d1.gif"
var face1=new Image()
face1.src="img/d2.gif"
var face2=new Image()
face2.src="img/d3.gif"
var face3=new Image()
face3.src="img/d4.gif"
var face4=new Image()
face4.src="img/d5.gif"
var face5=new Image()
face5.src="img/d6.gif"

function throwdice(){
//create a random integer between 0 and 5
var randomdice=Math.round(Math.random()*5)
document.images["mydice"].src=eval("face"+randomdice+".src")
}



window.addEventListener('load',init);

function init(){
agregarEventosTeclado();
loadMedia();

}

//cronometro
      window.onload = function() {

    visor=document.getElementById("reloj"); //localizar pantalla del reloj
   
    //variables de inicio:
    var marcha=0; //control del temporizador
    var cro=0; //estado inicial del cronómetro
    }

    //Botón 1: Estado empezar: Poner en marcha el crono
    function empezar() {

          emp=new Date() //fecha inicial (en el momento de pulsar)
          elcrono=setInterval(tiempo,10); //función del temporizador.
          marcha=1 //indicamos que se ha puesto en marcha.

          }
    //función del temporizador      
    function tiempo() { 
         actual=new Date(); //fecha a cada instante
            //tiempo del crono (cro) = fecha instante (actual) - fecha inicial (emp)
         cro=actual-emp; //milisegundos transcurridos.
         cr=new Date(); //pasamos el num. de milisegundos a objeto fecha.
         cr.setTime(cro); 
            //obtener los distintos formatos de la fecha:
         cs=cr.getMilliseconds(); //milisegundos 
         cs=cs/10; //paso a centésimas de segundo.
         cs=Math.round(cs); //redondear las centésimas
         sg=cr.getSeconds(); //segundos 
         mn=cr.getMinutes(); //minutos 
         
            //poner siempre 2 cifras en los números    
         if (cs<10) {cs="0"+cs;} 
         if (sg<10) {sg="0"+sg;} 
         if (mn<10) {mn="0"+mn;} 
            //llevar resultado al visor.    
          

         visor.innerHTML=mn+" :"+sg+": "+cs; 
         }


    //parar el cronómetro
    function parar() { 
       
         clearInterval(elcrono); //parar el crono
         marcha=0; //indicar que está parado.
       //  document.cron.boton2.value="Continuar"; 
         //cambiar el estado del botón
         
         }     
    //Continuar una cuenta empezada y parada.
    function continuar() {
         emp2=new Date(); //fecha actual
         emp2=emp2.getTime(); //pasar a tiempo Unix
         emp3=emp2-cro; //restar tiempo anterior
         emp=new Date(); //nueva fecha inicial para pasar al temporizador 
         emp.setTime(emp3); //datos para nueva fecha inicial.
         elcrono=setInterval(tiempo,10); //activar temporizador
         marcha=1; //indicar que esta en marcha
         document.cron.boton2.value="parar"; //Cambiar estado del botón
         document.cron.boton1.disabled=false; //activar boton 1 si estuviera desactivado
         }
    //Volver al estado inicial
   