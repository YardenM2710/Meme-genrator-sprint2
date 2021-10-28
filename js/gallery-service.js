var gImgs = [];

createImgs();
console.log(gImgs);

var gKeywords = {
  happy: getRandomInt(1, 10),
  animal: getRandomInt(1, 10),
  man: getRandomInt(1, 10),
  woman: getRandomInt(1, 10),
};

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
}

function createImg(id, url, keywords) {
  let img = { id, url, keywords };
  gImgs.push(img);
}

function sortKeyWords(val) {
  var sortedImgs = [];
  gImgs.map;
}
