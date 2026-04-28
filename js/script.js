const IMAGE_DISPLAY_DURATION = 5000;
const FADE_ANIMATION_DURATION = 1000;
const REMAINING_IMAGE_DISPLAY_DURATION = IMAGE_DISPLAY_DURATION-FADE_ANIMATION_DURATION;

let index = 0;
const imgHero1 = document.getElementById('hero-image-container');
const imgHero2 = document.getElementById('hero-image-container-2');
const img1 = document.getElementById('hero-image-1');
const img2 = document.getElementById('hero-image-2');

const heroImageCollections = [
    '/assets/img/Series/Queens Gambit/queens-gambit-2.webp',
    '/assets/img/K-Pop/ARTMS/artms-1.jpeg',
    '/assets/img/Anime/AoT/aot-1.jpg',
    '/assets/img/Anime/AoT/aot-2.jpg'
];

function changeImage(element){
    index = index + 1;
    if(index==heroImageCollections.length){
        index = 0;
    }
    element.src = heroImageCollections[index];
}

function fadeOut(element){
    element.classList.add('fade-out');
    element.classList.remove('fade-in');
}

function fadeIn(element){
    element.classList.remove('fade-out');
    element.classList.add('fade-in');
}

function slideOn(element){
    element.classList.add('slide');
}

function slideOff(element){
    element.classList.remove('slide');
}

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

let firstRun = true;
async function changingImageAnimation(){

    if(firstRun == true){
        //fade to display img 1
        slideOn(img1);
        await delay(IMAGE_DISPLAY_DURATION);
        fadeOut(imgHero1);
        
        console.log("firstRun true");
    }
    
    console.log("firstRun is ", firstRun);

    //fade to display img 2
    slideOn(img2);
    await delay(FADE_ANIMATION_DURATION);
    slideOff(img1);
    changeImage(img1);
    await delay(REMAINING_IMAGE_DISPLAY_DURATION);
    fadeIn(imgHero1);

    //fade to display img 1
    slideOn(img1);
    await delay(FADE_ANIMATION_DURATION);
    slideOff(img2);
    changeImage(img2);
    await delay(REMAINING_IMAGE_DISPLAY_DURATION);
    fadeOut(imgHero1);

    firstRun = false;
    changingImageAnimation();
}

changingImageAnimation();