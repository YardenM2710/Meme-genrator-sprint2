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
  if (isSelected) drawRect(text.x, text.y);
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

function drawRect(x, y) {
  gCtx.beginPath();
  gCtx.rect(x - 10, y - 40, 200, 50);
  gCtx.strokeStyle = "white";
  gCtx.stroke();
}
