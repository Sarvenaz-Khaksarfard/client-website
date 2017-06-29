$(document).ready(function(){
	
		$(".menu a").each(function(){
			$(this).on("click", function(event){
				if(this.hash !== "" ){
					event.preventDefault();
					var hash = this.hash;					
					$("html, body").animate({scrollTop: $(hash).offset().top}, 2000);
					$(".menu a").css("color", "white");
					$(this).css("color", "color: rgb(170,170,170)");
				}
			});
		});
	
		$("#topbtn").animate({bottom: "40px"}, 1000, moveUp);
		
		function moveUp(){
			if($("#topbtn").css("bottom", "40px")){
				$(this).animate({bottom: "20px"}, 1000, moveDown);
			}
		}
		
		function moveDown(){
			if($("#topbtn").css("bottom", "20px")){
				$(this).animate({bottom: "40px"}, 1000, moveUp);
			}
		}
		
		$("#topbtn").click(function(){
			$("html,body").animate({scrollTop: 0}, 1500);
		});
	
		$("#hamburger-menu").click(function(){			
			$(".menu").toggleClass('open');						
		});
		
		$("#background-text").fadeIn(3000);
		
		
		var current = $("#test").offset().top;
		$(window).scroll(function () {
		if($(this).scrollTop()> 700 && $(this).scrollTop() < 1200){
			$("#test").fadeIn(1000);			
			}
			else{
			$("#test").fadeOut(1000);
			}
		});
	
		$(window).scroll(function(){			
			if($(this).scrollTop()> 100){
				$("#left-aboutme").addClass("slideLeft");
				$("#right-aboutme").show("slide", { direction: "right" }, 2000);
				$("#right-aboutme").css("display", "block");
			}
		});
		
		count=0;
		services = ["Implement a solid, tested mobile or web solution", "Find a designer to make ur project attractive", "Deploy and monitor your project", "Give u insights about digital marketing to target the right audience"];
		$("#dynamic-background-message").text(services[0]);
		setInterval(function(){
			count++;
			$("#dynamic-background-message").fadeOut(1000, function(){
				$(this).text(services[count%services.length]).fadeIn(1000);
			});
		}, 3000);
		
		c = 0;
		messages = ["I'm quick", "I'm determined", "I'm passionate","I'm detail oriented","I'm agile","I'm impatient","I'm random","I'm motivated","I'm dedicated" ];
		$("#dynamic-text").text(messages[0]);
		setInterval(function(){
			c++;
			$("#dynamic-text").fadeOut(200, function(){
				$(this).text(messages[c%messages.length]).fadeIn(200);
			});
		}, 1500);
		
		$("#projectbtn").click(function(){
			$("#projectbtn").fadeOut(100);
			$(".slideshow-container").fadeIn(1000);
		});
	});



var slideIndex = 1;
var slides = document.getElementsByClassName("slides");
var dots = document.getElementsByClassName("dot");

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
 
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
var slideIn =0;

startAutomaticSlideShow();

var time;

function startAutomaticSlideShow(){
		clearInterval(time);
		time= setInterval(automaticSlideShow, 4000);
}
function automaticSlideShow(){


	if(slideIn>= slides.length){
		slideIn= 0;
	}

	for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
	}
  
   for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIn].style.display = "block";	
	dots[slideIn].className += " active";
	
	slideIn++;	
}

function stopAutomaticSliding(){
	
	clearInterval(time);
}

var inputes = document.getElementsByClassName("field");
var error = document.getElementsByClassName("error");	
var regex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var counter=0;

function validateForm(){
	counter=0;
	var valid = true;
	var i;
	for(i=0; i<inputes.length; i++){
		counter = emptyField(i);
		
	}
	if(counter>0)
		valid = false;
	return valid;
}

function emptyField(n){	
		if(inputes[n].value == ""){
			inputes[n].style.border = "solid 1px red";
			error[n].innerHTML = "The " + inputes[n].name +" field is required";
			inputes[n].style.marginBottom = "1%";
			counter++;
		}
		else if(n==1 && !(regex.test(inputes[1].value))){
			inputes[1].style.border = "solid 1px red";
			error[1].innerHTML = "The " + inputes[1].name +" field is invalid";
			inputes[1].style.marginBottom = "1%";
			counter++;
		}
		else{
			inputes[n].style.border = "solid 1px black";
			inputes[n].style.marginBottom = "4%";
			error[n].innerHTML = "";			
		}
	return counter;
}

window.onscroll = function(){displayTopArrow()};

function displayTopArrow(){
	if(document.body.scrollTop> 20){
		document.getElementById("topbtn").style.display = "block";
	}
	else{
		document.getElementById("topbtn").style.display = "none";
	}
}









