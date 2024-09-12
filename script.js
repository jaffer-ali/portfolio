// Array of words to cycle through
// Jaffer change it here to add more words
const words = ["Brain Implants", "Baja", "Cars", "Wheels"];

function cycleWords() {
    const textChangeElements = document.querySelectorAll('.text-change');
    
    textChangeElements.forEach((element) => {
        let wordIndex = 0;
        setInterval(() => {
            // Fade out the text
            element.style.opacity = 0;
            
            setTimeout(() => {
                wordIndex = (wordIndex + 1) % words.length;
                element.textContent = words[wordIndex];
                
                element.style.opacity = 1;
            }, 500); 
        }, 2000); 
    });
}

cycleWords();
