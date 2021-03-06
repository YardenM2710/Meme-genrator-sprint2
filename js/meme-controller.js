canvas.addEventListener("wheel", onWheel);

function onDrawText() {
  var txt = document.querySelector("#text-input").value;
  setCurrText(txt);
  onUpdateCanvas();
}
function onWheel(ev) {
  ev.preventDefault();
  if (ev.deltaY > 0) onSetSize(gMeme.objects[gMeme.selectedLineIdx].size + 10);
  else onSetSize(gMeme.objects[gMeme.selectedLineIdx].size - 10);
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
      }
      if (obj.type === "img") {
        if (idx === gMeme.selectedLineIdx) isSelected = true;
        drawSticker(obj, isSelected);
      }
    });
  }, 0);
}

function onSetCurrMeme(id) {
  createGMeme(id, "Enter Text Here");
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
      toCenterLine();
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
  gMeme.objects.splice(gMeme.selectedLineIdx, 1);
  onUpdateCanvas();
}

function onUpdateUi() {
  updateTextSizeValue();
  updateInputValue();
}

function onSelectObj(ev) {
  findObjRange(ev.offsetX, ev.offsetY);
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

function onAddSticker(elSticker) {
  let src = elSticker.id;
  addNewSticker(src);
  onUpdateCanvas();
}

function onMouseUp() {
  toggleDrag();
  document.querySelector("#canvas").style.cursor = "grab";
}

function onMouseDown(ev) {
  toggleDrag();
  document.querySelector("#canvas").style.cursor = "grabbing";
  onSelectObj(ev);
}

function onMouseLeave() {
  if (gMeme.isDrag) toggleDrag();
}

function onMouseOver(ev) {
  let x = 40;
  let y = 40;
  if (gMeme.objects[gMeme.selectedLineIdx].type === "text") {
    x = 100;
    y = 0;
  }
  let { offsetX, offsetY } = ev;
  if (gMeme.isDrag) {
    document.querySelector("#canvas").style.cursor = "grabbing";
    setObjPos(offsetX - x, offsetY - y);
    onUpdateCanvas();
  }
}

function onSaveMeme() {
  saveMeme();
  openGallery();
}

function uploadImg() {
  const imgDataUrl = gElCanvas.toDataURL("image/jpeg");

  function onSuccess(uploadedImgUrl) {
    const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`,
      "_blank"
    );
  }
  doUploadImg(imgDataUrl, onSuccess);
}

function doUploadImg(imgDataUrl, onSuccess) {
  const formData = new FormData();
  formData.append("img", imgDataUrl);

  fetch("//ca-upload.com/here/upload.php", {
    method: "POST",
    body: formData,
  })
    .then(res => res.text())
    .then(url => {
      onSuccess(url);
    })
    .catch(err => {
      console.error(err);
    });
}
