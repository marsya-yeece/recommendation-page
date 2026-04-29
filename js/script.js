// ================================
// HERO SECTION
// ================================

const IMAGE_DISPLAY_DURATION = 5000;
const FADE_ANIMATION_DURATION = 1000;
const REMAINING_IMAGE_DISPLAY_DURATION = IMAGE_DISPLAY_DURATION-FADE_ANIMATION_DURATION;

const titleHero = document.getElementById('hero-image-slide-title');
const imgHero1 = document.getElementById('hero-image-container');
const imgHero2 = document.getElementById('hero-image-container-2');
const img1 = document.getElementById('hero-image-1');
const img2 = document.getElementById('hero-image-2');

const heroImageSlides = [
    { 
        title: "Queen's Gambit",
        image: "/assets/img/Series/Queens Gambit/queens-gambit-1.jpg"
    },
    { 
        title: "ARTMS",
        image: "/assets/img/K-Pop/ARTMS/artms-2.webp"
    },
    { 
        title: "Attack on Titan",
        image: "/assets/img/Anime/AoT/aot-2.jpg"
    },
    
]

const heroTitleCollections = heroImageSlides.map(slide => slide.title);
const heroImageCollections = heroImageSlides.map(slide => slide.image);

let indexTitle = 0;
function changeTitle(){
    indexTitle = indexTitle + 1;
    if(indexTitle==heroTitleCollections.length){
        indexTitle = 0;
    }
    titleHero.textContent = heroTitleCollections[indexTitle];
}

let indexImage = 0;
function changeImage(element){
    indexImage = indexImage + 1;
    if(indexImage==heroImageCollections.length){
        indexImage = 0;
    }
    element.src = heroImageCollections[indexImage];
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

function fadeAndDisplay(element){
     if(element==imgHero1){
        fadeIn(imgHero1);
     }else if(element==imgHero2){
        fadeOut(imgHero1)
     }else{
        throw Error("Invalid element for display image function.");
     }
}

async function firstSlide() {
    changeImage(img1);
    changeImage(img2);
    changeTitle();

    slideOn(img1);
    await delay(IMAGE_DISPLAY_DURATION);
}

let current = 0;
const slides = [
    { image: img1, container: imgHero1},
    { image: img2, container: imgHero2}
];
async function nextSlide() {
    let prev = current;
    current = (current + 1) % slides.length

    changeTitle();
    slideOn(slides[current].image);
    fadeAndDisplay(slides[current].container);
    await delay(FADE_ANIMATION_DURATION);
    slideOff(slides[prev].image);
    changeImage(slides[prev].image);
    await delay(REMAINING_IMAGE_DISPLAY_DURATION);
}

function main(){

    firstSlide();
    setInterval(() =>{
        nextSlide();
    },IMAGE_DISPLAY_DURATION);
    
}

main();