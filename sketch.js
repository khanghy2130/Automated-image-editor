let selectEle;
let inputImg;
let bgImages = [];
let fgImages = [];

function preload() {
  for (let i = 0; i < 8; i++) {
    bgImages[i] = loadImage(`./background-images/b${i}.jpg`);
  }
  for (let i = 0; i < 8; i++) {
    fgImages[i] = loadImage(`./background-images/foreground/f${i}.png`);
  }
}

function setup() {
  const canvas = createCanvas(512, 512);
  canvas.parent("#canvasDiv");
  background(20);

  const inputEle = createFileInput(handleFile);
  inputEle.parent(uiDiv);

  selectEle = createSelect();
  selectEle.parent(uiDiv);
  for (let i = 0; i < bgImages.length; i++) {
    selectEle.option(i);
  }
  selectEle.elt.onchange = () => {
    if (inputImg) renderImageAndEdit();
  };

  const saveButton = createButton("Save canvas as image");
  saveButton.mousePressed(() => {
    saveCanvas(canvas, "edited-image", "jpg");
  });
  saveButton.parent(uiDiv);

  imageMode(CENTER);
  angleMode(DEGREES);
}

function handleFile(file) {
  if (file.type === "image") {
    inputImg = loadImage(file.data, renderImageAndEdit);
  }
}
