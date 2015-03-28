$(document).ready(function(){
	heightTopPosition('#home', '.container');

	$(window).resize(function(){
		heightTopPosition('#home', '.container');
	});
});

function heightTopPosition(selector, container){
	var $currentHeight = $(selector).height();
	$(container).attr('style', 'padding-top: ' + $currentHeight + 'px;');

}