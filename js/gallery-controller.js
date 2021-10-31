function onInit() {
  renderGallery();
  setCanvas();
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
  for (const property in gKeyWordsMap) {
    strHtml += `<h3 class="${getKeyWordSize(
      property
    )}"  onclick=" onGetSortedImgs(this.innerText), onSetKeywordSize(this)">${property}</h3>`;
  }
  document.querySelector(".key-words-container").innerHTML = strHtml;
  for (const property in gKeyWordsMap) {
    let size = 0;
    if (gKeyWordsMap[property] >= 3) {
      size = gKeyWordsMap[property] * 1.5 + "px";
    } else {
      size = 24 + "px";
    }
    let keyWordclass = getKeyWordSize(property);
    let fontSize = document.querySelector(`.${keyWordclass}`);
    fontSize.style.fontSize = size;
  }
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

function onSetKeywordSize(keyword) {
  setKeywordsSize(keyword);
  keyword.style.fontSize =
    gKeyWordsMap[keyword.innerText] >= 2
      ? gKeyWordsMap[keyword.innerText] + 24 + "px"
      : 24 + "px";
}
