/*------------------------------------------- NAVEGACIÓN GENERAL ----------------------------------------------------*/

/*HTML necesario:
Clase opcional .itemMenu en los anchors que tengan que ser detectados durante el scroll (tienen que estar linkeados en el menu)

Estructura básica:

<nav class="mainNav">
	<ul class="pgwMenu">
		<li class="mainNav__item"><a href="url">Link externo</a></li>
		<li class="mainNav__item itemMenu"><a href="#anchor">Link a anchor</a></li>
		...
	</ul>
</nav>
...
<section id="anchor" class="itemMenu"></section>

*/

var posicionScroll;
// var menuColorNegro;
var listaItemsMenu;
var anchorPreviamenteActivo;
var anchorActivo;

function inicializarMainMenu(){
	$('.pgwMenu').pgwMenu({
		dropDownLabel : '<span class="white"></span>',
		viewMoreEnabled : false,
	});
}

function listarAnchors(){
	listaItemsMenu = $('.itemMenu'); //obtengo un array de elementos DOM, en la forma de un elemento jQuery
	console.log(listaItemsMenu.length);
}

function chequearAnchor(){
	posicionScroll = $(document).scrollTop();
	for(var i=listaItemsMenu.length-1; i>=0; i--){ //recorrer el array desde el final; y buscar el primer (último) elemento del array para el cual se cumple que la posición del scroll es mayor al offset del elemento
		if(posicionScroll >= $(listaItemsMenu[i]).offset().top-$(".mainNav").height()){
			anchorActivo=$(listaItemsMenu[i]).attr('id');
			break; //si se encontró, salir del loop
		}
	}
	if (anchorActivo!=anchorPreviamenteActivo){ //ejecutar cambio de clase solo al cambiar el anchor, no en todos los scrolls
		$('.mainNav__item.active').removeClass('active');
		$('.mainNav a[href^="#'+anchorActivo+'"]').parent().addClass('active');
	}
	anchorPreviamenteActivo=anchorActivo;
}

// function ajustarColorMenu(){
	// if(posicionScroll==0||posicionScroll==undefined){
			// $('.mainNav').removeClass('mainNav--negro');
			// $('.mainNav').addClass('mainNav--transparente');
			// menuColorNegro=false;

	// }
	// else{
		// if(menuColorNegro==false){ //solo cambiar a clase negro si el estado inmediatamente anterior era transparente
			// $('.mainNav').removeClass('mainNav--transparente');
			// $('.mainNav').addClass('mainNav--negro');
			// menuColorNegro=true;
		// }
	// }
	// console.log(posicionScroll+", "+menuColorNegro);
// }





//	RUNTIME >>>>>


$(document).ready(function(){
	
//-------------------------- SETUP

	//setup menú
	menuColorNegro=false;
	inicializarMainMenu();
	listarAnchors();
	
	
//-------------------------- EVENTOS

//Botones
	
	//Click en links del menú: scroll suave a anchors
		$(document).on('click', 'a[href^="#"]', function (event) {		
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-$(".mainNav").height()
			}, 750);
		});
	
	//Click en botón de "Conocer más"
	
		$('.conocerMas').click(function(){
			$('html, body').animate({
				scrollTop: $('#queHacemos').offset().top-$(".mainNav").height()
			}, 500);
		});
	
//Scroll

	$(document).on( "scroll", function(){
		chequearAnchor();
	});

});

