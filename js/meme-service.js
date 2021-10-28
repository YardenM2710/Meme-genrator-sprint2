var gMeme;

// DATA AREA

function createGMeme(id, txt) {
  gMeme = {
    selectedImgId: id,
    selectedLineIdx: 0,
    newLinePos: { x: 100, y: 400 },
    url: gImgs[id - 1],
    objects: [
      {
        type: "text",
        txt,
        size: 40,
        align: "left",
        strokeClr: "black",
        color: "white",
        x: 100,
        y: 100,
      },
      {
        type: "img",
        size: 20,
        src: ``,
        x: 100,
        y: 200,
      },
    ],
  };
  console.log(gMeme);
}

// LINE AREA

function setSelectedLine(idx) {
  if (!idx) {
    if (gMeme.selectedLineIdx === gMeme.objects.length - 1) {
      idx = 0;
    } else {
      idx = gMeme.selectedLineIdx + 1;
    }
  }
  gMeme.selectedLineIdx = idx;
}

function addNewLine() {
  gMeme.objects.push({
    txt: "NEW LINE",
    type: "text",
    size: 40,
    align: "left",
    color: "white",
    strokeClr: "black",
    x: gMeme.newLinePos.x,
    y: gMeme.newLinePos.y,
  });
  setNewLinePos();
}
function addNewSticker(src) {
  gMeme.objects.push({
    type: "img",
    size: 20,
    src,
    x: gMeme.newLinePos.x,
    y: gMeme.newLinePos.y,
  });
  setNewLinePos();
}
function setNewLinePos() {
  if (gMeme.newLinePos.x > 500) {
    gMeme.newLinePos.x = 10;
  } else if (gMeme.newLinePos.y > 450) {
    gMeme.newLinePos.y = 10;
  }
  gMeme.newLinePos.x += 100;
  gMeme.newLinePos.y += 10;
}
function moveLinesUp() {
  gMeme.objects[gMeme.selectedLineIdx].y =
    gMeme.objects[gMeme.selectedLineIdx].y - 10;
}
function moveLineDown() {
  gMeme.objects[gMeme.selectedLineIdx].y =
    gMeme.objects[gMeme.selectedLineIdx].y + 10;
}

function tocenterLine() {
  gMeme.objects[gMeme.selectedLineIdx].x = 150;
  onUpdateCanvas();
}
function toLeftLine() {
  gMeme.objects[gMeme.selectedLineIdx].x = 50;
  onUpdateCanvas();
}
function toRightLine() {
  gMeme.objects[gMeme.selectedLineIdx].x = 300;
  onUpdateCanvas();
}

function getimgById(imgId) {
  var image = gImgs.find(img => {
    return +imgId === img.id;
  });
  return image;
}

function downloadImg(elLink) {
  console.log(elLink, gElCanvas);
  var imgContent = gElCanvas.toDataURL("image/jpeg");
  elLink.href = imgContent;
}

function setCurrText(txt) {
  gMeme.objects[gMeme.selectedLineIdx].txt = txt;
}
function setCurrSticker(img) {
  gMeme.objects[gMeme.selectedLineIdx].txt = txt;
}

function setCurrTextSize(size) {
  gMeme.objects[gMeme.selectedLineIdx].size = size;
}

function findObjRange(x, y) {
  let closestIdx;
  let closestPos = Infinity;
  gMeme.objects.forEach((obj, idx) => {
    let distance = Math.sqrt((obj.x - x) ** 2 + (obj.y - y) ** 2);
    distance /= obj.size / 2;
    if (distance < closestPos) {
      closestIdx = idx;
      closestPos = distance;
    }
  });
  if (closestPos > 7) return;
  gMeme.selectedLineIdx = closestIdx;
}

function setNewSticker(src) {
  gMeme.objects[gMeme.selectedLineIdx].src = src;
}

function setStrokeColor(color) {
  gMeme.objects[gMeme.selectedLineIdx].strokeClr = color;
}

function setTextColor(color) {
  gMeme.objects[gMeme.selectedLineIdx].color = color;
}

// function onImgInput(ev) {
//   loadImageFromInput(ev, renderImg);
// }

// function loadImageFromInput(ev, onImageReady) {
//   document.querySelector(".share-container").innerHTML = "";
//   var reader = new FileReader();

//   reader.onload = function (event) {
//     var img = new Image();
//     img.onload = onImageReady.bind(null, img);
//     img.src = event.target.result;
//     gImg = img;
//   };
//   reader.readAsDataURL(ev.target.files[0]);
// }
