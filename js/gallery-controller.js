function onInit() {
  renderGallery();
  setCanvas();
}

function toggleMenu() {
  document.body.classList.toggle("menu-open");
}

function openGallery() {
  document.querySelector(".meme-generator-container").style.visibility =
    "hidden";
  document.querySelector(".my-meme-container").style.visibility = "hidden";
}

function renderGallery() {
  let strHtml = "";
  gImgs.forEach(img => {
    strHtml += `<img id="${img.id}" onclick="onChooseMeme(this)" src="${img.url}"></img>`;
  });
  document.querySelector(".grid-container").innerHTML = strHtml;
}

function renderMemes() {
  let strHtml = "";
  gMyMemes.forEach((meme, idx) => {
    strHtml += `<img id="${meme.url.url}" onclick="loadMemeByIdx(${idx})" src="${meme.prevImg}"></img>`;
  });
  document.querySelector(".meme-container").innerHTML = strHtml;
}

function openMyMemes(ev) {
  ev.stopPropagation();
  document.querySelector(".my-meme-container").style.visibility = "visible";
  renderMemes();
}

function loadMemeByIdx(idx) {
  document.querySelector(".meme-generator-container").style.visibility =
    "visible";
  document.querySelector(".my-meme-container").style.visibility = "hidden";

  gMeme = gMyMemes[idx];
  onUpdateCanvas();
}
function onChooseMeme(elImg) {
  document.querySelector(".meme-generator-container").style.visibility =
    "visible";
  onSetCurrMeme(elImg.id);
}
