var gElCanvas;
var gCtx;
var gCurrShape = "triangle";
var gCurrColor;
var gCurrDrawType = "click";
var gRect = 0;
var isAcordionUp = true;

function resizeCanvas() {
  var elContainer = document.querySelector("#canvas-container");
  // Note: changing the canvas dimension this way clears the canvas
  gElCanvas.width = elContainer.offsetWidth - 20;
}

function drawLine(x, y, xEnd = 250, yEnd = 250) {
  gCtx.beginPath();
  gCtx.moveTo(x, y);
  gCtx.lineTo(xEnd, yEnd);
  gCtx.lineWidth = 2;
  gCtx.strokeStyle = gCurrColor;
  gCtx.stroke();
}

function drawTriangle(x, y) {
  gCtx.beginPath();
  gCtx.lineWidth = 2;
  gCtx.moveTo(x, y);
  gCtx.lineTo(130, 330);
  gCtx.lineTo(50, 370);
  gCtx.lineTo(x, y);
  gCtx.closePath();
  gCtx.fillStyle = "white";
  gCtx.fill();
  gCtx.strokeStyle = gCurrColor;
  gCtx.stroke();
}

function drawRect(x, y) {
  if (gRect > 100) isAcordionUp = false;
  else if (gRect < 1) isAcordionUp = true;
  isAcordionUp ? gRect++ : gRect--;
  gCtx.beginPath();
  gCtx.rect(x, y, 100 + gRect, 50 + gRect);
  gCtx.fillStyle = "white";
  gCtx.fillRect(x, y, 100 + gRect, 50 + gRect);
  gCtx.strokeStyle = gCurrColor;
  gCtx.stroke();
}

function drawText(text, x, y) {
  gCtx.lineWidth = 2;
  gCtx.strokeStyle = "brown";
  gCtx.fillStyle = gCurrColor;
  gCtx.font = "40px Arial";
  gCtx.fillText(text, x, y);
  gCtx.strokeText(text, x, y);
}

function drawArc(x, y) {
  gCtx.beginPath();
  gCtx.lineWidth = 1;
  gCtx.arc(x, y, 60, 0, 2 * Math.PI);
  gCtx.strokeStyle = gCurrColor;
  gCtx.stroke();
}

function clearCanvas() {
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
  gRect = 0;
}

function downloadCanvas(elLink) {
  console.log(elLink);
  const data = gElCanvas.toDataURL();
  console.log("data", data);
  elLink.href = data;
}

function draw(ev) {
  //   const { offsetX, offsetY } = ev;
  let offsetX = null;
  let offsetY = null;
  if (gCurrDrawType === "smoosh") {
    offsetX = ev.center.x;
    offsetY = ev.center.y;
  } else {
    offsetX = ev.offsetX;
    offsetY = ev.offsetY;
  }
  //   console.log(offsetX, offsetY);

  switch (gCurrShape) {
    case "triangle":
      drawTriangle(offsetX, offsetY);
      break;
    case "rect":
      drawRect(offsetX, offsetY);
      break;
    case "text":
      drawText("Coding Academy", offsetX, offsetY);
      break;
    case "line":
      drawLine(offsetX, offsetY);
      break;
    case "circle":
      drawArc(offsetX, offsetY);
      break;
  }
}

function setDrawType(val) {
  gCurrDrawType = val;
}

function setSelect(val) {
  gCurrShape = val;
}
function setColor(val) {
  gCurrColor = val;
}

function mouseEvents() {
  let elCanvas = document.querySelector("#canvas-container");
  var hammertime = new Hammer(elCanvas);
  hammertime.on("panright panleft panup pandown", draw);
}
