// слайдер на главной

const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;


function init(){
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.getElementsByClassName.width = width*images.length + 'px';
    images.forEach( item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

window.addEventListener('resize', init);
init();

document.querySelector('.slider-prev').addEventListener('click', function(){
    count--;
    if(count < 0){
        count = images.length - 1;
    }
    rollSlider();
});

document.querySelector('.slider-next').addEventListener('click', function(){
    count++;
    if(count >= images.length){
        count = 0;
    }
    rollSlider();
});

function rollSlider(){
    sliderLine.style.transform = 'translate(-' + count*width + 'px)';
}


// выборка сцена по дате

function viewBlockFirst(){
    document.getElementById("playsSelectFirst").style.display = "block";
};

function noneBlockFirst(){
    document.getElementById("playsSelectFirst").style.display = "none";
};

function viewBlockSecond(){
    document.getElementById("playsSelectSecond").style.display = "block";
};

function noneBlockSecond(){
    document.getElementById("playsSelectSecond").style.display = "none";
};

function viewBlockThird(){
    document.getElementById("playsSelectThird").style.display = "block";
};

function noneBlockThird(){
    document.getElementById("playsSelectThird").style.display = "none";
};