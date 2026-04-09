const heroImageCollections = [
    '/assets/img/Series/Queens Gambit/queens-gambit-1.jpg',
    '/assets/img/K-Pop/ARTMS/artms-1.jpeg',
    '/assets/img/Anime/AoT/aot-1.jpg'
];

let index = 0;
const imgHero1 = document.getElementById('hero-image-container');
const imgHero2 = document.getElementById('hero-image-container-2');

function changeImage(element){
    index = index + 1;
    if(index==heroImageCollections.length){
        index = 0;
    }
    element.src = heroImageCollections[index];
}

function fadeOutAnimation(){
    document.getElementById('hero-image-container').style.animation="fadeOutAnimation 1s";
}

function fadeInAnimation(){
    document.getElementById('hero-image-container').style.animation="fadeInAnimation 1s";
}

function changingImageAnimation(){
    //pseudocode

    //initial state: 
    //img1 front img2 behind
    //img1 img2 visible

    //wait 3s
    setTimeout(() => {
        //crossfade: img1 fade out 1s
        imgHero1.classList.add('fade-out');
        console.log("img1 fade out")

        setTimeout(() => {
            //img1 change source
            changeImage(imgHero1);
            console.log("img1 change image")
        },1000);

        //wait 3s
        setTimeout(() => {
            //crossfade: img1 fade in 1s
            imgHero1.classList.remove('fade-out');
            imgHero1.classList.add('fade-in');
            console.log("img2 fade out")

            //img2 change source
            setTimeout(() => {
                //img2 change source
                changeImage(imgHero2);
                console.log("img2 change image")
            },1000);

        },3000);

    },3000);

}

setInterval(() => {
    changingImageAnimation();
}, 8000);

