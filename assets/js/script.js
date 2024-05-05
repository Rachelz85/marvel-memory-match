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

// Shuffles the images array to ensure a random game board each time
var shuffledImages = images.sort(() => (Math.random() > .5) ? 1 : -1);
var score = 0; // Keeps track of the player's score

// Function to update score
function updateScore(isMatch) {
  const scoreSpan = document.querySelector('.score span');
  if (isMatch) {
      score += 1; // Increment score if there's a match
      scoreSpan.textContent = score; // Update the displayed score
  }
}

// Iterates over the shuffled images array to create each memory game card
for (let i = 0; i < images.length; i++) {
  let card = document.createElement('div');
  card.className = 'card';
  let image = document.createElement('img');
  image.src = shuffledImages[i].src;
  card.appendChild(image);

  // Adds a click event listener to flip the card and check for matches
  card.onclick = function() {
    this.classList.add('cardFlip');
// Delay checking for a match
    setTimeout(function() {
        let flipCard = document.querySelectorAll('.cardFlip'); // Collects all cards that have been flipped
// Checks if there are exactly two flipped cards to proceed with match checking
        if (flipCard.length === 2) {
            let firstImg = flipCard[0].getElementsByTagName('img')[0].src; // Retrieves the source of the image of the first flipped card
            let secondImg = flipCard[1].getElementsByTagName('img')[0].src; // Retrieves the source of the image of the second flipped card
 // Compares the sources of the images to check if they match
            if (firstImg === secondImg) {
// If they match, add 'cardMatch' class to both cards to indicate a successful match
                flipCard[0].classList.add('cardMatch');
                flipCard[1].classList.add('cardMatch');
// Removes 'cardFlip' class since they are now matched
                flipCard[0].classList.remove('cardFlip');
                flipCard[1].classList.remove('cardFlip');
                updateScore(true); // Update score because it's a match
// Checks if the total number of matched cards equals the number of images
// if all matches have been found and the game is won               
                if (document.querySelectorAll('.cardMatch').length === images.length) {
// Displays a winning message with the current score
                    alert('You Win! Your score: ' + score); 
                }
// If they do not match, removes 'cardFlip' class to turn them back over
            } else {
                flipCard[0].classList.remove('cardFlip');
                flipCard[1].classList.remove('cardFlip');
            }
        }
    }, 500); // The timeout delay is set to 500 milliseconds
};

  document.querySelector('.gameboard').appendChild(card);
}