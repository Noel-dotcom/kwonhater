const message = `I miss you Lexi, I think and yearn about you everyday.\n\nI’m really sorry for everything, I'm pretty much in shambles after you left. \n\nI know you’re doing better without me and don’t miss me, but I just hope you’re okay.\n\nI hope you’re not bullying our child Bri anymore. I pray for you everyday. I miss you and Bri.`;

function showLetter() {
   // Play background music
  document.getElementById("bgMusic").play();

  // Hide intro and button
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
