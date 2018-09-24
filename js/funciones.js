/*
CONTENIDOS (buscar con %%)

- MODULO:MENU RESPONSIVE

- variables globales

document.ready:
. scroll:
 - Cambiar menú en scroll

- Parallax de sección de imágenes
 
- Abrir menú desplegable de proyectos
- Menu Responsive
-- Click menu hamburguesa
-- Abrir menú desplegable responsive

- Colorear items de menu desplegable on hover
- Autoscroll flecha banner

- Abrir galeria de imagenes

- Estilos - adiciones en DOM



*/


//------------- MODULO: MENU RESPONSIVE -------------------------

const anchoResponsive = 700; //en pixeles

//------------- MODULO: MENU RESPONSIVE -------------------------



//%% variables globales

	//flag para modificación de tamaño de logo
var logoMod = false;
var scrollTimer = 0;


$(document).ready(function() {
	
//------------- INICIO MODULO: MENU RESPONSIVE -------------------------
	
	/* %% Cambiar menú en pantallas chicas */
	
   if ($('body').width() < anchoResponsive ){
		$(".c-RM").addClass('c-RM--mobile');
		$(".c-RM").removeClass('c-RM--desktop');
   }
	$(window).resize(function(){     
       if ($('body').width() < anchoResponsive ){
			$(".c-RM").addClass('c-RM--mobile');
			$(".c-RM").removeClass('c-RM--desktop');
       }
	   else{
			$(".c-RM").removeClass('c-RM--mobile');
			$(".c-RM").addClass('c-RM--desktop');		
	   }
	});
//------------- FIN MODULO: MENU RESPONSIVE -------------------------

	$(document).scroll(function() {	
	var scrollTop = $(window).scrollTop();
	
	//%% Cambiar menú en scroll
	
			if (scrollTop > 0 && logoMod==false) {
				$('.logoMain').stop().animate({'height':'15px'},100);
				logoMod = true;
			}
			if (scrollTop <= 0 && logoMod==true){
				$('.logoMain').stop().animate({'height':'20px'},100);
				logoMod=false;
			}
	});


//%% Parallax de banner inicio
		console.log("banner inicio:"+$('.MBInicio').length);
		if($('.MBInicio').length==1){
			console.log("holu");
			$('.MBInicio').paroller();
		}

	
//%% Colorear items de menu desplegable on hover
	$('.mainNavSubitem').mouseenter(function(){
		$(this).css({'background-color':'#444'});
	});
	$('.mainNavSubitem').mouseleave(function(){
		$(this).css({'background-color':'transparent'});
	});
	
	
	
//%% Autoscroll flecha banner

	$('.flechaMainBanner').click(function(){
		$('html, body').animate({scrollTop: $('.mainBanner').next().offset().top-55},1000); //desplazar a pos. top de sección sig. a banner, menos el alto del header
	});
	
// %% Abrir galeria de imagenes
		
		$('.verGaleria').click(function(){
			console.log("clickgaleria");
			$('body').css({'overflow':'hidden'});
			$('.galeriaImagenes').animate({'opacity':'1'},500);
			$('.galeriaImagenes').css({'display':'flex'});
			$('.wrapGaleria').css({'display':'block'});
		});
// %% Cerrar galeria de imagenes
	
		$('.cruz').click(function(){
			console.log("clickcruz");
			$('body').css({'overflow':'auto'});
			$('.galeriaImagenes').animate({'opacity':'0'},500,function(){
				$('.galeriaImagenes, .wrapGaleria').css({'display':'none'})
				});
			;
		});
		
		$('.wrapGaleria').click(function(){
			console.log("clickfuera");
			$('body').css({'overflow':'auto'});
			$('.galeriaImagenes').animate({'opacity':'0'},500,function(){
				$('.galeriaImagenes, .wrapGaleria').css({'display':'none'})
				});
		}).children().click(function(e) {
			return false;
		});
		
	
//%% Estilos - adiciones en DOM

	$('.verMas').append(" >>");
		
});

