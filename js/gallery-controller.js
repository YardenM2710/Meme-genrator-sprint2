function onInit() {
  renderGallery(gImgs);
  setCanvas();
  renderKeyWords();
}

function openGallery() {
  document.querySelector(".meme-generator-container").style.visibility =
    "hidden";
}

function renderGallery(imgs) {
  let strHtml = "";
  imgs.forEach(img => {
    strHtml += `<img id="${img.id}" onclick="onChooseMeme(this)" src="${img.url}"></img>`;
  });
  document.querySelector(".grid-container").innerHTML = strHtml;
}

function onChooseMeme(elImg) {
  document.querySelector(".meme-generator-container").style.visibility =
    "visible";
  console.log(elImg);
  onSetCurrMeme(elImg.id);
}
function renderKeyWords() {
  let strHtml = "";
  let elText = document.querySelector(".sort");
  for (const i in gKeywords) {
    strHtml += `<h3  onclick="increaseSize(this)" class="${i}">${i}</h3>`;
  }
  elText.innerHTML = strHtml;
}
