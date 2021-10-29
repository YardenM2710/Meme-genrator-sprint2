var gImgs = [];

createImgs();
console.log(gImgs);

function createImgs() {
  createImg(1, "img/1.jpg", "happy");
  createImg(2, "img/2.jpg", "animal");
  createImg(3, "img/3.jpg", "happy");
  createImg(4, "img/4.jpg", "animal");
  createImg(5, "img/5.jpg", "man");
  createImg(6, "img/6.jpg", "happy");
  createImg(7, "img/7.jpg", "man");
  createImg(8, "img/8.jpg", "happy");
  createImg(9, "img/9.jpg", "happy");
  createImg(10, "img/10.jpg", "man");
  createImg(11, "img/11.jpg", "man");
  createImg(12, "img/12.jpg", "man");
  createImg(13, "img/13.jpg", "man");
  createImg(14, "img/14.jpg", "man");
  createImg(15, "img/15.jpg", "man");
}

function createImg(id, url, keywords) {
  let img = { id, url, keywords };
  gImgs.push(img);
}
