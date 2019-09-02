(function($) { "use strict"
	//Preloader
	$(window).on('load', function(e) { // makes sure the whole site is loaded
		$(".loader svg").fadeOut(); // will first fade out the loading animation
		$(".loader").delay(300).fadeOut("slow"); // will fade out the white DIV that covers the website.
	})	
	
	//Page Scroll to id
	$(window).on("load",function(){
				
		/* Page Scroll to id fn call */
		$(".navbar-nav li a,a[href='#top'],a[data-gal='m_PageScroll2id']").mPageScroll2id({
			highlightSelector:".navbar-nav li a",
			offset: 68,
			scrollSpeed:800
		});				
	}); 
	
	$(document).ready(function() {
		//Scroll back to top
	
		var offset = 300;
		var duration = 400;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.scroll-to-top').fadeIn(duration);
			} else {
				jQuery('.scroll-to-top').fadeOut(duration);
			}
		});
				
		jQuery('.scroll-to-top').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})				
	});
  })(jQuery); 