AOS.init();

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides1");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}



var myIndex2 = 0;
carousel2();

function carousel2() {
  var i;
  var x2 = document.getElementsByClassName("mySlides2");
  for (i = 0; i < x2.length; i++) {
    x2[i].style.display = "none";  
  }
  myIndex2++;
  if (myIndex2 > x2.length) {myIndex2 = 1}    
  x2[myIndex2-1].style.display = "block";  
  setTimeout(carousel2, 3000); // Change image every 2 seconds
}


var myIndex3 = 0;
carousel3();

function carousel3() {
  var i;
  var x3 = document.getElementsByClassName("mySlides3");
  for (i = 0; i < x3.length; i++) {
    x3[i].style.display = "none";  
  }
  myIndex3++;
  if (myIndex3 > x3.length) {myIndex3 = 1}    
  x3[myIndex3-1].style.display = "block";  
  setTimeout(carousel3, 3000); // Change image every 2 seconds
}



var myIndex4 = 0;
carousel4();

function carousel4() {
  var i;
  var x4 = document.getElementsByClassName("mySlides4");
  for (i = 0; i < x4.length; i++) {
    x4[i].style.display = "none";  
  }
  myIndex4++;
  if (myIndex4 > x4.length) {myIndex4 = 1}    
  x4[myIndex4-1].style.display = "block";  
  setTimeout(carousel4, 3000); // Change image every 2 seconds
}



const buyBtns = document.querySelectorAll('.js-buy-ticket')
		const modal = document.querySelector('.js-modal')
		const modalClose = document.querySelector('.js-modal-close')
		const modalContainer = document.querySelector('.js-modal-container')

		//Hàm hiện thị modal mua vé
		function showBuyTickets() {
			modal.classList.add('open')
		}

		//Hàm ẩn modal mua vé

		function hideBuyTickets() {
			modal.classList.remove('open')
		}

		//Lập qua từng thẻ button và nghe hành vi click

		for (const buyBtn of buyBtns) {
			buyBtn.addEventListener('click', showBuyTickets)
		}

		//Nghe hành vi click vào button close

		modalClose.addEventListener('click', hideBuyTickets)
		modal.addEventListener('click', hideBuyTickets)
		modalContainer.addEventListener('click', function (event) {
			event.stopPropagation()
		})



