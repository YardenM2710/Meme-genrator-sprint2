var gElCanvas;
var gCtx;
var gPos;
var gFont = "IMPACT";

function setCanvas() {
  gElCanvas = document.getElementById("canvas");
  gCtx = gElCanvas.getContext("2d");
}

function drawText(text, isSelected) {
  gCtx.strokeStyle = text.strokeClr;
  gCtx.fillStyle = text.color;
  gCtx.font = text.size + `px ${gFont}`;
  gCtx.fillText(text.txt, text.x, text.y);
  gCtx.strokeText(text.txt, text.x, text.y);
  if (isSelected) drawRect(text.x, text.y, text.size, true);
}

function drawSticker(object, isSelected) {
  let url = object.src;
  let sticker = new Image();
  sticker.src = url;
  sticker.onload = function () {
    gCtx.drawImage(
      sticker,
      object.x,
      object.y,
      object.size * 2,
      object.size * 2
    );
  };
  if (isSelected) drawRect(object.x, object.y, object.size);
}

function setFont(font) {
  gFont = font;
}

function getPos(ev) {
  let offsetX = ev.offsetX;
  let offsetY = ev.offsetY;
  let pos = { offsetX, offsetY };
  console.log(pos);
  gPos = pos;
}

function drawBaseImg(url) {
  let base_image = new Image();
  base_image.src = url;
  base_image.onload = function () {
    gCtx.drawImage(base_image, 0, 0);
  };
}

function drawRect(x, y, size, isRect) {
  let hOffset = 0;
  let wOffset = 0;
  if (isRect) {
    hOffset = 100;
    wOffset = 200;
  }
  gCtx.beginPath();
  gCtx.rect(x - size, y - size, size * 4 + wOffset, size * 4.2 - hOffset);
  gCtx.strokeStyle = "white";
  gCtx.stroke();
}

function getImgUrl() {
  var imgContent = gElCanvas.toDataURL("image/jpeg");
  return imgContent;
}
