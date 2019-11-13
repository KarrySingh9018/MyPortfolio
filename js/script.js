$(document).ready(function() {

	$('#slides').superslides({
		animation: 'fade',
		play: 3000,
		pagination: false
	});

	var typed = new Typed(".typed", {
		strings: ["Tech Enthusiast.", "Problem Solver.", "Polyglot Programmer.", "Software Engineer."],
		typeSpeed: 70,
		loop: true,
		startDelay: 1000,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
		loop: true,
		items: 4,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			768: {
				items: 3
			},
			938: {
				items: 4
			}
		}
	});

	//chart executing on scrolling
	var skillsTopOffset = $('.skillSection').offset().top;

	$(window).scroll(function() {

		if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

			$('.chart').easyPieChart({
				easing: 'easeInOut',
				barColor: '#fff',
				trackColor: false,
				scaleColor: false,
				lineWidth: 4,
				size: 152,
				onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				}
			});

		}
	});

	var statsTopOffset = $('.statsSection').offset().top;

	$(window).scroll(function() {

		if(window.pageYOffset > statsTopOffset - $(window).height() + 200) {

			$('.counter').each(function() {
				var $this = $(this),
				    countTo = $this.attr('data-count');
				  
				  	$({ countNum: $this.text()}).animate({
				    	countNum: countTo
				  	},

				  	{
						duration: 1000,
					    easing:'linear',
					    step: function() {
					      $this.text(Math.floor(this.countNum));
				   		},

					    complete: function() {
					      $this.text(this.countNum);
					      //alert('finished');
						}

					});  
		  
		  	});
		}
	});

	$("[data-fancybox]").fancybox();

	$(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});

	$("#filters a").click(function() {

		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");

		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});

		return false;
	});

	const nav = $("#navigation");
	const navTop = nav.offset().top;

	$(window).on("scroll", stickyNavigation);

	function stickyNavigation() {

		var body = $("body");

		if($(window).scrollTop() >= navTop) {
			body.addClass("fixedNav");
		}
		else {
			body.removeClass("fixedNav");
		}




	}

});