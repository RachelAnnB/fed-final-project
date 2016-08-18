//---------------Smooth Scrolling---------------//
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
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

//---------------Show/Hide FAQs---------------//
function showonlyone(thechosenone) {
	var newboxes = document.getElementsByClassName("newboxes");
	for (var x = 0; x < newboxes.length; x++) {
		name = newboxes[x].getAttribute("class");
		if (name == 'newboxes') {
			if (newboxes[x].id == thechosenone) {
				newboxes[x].style.display = 'block';
			} else {
				newboxes[x].style.display = 'none';
			}
		}
	}
}

//---------------Collapsible FAQ Buttons---------------//
var acc = document.getElementsByClassName("faq__question");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].onclick = function() {
		this.classList.toggle("active");
		this.nextElementSibling.classList.toggle("show");
	}
}
