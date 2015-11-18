$(document).ready(function() {


$('#nav').find('button').on('click', function () {
	$(this).hide();
	var ul = $("#nav li").slideToggle();
	var lightbox = '<div id="lightbox">' + '</div>';
	$('body').append(lightbox);
	$('#lightbox').append(ul);
	$(ul).css('text-align', 'center').css('color', 'white').css('list-style','none');
	$('#lightbox').find('p').on('click', function() {
		$('#lightbox').remove();	
	});


});
	
	
});


