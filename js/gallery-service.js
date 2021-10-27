var gImgs = [];
createImgs();

console.log(gImgs);

function createImgs() {
  createImg(1, "img/1.jpg");
  createImg(2, "img/2.jpg");
}

function createImg(id, url) {
  let img = { id, url };
  gImgs.push(img);
}

function renderGallery(imgs) {
  let strHtml = "";
  imgs.forEach(img => {
    strHtml += ` <img onclick="onMemeClick(event,this)" src="${img.url}"></img>`;
  });
  document.querySelector(".grid-container").innerHTML = strHtml;
}
