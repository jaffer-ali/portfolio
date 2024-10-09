// Array of words to cycle through
// Jaffer change it here to add more words
const words = ["Brain Implants", "Offroad Race Cars", " a Haptic Control Interface", "CNCing Pumpkin", "Collaborating with Wintergatan"];

function cycleWords() {
    const textChangeElements = document.querySelectorAll('.text-change');
    
    textChangeElements.forEach((element) => {
        let wordIndex = 0;
        setInterval(() => {
            // Fade out the text
            element.style.opacity = 0;
            
            setTimeout(() => {
                wordIndex = (wordIndex + 1) % words.length;
                element.textContent = "\t" + words[wordIndex];
                
                element.style.opacity = 1;
            }, 500); 
        }, 2000); 
    });
}

cycleWords();
