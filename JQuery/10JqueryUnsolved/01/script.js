$(document).ready(function(){ /*funcion que se va a ejecutar cuando el dom(documento html) haya terminado de cargar*/

//selectores
//$('p').css('border', '4px solid red');
//$('.lead').css('border', '4px solid blue')
//$('#lesson-1').css('border', '4px solid green')
//$('*').css('border', '4px solid orange')

//animación
//$('.box:first').hide(500);
//$('.box:first').hide(500).show(800);
//$('.box:first').hide(500).delay(1000).show(800);
//$('.box').slideUp(500).SlideDown(800);
//$('.box:first').animate({height:'200px'},600);
//$('.box:first').animate({bottom:'200px', left:'200px'},600);

//selectFilt
//$('p:first').css('border', '4px solid red');
//$('p:last').css('border', '4px solid red');
//$('p:lt(2)').css('border', '4px solid purple');
//$('p:gt(2)').css('border', '4px solid purple');
//$('p:eq(3)').css('border', '4px solid purple');

//RelationsShipFilt
//$('h2:has(span)').css('border', '4px solid purple');
//$('.boxes:parent').css('border', '4px solid purple');

//Atributo
$('p[name^=sho]').css('border', '4px solid purple');




});


$(function(){
//alert($('p:first').attr('class'));
//$('p:first').attr('class','not-lead');
//$('img').attr('src','img2.jpg');

$('img').delay(800).fadeOut(800,function(){
	$(this).attr('src','img2.jpg');

}

	).fadeIn(800);

$('img').fadeOut(1200,function(){
	$(this).attr('src','img1.jpg');


}
	).fadeIn(800);



//class methods
/*alert($('p:last').hasClass('lead'));
$('p:first').removeClass('lead').addClass('blue');
$('p:first').toggleClass('blue');

$('p:first').text('oeoeoeoeoeoeoeoe');
$('p:eq(2)').html('ihdfoiuahgiufuh');*/

//$('p:first').html('<a href=google.com>google</a>');
//$('input').val('hola vengo de JQuery');

//var userInput = $('input').val();

//$('h2').children().css('border','4px solid red');
//$('h2').parents('section').children().css('border','4px solid red');

//event
/*$('h2').bind('click',function(){
	$(this).toggleClass('blue');
	});*/

/*$('h2').mouseenter(function(){
	$(this).toggleClass('blue');

	});*/

$('*').keypress('click',function(){
	$(this).toggleClass('blue');
	});




});



$(function(){



});
