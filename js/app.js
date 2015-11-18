$(document).ready(function() {


$('#nav').find('button').on('click', function () {
	$(this).hide();
	$('#lightbox').slideToggle();
});

$('#lightbox').find('i').on('click',function() {
	$('#lightbox').slideToggle();
	$('#nav').find('button').show();
})
	
});
