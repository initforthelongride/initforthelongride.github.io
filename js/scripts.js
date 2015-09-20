// JavaScript for mag
(function($) {
$(document).ready(function() {
	"use strict";
	
		// Mobile Menu
		$('.toggle-menu').jPushMenu({closeOnClickLink: false});
		$('.dropdown-toggle').dropdown();
		
		
		
		// Fancybox
		$(".fancybox").fancybox();
		
		
		
		// Search Box Show
		$('nav .search-btn').on('click', function(e) {
		$(".search-box").addClass("show-me");
		});
		
		
		
		// Search Box Hide
		$('.search-close').on('click', function(e) {
		$(".search-box").removeClass("show-me");
		});
		
		
		
		// Side Box
		$('nav .side-menu').on('click', function(e) {
		$(".side-box").toggleClass("show-me");
		$("body").toggleClass("body-left");
		});
		

	});
		
		
		// Highlight slider
		$('.highlight-slider .slider-inner').slick({
		  infinite: true,
		  speed: 500,
		  fade: true,
		  cssEase: 'linear'
		});
						
		
		
		// Posts Carousel
		$('.hightlight-posts').slick({
		infinite: true,
	  	speed: 300,
	  	slidesToShow: 3,
	  	slidesToScroll: 1,
	  	responsive: [
		{
		  breakpoint: 1179,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 989,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		]
	});
	
	
	
	// Gallery Carousel
		$('.gallery-carousel .carousel-container').slick({
		infinite: true,
		 arrows: false,
		dots: true,
	  	speed: 300,
	  	slidesToShow: 5,
	  	slidesToScroll: 1,
	  	responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 4,
			slidesToScroll: 1,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		}
		]
	});
		
		
		
})(jQuery);