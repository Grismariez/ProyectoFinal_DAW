$(document).ready(function  () {
	//muestra los div
	$('div.acordeon(0)> div').display();
//al darle click desencadena la funcion de desplegarlo hacia abajo 
	$('p.titulo(0)> titulo').click(function(){
		//le das los segundos en que realiza la accion
		$(this).next().slideToggle(100)
	})
})