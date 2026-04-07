const heroImageCollections = [
    '/assets/img/Series/Queens Gambit/queens-gambit-1.jpg',
    '/assets/img/K-Pop/ARTMS/artms-1.jpeg',
    '/assets/img/Anime/AoT/aot-1.jpg'
];

let index = 0;
const img = document.getElementById('hero-image-container');

function changingImage(){
    index = index + 1;
    if(index==heroImageCollections.length){
        index = 0;
    }
    img.src = heroImageCollections[index];
}

// setInterval(changingImage, 5000);

function fadeOutAnimation(){
    document.getElementById('hero-image-container').style.animation="fadeOutAnimation 1s";
}

function fadeInAnimation(){
    document.getElementById('hero-image-container').style.animation="fadeInAnimation 1s";
}

function changingImageAnimation(){
    //fade in 1s
    img.classList.remove('fade-out');
    img.classList.add('fade-in');

    //wait 3s display img

    //wait 4 secs after fade in + display, then do fade out 1s, wait 1s then change img
    setTimeout(() =>{
        //fade out
        
        //wait 1s, then change image
    }, 4000);

}