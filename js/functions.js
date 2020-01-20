jQuery(function($) {

	//#main-slider
	$(function(){
		$('#main-slider.Carousel').carousel({
			interval: 8000
		});
	});

	window.onscroll = function() {myFunction()};
		
	var navbar = document.getElementById("navbar");
	var navbarbrand = document.getElementById("navbarbrand");
	// var sticky = navbar.offsetTop;
	
	function myFunction() {
	  if (window.pageYOffset >= 30) {
		navbar.classList.add("sticky")
		navbarbrand.classList.add("change-navbar-brand");
	
	  } else {
		navbar.classList.remove("sticky");		
		navbarbrand.classList.remove("change-navbar-brand");
	  }


	  if(window.pageYOffset >=100){
		  navbarbrand.style.marginTop = 0;
		  
	  }
	}



	//Initiat WOW JS
	new WOW().init();

	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		});
		$('.scrollup').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 1000);
				return false;
		});

	// portfolio filter
	$(window).load(function(){'use strict';
		var $portfolio_selectors = $('.portfolio-filter >li>a');
		var $portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows'
		});

		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});


	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});



// validations 
var name,email,message;
document.getElementById("btn_contact").addEventListener('click',(e)=>{
	
	e.preventDefault();
	  // get values from FORM
	name = document.getElementById('name').value;
	email = document.getElementById('email').value;
	message = document.getElementById('message').value;

	  let obj = {
		  name: name,
		  email: email,
		  message: message
	  };
	  //mail validation format
	  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	  if(name!="" && validateEmail(email) && message!=""){
	  fetch('http://www.giriksoni.com/projects/port_tools/myportfolioContact', {
		  method: 'POST',
		  headers: {
			  'Content-Type': 'application/json'
		  },
		  body: JSON.stringify({
			  user: {
				  name: name,
				  email: email,
				  message: message
			  }
		  })
	  });

	  alert(`Thankyou ${name}. Your message has been sent successfully.`);
	  $("input#name").val('');
	  $("input#email").val('');
	  $("textarea#message").val('');


  }

  else{
	  if(name==null){
		  alert("Please fill in the name")
	  }
	  else if(message==null){
		  alert("Please send me a message so that we can know you better")
	  }
	  else{
	  alert("Please fill in the required fields")
  }
  }
})

function validateEmail(inputtext) {

		  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if( $("input#email").val().match(mailformat))
  {
  return true;
  }
  else
  {
  alert("You have entered an invalid email address!");
  $("input#email").focus();
  return false;
  }
	
}

});