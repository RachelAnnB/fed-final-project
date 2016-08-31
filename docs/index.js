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
//Owl Button
$(window).scroll(function() {
	if ($(this).scrollTop() >= 50) {
		// If page is scrolled more than 50px
		$('#return-to-top').fadeIn(200);
		$('#owl-btn').fadeIn(200);
		// Fade in the btn
	} else {
		$('#return-to-top').fadeOut(200);
		$('#owl-btn').fadeOut(200);
		// Else fade out the btn
	}
});
$('#return-to-top').click(function() {
	// When arrow is clicked
	$('body,html').animate({
		scrollTop : 0
		// Scroll to top of body
	}, 500);
});
$('#owl-btn').click(function() {
	// When arrow is clicked
	$('body,html').animate({
		scrollTop : 0
		// Scroll to top of body
	}, 500);
});

//When you scroll to the bottom of the page, the button moves up
//When you start to scroll back up, the button moves back down
$(window).scroll(function() {
	if (window.matchMedia("(min-width: 900px)").matches) {
		//document.scrollTop() = distance scrolled from the top
		//document.height() = total height of web page
		//window.height() = browser viewport height
		//168 = height of footer
		if ($(document).scrollTop() > $(document).height() - $(window).height() - 168) { //if scrolled past footer

			//dynamically set proper height to be N pixels from the bottom of the page, 193 = 168 + 25 (padding)
			var heightToSet = ($(document).scrollTop() - ($(document).height() - $(window).height() - 193)); 

			/*console.table([{ 
        scrollTop: $(document).scrollTop(),
        windowHeight: $(window).height(),
        documentHeight: $(document).height(),
        heightToSet: (heightToSet)
      }]);*/

			$(".return-to-top-btn").css('bottom', heightToSet);
			var owlHeightToSet = heightToSet + 40;
			$("#owl-btn").css('bottom', owlHeightToSet);
		}
		else {
			$(".return-to-top-btn").css('bottom', 25);
			$("#owl-btn").css('bottom', 65);
		}
	}
	else {
		$(".return-to-top-btn").css('bottom', 0);
		$("#owl-btn").css('bottom', 0);
	}
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
