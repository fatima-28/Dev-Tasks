
showSlides();
function showSlides() {
    var i;
 var slides = document.getElementsByClassName("image-sliderfade"); 
 
 for (i = 0; i < slides.length; i++) {
      
        slides[i].style.display = "none"; 
    }var  slideIndex=0; 
    slideIndex++;
       console.log(slideIndex);
          if (slideIndex > slides.length) 
    {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
   
  
    setTimeout(showSlides, 2000); 
}