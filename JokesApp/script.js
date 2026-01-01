async function getjokes() {
  const response = await fetch(
    "https://official-joke-api.appspot.com/jokes/random"
  );

  const data = await response.json();

  document.getElementById("setup").innerText = data.setup;
  document.getElementById("punchline").innerText = data.punchline;
}

function popEmoji(button) {
  const emojiList = ["😂", "🤣", "😆", "😹", "😜"];
  const emoji = document.createElement("span");

  emoji.className = "emoji-pop";
  emoji.textContent = emojiList[Math.floor(Math.random() * emojiList.length)];

  button.parentElement.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 800);
}
