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
