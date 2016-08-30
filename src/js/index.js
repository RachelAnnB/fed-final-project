//---------------Smooth Scrolling---------------//
$(document).ready(function(){
	$('a[href^="#"]:not([href="#parents"]):not([href="#retailers"])').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});

//---------------Back to Top---------------//
//Button
$(window).scroll(function() {
	if ($(this).scrollTop() >= 50) {        
		// If page is scrolled more than 50px
		$('#return-to-top').fadeIn(200);    
		// Fade in the arrow
	} else {
		$('#return-to-top').fadeOut(200);   
		// Else fade out the arrow
	}
});
$('#return-to-top').click(function() {      
	// When arrow is clicked
	$('body,html').animate({
		scrollTop : 0                       
		// Scroll to top of body
	}, 500);
});

//Owl
$(window).scroll(function() {
	if ($(this).scrollTop() >= 50) {        
		// If page is scrolled more than 50px
		$('#owl-btn').fadeIn(200);    
		// Fade in the arrow
	} else {
		$('#owl-btn').fadeOut(200);   
		// Else fade out the arrow
	}
});
$('#owl-btn').click(function() {      
	// When arrow is clicked
	$('body,html').animate({
		scrollTop : 0                       
		// Scroll to top of body
	}, 500);
});

//---------------Responsive Carousel---------------//
$('.responsive').slick({
	dots: true,
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
	infinite: true,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 4,
	responsive: [{
		breakpoint: 1024,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			dots: true
		}
	}, {
		breakpoint: 600,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		}
	}, {
		breakpoint: 480,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}
							 // You can unslick at a given breakpoint now by adding:
							 // settings: "unslick"
							 // instead of a settings object
							]
});
