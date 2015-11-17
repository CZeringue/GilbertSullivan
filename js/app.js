$(document).ready(function() {

$('#nav').find('button').on('click', function () {
	var ul = $("#nav li").slideToggle();
	var lightbox = '<div id="lightbox">' + ul + '</div>';
	$('body').append(lightbox);
	$('nav li').css('text-align', 'center');
});

$('#lightbox').live('click', function() { //must use live, as the lightbox element is inserted into the DOM
		$('#lightbox').hide();
	});
});


