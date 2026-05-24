// JavaScript for the image slider

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
	var sliderImage = document.getElementsByClassName("sliderimage");   
	var sliderText = document.getElementsByClassName("slidertext");
	if (n > sliderImage.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = sliderImage.length}
	for (i = 0; i < sliderImage.length; i++) {
		sliderText[i].style.display = "none";
		sliderImage[i].style.display = "none";
	}
	sliderText[slideIndex-1].style.display = "inline";
	sliderImage[slideIndex-1].style.display = "block";
}