const btnHamburger = document.querySelector('#btnHamburger');
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if(btnHamburger.classList.contains('open')){
        btnHamburger.classList.remove('open');
    }

    else{
        btnHamburger.classList.add('open');
    }
});

// window.onscroll = function() {myFunction()};

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } 
  
//   else {
//     navbar.classList.remove("sticky");
//   }
// }


$(document).ready(function(){

	(function($) {

		$('#header__icon').click(function(e){
			e.preventDefault();
			$('body').toggleClass('with--sidebar');
		});
    
    $('#site-cache').click(function(e){
      $('body').removeClass('with--sidebar');
    });

	})(jQuery);

});