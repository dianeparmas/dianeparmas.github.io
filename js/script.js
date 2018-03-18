$(function(){
	$(document).ready(function(){ // On load
		$('.fullscreen').css({'min-height':(($(window).height()))+'px'});
		$('.full-line').css({'line-height':(($(window).height()))+'px'});
		$(".footer-padding").css("padding-bottom", $(".footer").outerHeight());
	});
	$(window).resize(function(){ // On resize
		$('.fullscreen').css({'min-height':(($(window).height()))+'px'});
		$('.full-line').css({'line-height':(($(window).height()))+'px'});
		$(".footer-padding").css("padding-bottom", $(".footer").outerHeight());
	});
});
jQuery(document).ready(function() {			
	$("#valiArtiklidLink").click(function() {
		$('html, body').animate({
			scrollTop: $("#valiArtiklid").offset().top
		}, 500);
	});		
	$("#submitBtn").attr("disabled", "disabled");
	$("#submitBtn").addClass('disabled-btn');			
	if ( $(".choices-wrap section").css('display') === ('block') ) {
		$(".choices-wrap section").css('borderBottom', 'none');
	}
	$(".tabs-title").click(function() {
	   $(this).toggleClass('active');
	   var checkElement = $(this).next();
		if ((checkElement.is('section')) && (checkElement.is(':visible'))) {
			return false;
		}
		if ((checkElement.is('section')) && (!checkElement.is(':visible'))) {
			$('.choices-wrap section:visible').not(checkElement.parent()).slideUp('normal');					
			checkElement.slideDown('normal');	
			$('html, body').animate({
			  scrollTop: $(".tabs-title").offset().top
			}, 500);
			return false;
		}					 
	});				
	$(".btn").click(function() {
		$(this).next().slideToggle();
	});
	var tabs1 = $("#tabs-1");
	var tabs2 = $("#tabs-2");
	var tabs3 = $("#tabs-3");
	var tabs4 = $("#tabs-4");
	var n1 = 0;
	var n2 = 0;
	var n3 = 0;
	var n4 = 0;
	function printNumber(number, number2) {
	   return function(e) {
			var length1 = tabs1.find($( " input:checked" )).length;
			var length2 = tabs2.find($( " input:checked" )).length;
			var length3 = tabs3.find($( " input:checked" )).length;
			var length4 = tabs4.find($( " input:checked" )).length;    
			number =  number2.find($( " input:checked" )).length;     
			$(this).parentsUntil($('.choices-wrap')).prev().find($('span')).html(number + ' / 3');
			if ($(this).is(':checked')) {;
				$(this).parent().parent().css('backgroundColor', '#fffdef');
			}else {
				$(this).parent().parent().css('backgroundColor', '#FFF');
			}                           
			if ( length1 > 0 && length2 > 0 && length3 > 0 && length4 > 0) {     
				$("#submitBtn").removeAttr('disabled');
				$("#submitBtn").removeClass('disabled-btn');
				$("#submitBtn").addClass('valmis-btn');
			} else {     
				$("#submitBtn").attr("disabled", "disabled");
				$("#submitBtn").addClass('disabled-btn');
			}  
	   };
	}			  
	$("#tabs-1 input[type=checkbox]").click(printNumber(n1, tabs1)); 
	$("#tabs-2 input[type=checkbox]").click(printNumber(n2, tabs2)); 
	$("#tabs-3 input[type=checkbox]").click(printNumber(n3, tabs3)); 
	$("#tabs-4 input[type=checkbox]").click(printNumber(n4, tabs4)); 

	$('#tingimus').on("click", function() {
		$(".modal-outer").toggleClass('active');
		$('html, body').animate({
			  scrollTop: $(".modal-outer").offset().top
			}, 500);
			return false;
	});
	$('#modal .close').on("click", function(){
		$(".modal-outer").removeClass('active');
	});
	$('.jargmine-btn').on("click", function(){
		var x = $(this).parentsUntil($('.content')).next().find($('section'));
		if ((x.is('section')) && (x.is(':visible'))) {
			return false;
		}
		if ((x.is('section')) && (!x.is(':visible'))) {
			$('.choices-wrap section:visible').not(x.parent()).slideUp('normal');
			x.slideDown('normal');	
			$('html, body').animate({
			  scrollTop: $(".tabs-title").offset().top
			}, 500);
			return false;
		}
	});
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
});			