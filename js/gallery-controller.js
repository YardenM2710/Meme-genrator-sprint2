function onInit() {
  renderGallery();
  setCanvas();
  getKeyWordsMap();
  renderKeyWords();
}

function toggleMenu() {
  document.body.classList.toggle("menu-open");
}

function openGallery() {
  gSortedImgs = [];
  document.querySelector(".meme-generator-container").style.visibility =
    "hidden";
  document.querySelector(".my-meme-container").style.visibility = "hidden";
  document.querySelector(".about").style.display = "none";
  setHeader("Gallery");

  renderGallery();
}

function renderKeyWords() {
  let strHtml = "";
  for (const property in gKeyWords) {
    strHtml += `<h3 onclick=" onGetSortedImgs(this.innerText)">${property}</h3>`;
  }
  document.querySelector(".key-words-container").innerHTML = strHtml;
}

function renderGallery() {
  let strHtml = "";
  if (!gSortedImgs || gSortedImgs.length < 1) {
    gImgs.forEach(img => {
      strHtml += `<img id="${img.id}" onclick="onChooseMeme(this)" src="${img.url}"></img>`;
    });
  } else {
    gSortedImgs.forEach(img => {
      strHtml += `<img id="${img.id}" onclick="onChooseMeme(this)" src="${img.url}"></img>`;
    });
  }

  document.querySelector(".grid-container").innerHTML = strHtml;
}
function onGetSortedImgs(val) {
  gSortedImgs = [];
  if (val === "") gSortedImgs = [];
  getSortedImgs(val);
  renderGallery();
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
  document.querySelector(".about").style.display = "none";
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
  setHeader("Meme Generator");
  onSetCurrMeme(elImg.id);
}

function openAbout(str) {
  document.querySelector(".about").style.display = "block";
  document.querySelector(".meme-generator-container").style.visibility =
    "hidden";

  setHeader(str);
}
