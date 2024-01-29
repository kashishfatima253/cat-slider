document.getElementById('scrollButton').addEventListener('click', function() {
    scrollImages();
});

function scrollImages() {
    const cardImages = document.querySelector('.card-images');
    const firstImage = cardImages.firstElementChild;
    console.log(cardImages);
    cardImages.appendChild(firstImage.cloneNode(true));
    cardImages.removeChild(firstImage);
    // console.log(cardImages);
    // Reset the scroll position to show the original first image
    cardImages.style.transition = 'none';
    cardImages.style.transform = 'translateY(0)';

    void cardImages.offsetHeight; 
    cardImages.style.transition = 'transform 0.5s ease';
    cardImages.style.transform = 'translateY(-600px)';
}
