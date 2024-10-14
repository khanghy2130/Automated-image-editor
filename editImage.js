function renderImageAndEdit() {
  const selectedNum = selectEle.value();

  // background image
  image(bgImages[selectedNum], getX(50), getY(50), width, height);

  switch (selectedNum) {
    case "0":
      image(inputImg, getX(51.4), getY(44), getX(50.5), getX(50.5));
      image(fgImages[0], getX(50), getY(50), getX(100), getX(100));
      break;

    case "1":
      push();
      translate(getX(38), getY(64));
      rotate(5.5);
      image(inputImg, 0, 0, getX(30), getY(30));
      pop();
      break;

    case "2":
      push();
      translate(getX(35), getY(25));
      rotate(-6);
      image(inputImg, 0, 0, getX(75), getX(75));
      pop();
      image(fgImages[2], getX(50), getY(50), getX(100), getX(100));
      break;

    case "3":
      push();
      translate(getX(56), getY(60));
      rotate(9);
      image(inputImg, 0, 0, getX(50), getY(50));
      pop();
      image(fgImages[3], getX(50), getY(50), getX(100), getX(100));
      break;

    case "4":
      push();
      translate(getX(51), getY(65));
      image(inputImg, 0, 0, getX(55), getY(55));
      pop();
      image(fgImages[4], getX(50), getY(50), getX(100), getX(100));
      break;

    case "5":
      push();
      translate(getX(38), getY(70));
      rotate(-5);
      image(inputImg, 0, 0, getX(60), getY(60));
      pop();
      image(fgImages[5], getX(50), getY(50), getX(100), getX(100));
      break;

    case "6":
      push();
      translate(getX(54), getY(68));
      rotate(3);
      image(inputImg, 0, 0, getX(34), getY(34));
      pop();
      image(fgImages[6], getX(50), getY(50), getX(100), getX(100));
      break;

    case "7":
      push();
      translate(getX(68), getY(62));
      rotate(2);
      image(inputImg, 0, 0, getX(45), getY(45));
      pop();
      image(fgImages[7], getX(50), getY(50), getX(100), getX(100));
      break;
  }
}

function getX(percent) {
  return (width / 100) * percent;
}

function getY(percent) {
  return (height / 100) * percent;
}
