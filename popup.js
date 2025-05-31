const generateBtn = document.getElementById('generate-btn');
const memeContainer = document.getElementById('meme-container');

let memesList = [];

async function loadMemes() {
  try {
    const res = await fetch('https://api.imgflip.com/get_memes');
    const data = await res.json();
    if (data.success) {
      memesList = data.data.memes;
    } else {
      memeContainer.textContent = "Errore nel caricare i meme.";
    }
  } catch (e) {
    memeContainer.textContent = "Errore di rete.";
  }
}

generateBtn.addEventListener('click', () => {
  if (memesList.length === 0) {
    memeContainer.textContent = "Caricamento meme in corso, riprova...";
    return;
  }
  const meme = memesList[Math.floor(Math.random() * memesList.length)];
  memeContainer.innerHTML = `<img src="${meme.url}" alt="${meme.name}" style="max-width: 100%; border-radius: 8px;">`;
});

loadMemes();