// Spooky animation for the "RIP" message and ghost message
document.addEventListener('DOMContentLoaded', () => {
    const ghostMessage = document.getElementById("ghost-message");

    // Ghostly whisper sound effect
    const audio = new Audio('https://www.soundjay.com/button/beep-07.wav'); // A beep sound, you can replace with a more spooky sound
    
    let isPlaying = false;
    
    setInterval(() => {
        if (!isPlaying) {
            audio.play();
            isPlaying = true;
            setTimeout(() => isPlaying = false, 2000);  // Prevent it from playing continuously
        }

        // Randomly change text of ghost message for an eerie effect
        const messages = [
            "Something eerie awaits...",
            "Can you feel it easing closer?",
            "Watch your back... It’s coming.",
            "Are you alone right now?",
            "The dark never forgets.",
            "Do you hear that whispering?",
            "Are you afraid of the DARK?",
            "Come back soon"
            
        ];
        
        ghostMessage.innerText = messages[Math.floor(Math.random() * messages.length)];
    }, 3000);
});