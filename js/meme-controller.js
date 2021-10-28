function onDrawText(ev) {
  var txt = document.querySelector("#text-input").value;
  setCurrText(txt);
  onUpdateCanvas();
}

function onUpdateCanvas() {
  drawBaseImg(gMeme.url.url);
  onDrawObjects();
}

function onDrawObjects() {
  setTimeout(() => {
    gMeme.objects.forEach((obj, idx) => {
      var isSelected = false;
      if (obj.type === "text") {
        if (idx === gMeme.selectedLineIdx) isSelected = true;
        drawText(obj, isSelected);
      } else {
        console.log("RENDERING STICKER ON CANVAS");
      }
    });
  }, 0);
}

function onSetCurrMeme(id) {
  createGMeme(id, "changeme");
  onUpdateUi();
  onUpdateCanvas();
}

function updateInputValue() {
  var elInput = document.querySelector("#text-input");
  if (!gMeme.objects[gMeme.selectedLineIdx].txt) {
    elInput.value = "";
  } else {
    elInput.value = gMeme.objects[gMeme.selectedLineIdx].txt;
  }
}

function setLinesPos(elBtn) {
  switch (elBtn.id) {
    case "right":
      toRightLine();
      break;
    case "center":
      tocenterLine();
      break;
    case "left":
      toLeftLine();
      break;
    default:
  }
}

function onMoveLineUp() {
  moveLinesUp();
  onUpdateCanvas();
}

function onMoveLineDown() {
  moveLineDown();
  onUpdateCanvas();
}

function onNewLine() {
  addNewLine();
  onUpdateCanvas();
}

function onChooseNxtLine() {
  setSelectedLine();
  onUpdateUi();
  onUpdateCanvas();
}

function onSelectLine() {
  console.log("hey");
  setSelectedLine(idx);
}

function onSetSize(size) {
  setCurrTextSize(size);
  onUpdateCanvas();
}
function updateTextSizeValue() {
  var elInput = document.querySelector("#text-size");
  elInput.value = gMeme.objects[gMeme.selectedLineIdx].size;
}

function onDeletLine() {
  var elInput = document.querySelector("#text-input");
  elInput.value = "";
  gMeme.objects[gMeme.selectedLineIdx].txt = "";
  onUpdateCanvas();
}

function onUpdateUi() {
  updateTextSizeValue();
  updateInputValue();
}

function onSelectObj(ev) {
  let offsetX = ev.offsetX;
  let offsetY = ev.offsetY;
  findObjRange(offsetX, offsetY);
  onUpdateCanvas();
  onUpdateUi();
}

function onSetStrokeClr(color) {
  setStrokeColor(color);
  onUpdateCanvas();
}

function onSetTextColor(color) {
  setTextColor(color);
  onUpdateCanvas();
}
function onSetFont(font) {
  setFont(font);
  onUpdateCanvas();
}

function onAddSticker(params) {}
