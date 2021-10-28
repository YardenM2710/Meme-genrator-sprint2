function onInit() {
  renderGallery(gImgs);
  setCanvas();
}

function openGallery() {
  document.querySelector(".meme-generator-container").style.visibility =
    "hidden";
}

function renderGallery(imgs) {
  let strHtml = "";
  imgs.forEach(img => {
    strHtml += `<img id="${img.id}" onclick="onChooseMeme(event,this)" src="${img.url}"></img>`;
  });
  document.querySelector(".grid-container").innerHTML = strHtml;
}

function onChooseMeme(ev, elImg) {
  document.querySelector(".meme-generator-container").style.visibility =
    "visible";
  onSetCurrMeme(elImg.id);
}
