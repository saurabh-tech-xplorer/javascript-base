var counter = 0;
var carouselSlides = document.querySelectorAll('.slide');
document.querySelector('#prev')
.addEventListener('click', prevClick);

document.querySelector('#next')
.addEventListener('click', nextClick);

function calculatePosition(){
    carouselSlides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - counter)}%)`;
    });
}

calculatePosition();


function prevClick(e){
    e.preventDefault();
    counter=counter-1;
    if (0 > counter) {
        counter = carouselSlides.length - 1;
    };
    calculatePosition();
}

function nextClick(e){
    e.preventDefault();
    counter=counter+1;
    if (carouselSlides.length - 1 < counter) {
        counter = 0;
    };
    calculatePosition();  
}

