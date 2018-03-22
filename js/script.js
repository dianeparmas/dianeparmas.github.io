$(function(){
	$(document).ready(function(){ // On load
		$(".footer-padding").css("padding-bottom", $(".footer").outerHeight());
	});
	$(window).resize(function(){ // On resize
		$(".footer-padding").css("padding-bottom", $(".footer").outerHeight());
	});
});
jQuery(document).ready(function() {			
	$('input[type=checkbox]').attr('checked',false);
	$("#valiArtiklidLink").click(function() {
		$('html, body').animate({
			scrollTop: $("#valiArtiklid").offset().top
		}, 500);
	});		
	$("#submitBtn").attr("disabled", "disabled");
	$("#submitBtn").addClass('disabled-btn');			
	if ( $(".choices-wrapper").css('display') === ('block') ) {
		$(".choices-wrapper").css('borderBottom', 'none');
	}
	//Akordioni plokid
	$(".tabs-title").click(function() {
	   $(this).toggleClass('active');
	   var checkElement = $(this).next().next();
		if ((checkElement.is('.choices-wrapper')) && (checkElement.is(':visible'))) {
			return false;
		}
		if ((checkElement.is('.choices-wrapper')) && (!checkElement.is(':visible'))) {
			$('.choices-wrapper:visible').not(checkElement.parent()).slideUp('normal');					
			checkElement.slideDown('normal');	
			$('html, body').animate({
			  scrollTop: $(".tabs-title").offset().top
			}, 500);
			return false;
		}					 
	});
	//Akordioni plokkide checkboxide valikud
	var tabs1 = $("#tabs-1");
	var tabs2 = $("#tabs-2");
	var tabs3 = $("#tabs-3");
	var tabs4 = $("#tabs-4");
	var n1 = 0;
	var n2 = 0;
	var n3 = 0;
	var n4 = 0;
	function checkedInput(amount, id) {
	   return function(e) {
			var length1 = tabs1.find($( " input:checked" )).length;
			var length2 = tabs2.find($( " input:checked" )).length;
			var length3 = tabs3.find($( " input:checked" )).length;
			var length4 = tabs4.find($( " input:checked" )).length;    
			amount =  id.find($( " input:checked" )).length; 
			$(this).closest($('.choices-wrap')).find($('.checkedCounterDiv span')).html(amount + ' / 3');
			if ($(this).is(':checked')) {;
				$(this).parent().parent().css('backgroundColor', '#fffdef');
				$(this).next().css('backgroundColor', '#fff6bf');
				$(this).next().css('border', '1px solid #f0ce00');
			}else {
				$(this).parent().parent().css('backgroundColor', '#FFF');
				$(this).next().css('backgroundColor', '#FFF');
				$(this).next().css('border', '1px solid #ddd');
			}    
			//kui igas plokis on vähemalt 1 check'itud, siis muutub nupp aktiivseks
			if ( length1 > 0 && length2 > 0 && length3 > 0 && length4 > 0) {     
				$("#submitBtn").removeAttr('disabled');
				$("#submitBtn").removeClass('disabled-btn');
				$("#submitBtn").addClass('valmis-btn');
			} else {     
				$("#submitBtn").attr("disabled", "disabled");
				$("#submitBtn").addClass('disabled-btn');
				$("#submitBtn").removeClass('valmis-btn');
			}  
	   };
	}			  
	$("#tabs-1 input[type=checkbox]").click(checkedInput(n1, tabs1)); 
	$("#tabs-2 input[type=checkbox]").click(checkedInput(n2, tabs2)); 
	$("#tabs-3 input[type=checkbox]").click(checkedInput(n3, tabs3)); 
	$("#tabs-4 input[type=checkbox]").click(checkedInput(n4, tabs4)); 
	// Kampaania tingimus popup
	$('#tingimus').on("click", function() {
		$(".modal-outer").toggleClass('active');
		$('html, body').animate({
			  scrollTop: $(".modal-outer")
			});
			return false;
	});
	$('#modal .close').on("click", function(){
		$(".modal-outer").removeClass('active');
	});
	//Järgmine teema nupp avab järgmise akordioni ploki ja sulgeb praeguse
	$('.jargmine-btn').on("click", function(){
		var nextWrapper = $(this).parentsUntil($('.content')).next().find($('.choices-wrapper'));
		if ((nextWrapper.is('.choices-wrapper')) && (nextWrapper.is(':visible'))) {
			return false;
		}
		if ((nextWrapper.is('.choices-wrapper')) && (!nextWrapper.is(':visible'))) {
			$('.choices-wrapper:visible').not(nextWrapper.parent()).slideUp('normal');
			nextWrapper.slideDown('normal');	
			$('html, body').animate({
			  scrollTop: $(".tabs-title").offset().top
			}, 500);
			return false;
		}
	});
	//Kustutab aadressireal ära ankur-lingi #
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			/*$('html, body').animate({
			  scrollTop: target.offset().top
			}, 1000);*/
			return false;
		  }
		}
	  });
	});
});			