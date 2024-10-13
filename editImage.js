function renderImageAndEdit() {
  const selectedNum = selectEle.value();

  // background image
  image(bgImages[selectedNum], getX(50), getY(50), width, height);

  switch (selectedNum) {
    case "0":
      image(inputImg, getX(50), getY(50), getX(10), getX(10));
      break;

    case "1":
      image(inputImg, getX(50), getY(50), getX(20), getX(20));
      break;

    case "2":
      image(inputImg, getX(50), getY(50), getX(20), getX(20));
      break;

    case "3":
      image(inputImg, getX(50), getY(50), getX(20), getX(20));
      break;

    case "4":
      image(inputImg, getX(50), getY(50), getX(20), getX(20));
      break;

    case "5":
      image(inputImg, getX(50), getY(50), getX(20), getX(20));
      break;

    case "6":
      image(inputImg, getX(50), getY(50), getX(20), getX(20));
      break;

    case "7":
      image(inputImg, getX(50), getY(50), getX(20), getX(20));
      break;
  }
}

function getX(percent) {
  return (width / 100) * percent;
}

function getY(percent) {
  return (height / 100) * percent;
}
