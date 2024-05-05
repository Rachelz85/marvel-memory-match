const images = [
    { src: 'assets/images/cap.jpg', name: 'captain america', alt: 'Captain America' }, 
    { src: 'assets/images/cap.jpg', name: 'captain america', alt: 'Captain America' },
    { src: 'assets/images/deadpool.jpg', name: 'deadpool', alt: 'Deadpool' },
    { src: 'assets/images/deadpool.jpg', name: 'deadpool', alt: 'Deadpool' },
    { src: 'assets/images/hulk.jpg', name: 'hulk', alt: 'The Hulk' },
    { src: 'assets/images/hulk.jpg', name: 'hulk', alt: 'The Hulk' },
    { src: 'assets/images/ironman.jpg', name: 'iron man', alt: 'Iron Man' },
    { src: 'assets/images/ironman.jpg', name: 'iron man', alt: 'Iron Man' },
    { src: 'assets/images/spiderman.jpg', name: 'spiderman', alt: 'Spider-Man' },
    { src: 'assets/images/spiderman.jpg', name: 'spiderman', alt: 'Spider-Man' },
    { src: 'assets/images/spiderwoman.jpg', name: 'spiderwoman', alt: 'Spider-Woman' },
    { src: 'assets/images/spiderwoman.jpg', name: 'spiderwoman', alt: 'Spider-Woman' },
    { src: 'assets/images/suestorm.jpg', name: 'suestorm', alt: 'Sue Storm' },
    { src: 'assets/images/suestorm.jpg', name: 'suestorm', alt: 'Sue Storm' },
    { src: 'assets/images/wolverine.jpg', name: 'wolverine', alt: 'Wolverine' },
    { src: 'assets/images/wolverine.jpg', name: 'wolverine', alt: 'Wolverine' }
]

// Shuffles the images array  to ensure a random gameboard each time
var shuffleImages = images.sort(() => (Math.random() > .5) ? 1 : -1);

// Iterates over the shuffled images array to create each memory game card
for (let i = 0; i < images.length; i++) {
    let card = document.createElement('div');
    card.className = 'card'
    let image = document.createElement('img');
    image.src = shuffleImages[i].src;
    card.appendChild(image);
    document.querySelector('.gameboard').appendChild(card);
}