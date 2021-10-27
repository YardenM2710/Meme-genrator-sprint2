function uploadImg() {
  const imgDataUrl = gElCanvas.toDataURL("image/jpeg");

  function onSuccess(uploadedImgUrl) {
    const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl);
    document.querySelector(".share-container").innerHTML = `
        <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share   
        </a>`;
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
      console.log("Got back live url:", url);
      onSuccess(url);
    })
    .catch(err => {
      console.error(err);
    });
}

function downloadImg(elLink) {
  console.log(elLink, gElCanvas);
  var imgContent = gElCanvas.toDataURL("image/jpeg");
  elLink.href = imgContent;
}

function onImgInput(ev) {
  loadImageFromInput(ev, renderImg);
}

function loadImageFromInput(ev, onImageReady) {
  document.querySelector(".share-container").innerHTML = "";
  var reader = new FileReader();

  reader.onload = function (event) {
    var img = new Image();
    img.onload = onImageReady.bind(null, img);
    img.src = event.target.result;
    gImg = img;
  };
  reader.readAsDataURL(ev.target.files[0]);
}

function renderImg(img) {
  console.log(img);
  gCtx.drawImage(img, 0, 0, gElCanvas.width - 50, gElCanvas.height - 50);
}
