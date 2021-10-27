var gImgs = [];
createImgs();

console.log(gImgs);

function createImgs() {
  createImg(1, "img/1.jpg");
  createImg(2, "img/2.jpg");
  createImg(3, "img/3.jpg");
  createImg(4, "img/4.jpg");
  createImg(5, "img/5.jpg");
  createImg(6, "img/6.jpg");
  createImg(7, "img/7.jpg");
  createImg(2, "img/8.jpg");
  createImg(1, "img/9.jpg");
  createImg(1, "img/10.jpg");
  createImg(2, "img/11.jpg");
}

function createImg(id, url) {
  let img = { id, url };
  gImgs.push(img);
}
