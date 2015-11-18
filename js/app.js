$(document).ready(function() {


$('#nav').find('button').on('click', function () {
	$(this).hide();
	$('#lightbox').slideToggle('slow');
});

$('#lightbox').find('i').on('click',function() {
	$('#lightbox').slideToggle('slow');
	$('#nav').find('button').show();
});	
});
