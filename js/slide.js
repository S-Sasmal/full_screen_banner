let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow_left'),
    arrowRight = document.querySelector('#arrow_right'),
    current = 0;
    // clear all imge
function reset(){
    for(let i=0; i<sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}

// Init slider
function startSlide(){
reset();
sliderImages[0].style.display = 'block';
}

// Show prev
function slideLeft(){
    reset();
    sliderImages[current -1].style.display = 'block';
    current--;
}

// Show next
function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

// left arrow click
arrowLeft.addEventListener("click", function(){
    
    if(current == 0){
        current = sliderImages.length;
    }
    slideLeft();
});

// right arrow click
arrowRight.addEventListener("click",function(){
   
    if(current == sliderImages.length-1){
        current = -1;
    }
    slideRight();
});

startSlide();
