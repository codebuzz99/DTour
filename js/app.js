function setImage(){

	var image;

	$('.cover-image').each(function(i){
		image = new Image();
		image.src = $(this).children('img').attr("src");

		thisContainer = $(this);

		$(image).on('load', function(){

			var coverWidth = $('.cover-image').eq(i).width();
			var coverHeight = $('.cover-image').eq(i).height();
			
			containerRatio = coverWidth/coverHeight;
			imageRatio = this.width/this.height;

			if(imageRatio > containerRatio){

				$('.cover-image').eq(i).children('img').css({
					'height': '100%',
					'width': 'auto'
				});
				$('.cover-image').eq(i).children('img').css({
					'left': -($('.cover-image').eq(i).children('img').width() - $('.cover-image').eq(i).width())/2 + 'px',
					'top': 0
				});
			}else{
				$('.cover-image').eq(i).children('img').css({
					'height': 'auto',
					'width': '100%'
				});
				$('.cover-image').eq(i).children('img').css({
					'left': 0,
					'top': -($('.cover-image').eq(i).children('img').height() - $('.cover-image').eq(i).height())/2 + 'px'
				});
			}
		});
	});
}

$(window).on('load resize', function(){
	setImage();
});


$(".scroll").click(function(event){		
	event.preventDefault();
	$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
});


$("#main-menu li").on('click', function(){
	$(this).addClass('active');
	$(this).siblings('li').removeClass('active');
});


$(".menu-toggloer").on('click', function(){
	$('#navbar-example').addClass('show-now');
});
$(".cloz-menu").on('click', function(){
	$('#navbar-example').removeClass('show-now');
});



(function(){
	$('.FlowupLabels').FlowupLabels({
		/*
		 * These are all the default values
		 * You may exclude any/all of these options
		 * if you won't be changing them
		 */
		
		// Handles the possibility of having input boxes prefilled on page load
		feature_onInitLoad: true, 
		
		// Class when focusing an input
		class_focused: 		'focused',
		// Class when an input has text entered
		class_populated: 	'populated'	
	});
})();