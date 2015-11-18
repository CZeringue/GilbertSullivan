$(document).ready(function() {


$('#nav').find('button').on('click', function () {
	$(this).hide();
	$('#lightbox').css('display','block');
});

$('#lightbox').find('i').on('click',function() {
	$('#lightbox').css('display','none');
	$('#nav').find('button').show();
})
	
});
