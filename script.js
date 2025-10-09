const message = `I miss you Lexi, I think about you and yearn for you everyday.\n\nI’m really sorry for everything and you probably hate me to the core, I don’t think you wanna talk to me either so I’m putting it here.\n\nI hope you’re doing well, I hope you’re not bullying Bri anymore. I pray for you everyday. I miss you and Bri.`;

function showLetter() {
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
