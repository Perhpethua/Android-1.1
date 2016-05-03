$('.navbtn').click(function(){
	$(this).toggleClass('open');/*menu btn becomes purple*/
	$('nav ul li').slideToggle(500);

});

$(window).resize(function(){
	if($(window).width() > 600){
		$('ul.navigation').removeAttr('style');
	}
})
