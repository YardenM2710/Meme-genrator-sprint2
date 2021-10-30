var gImgs = [];
var gKeyWords;
var gSortedImgs = [];

createImgs();

function createImgs() {
  createImg(1, "img/1.jpg", "happy");
  createImg(2, "img/2.jpg", "animal");
  createImg(3, "img/3.jpg", "happy");
  createImg(4, "img/4.jpg", "animal");
  createImg(5, "img/5.jpg", "succes");
  createImg(6, "img/6.jpg", "happy");
  createImg(7, "img/7.jpg", "man");
  createImg(8, "img/8.jpg", "happy");
  createImg(9, "img/9.jpg", "happy");
  createImg(10, "img/10.jpg", "man");
  createImg(11, "img/11.jpg", "man");
  createImg(12, "img/12.jpg", "man");
  createImg(13, "img/13.jpg", "gentleman");
  createImg(14, "img/14.jpg", "man");
  createImg(15, "img/15.jpg", "man");
}

function getKeyWords() {
  let imgs = gImgs.map(img => {
    return img.keywords;
  });
  return imgs;
}

function getKeyWordsMap() {
  var keyWords = getKeyWords();
  var keyWordsMap = keyWords.reduce(function (acc, vote) {
    if (!acc[vote]) acc[vote] = 0;
    acc[vote]++;
    return acc;
  }, {});
  gKeyWords = keyWordsMap;
}

function createImg(id, url, keywords) {
  let img = { id, url, keywords };
  gImgs.push(img);
}

function getSortedImgs(val) {
  gCurrKeyword = val;
  gImgs.forEach(img => {
    if (img.keywords === val) gSortedImgs.push(img);
  });
}

function setHeader(str) {
  document.querySelector(".logo").innerText = str;
}
