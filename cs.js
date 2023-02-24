const sizeMatter = function () {
  popBtn.classList.toggle(`pop_button_clicked`);
};
const bearParty = function () {
  popImg.src = cursedImg;
};
const bearPartyGoneWrong = function () {
  if (popImg.src == whiteImg) {
    popImg.src = blackImg;
  }
};
const bearPartyIsCancelled = function () {
  if (popImg.src == blackImg) {
    popImg.src = whiteImg;
  }
};
const textSwitcher = function () {
  if (popInsideText.textContent.includes(`?`)) {
    smoothly(
      popInsideText,
      `textContent`,
      `Этот текст был на японском языке, и если вы не знаете японский, то он вам не нужен, однако, если вы все-таки по каким-либо причинам хотите его вернуть, то вам необходимо снова нажать на эту надпись`
    );
    popInsideText.style.fontSize = `1.3em`;
  } else {
    smoothly(popInsideText, `textContent`, popInsideTextInvisible.textContent);
    popInsideText.style.fontSize = `30px`;
  }
};
const colorSwitch = function () {
  //!режим ада
  popImg.src = blackImg;
  body.style.color = `black`;
  header.style.backgroundColor = `black`;
  footer.style.backgroundColor = `black`;
  pop.style.backgroundImage = `none`;
  pop.style.backgroundColor = `black`;
  pop.style.color = `red`;
  secretBtn.style.color = `red`;
  secretCard.style.outline = `red solid 3px`;
  secretCard.style.outlineOffset = `-3px`;
  popImg.style.borderColor = `red`;
  author.style.color = `red`;
  year.style.color = `red`;
  popHeaderText.style.color = `red`;
  cardText.style.color = `red`;
  cardPhoto.style.border = `red 3px solid`;
  popInsideLink.classList.add(`pop_inside_link_hellmode`);
  popInsideLink.classList.remove(`pop_inside_link_normalmode`);
  body.style.cursor = `url(https://psv4.userapi.com/c237331/u43582557/docs/d42/ea18af526db8/chek_3.png?extra=NtiA9WD1IA7DCKYlZEc0P4wRqxNxpWMf_5b9SVzu9ifhJp24zGCa_ptn04R7TIP8S8ChzGkmSp4PJVxJMlRYCQvOwcM7eegh2bc3EKb0LRJqQ9KYDSAlaERTso9YjVF7tQ0fgsKhJYSpe4TIe_54_Q), auto`;
  destinyChanger.style.animation = `movement 1s infinite alternate`;
  destinyChanger.addEventListener(`click`, showShadow);
  destinyChanger.addEventListener(`click`, destinyRoller);
  destinyChanger.addEventListener(`click`, showDestiny);
  speakWithGod.style.animation = `movement 1.2s infinite alternate`;
  speakWithGod.addEventListener(`click`, showShadow);
  speakWithGod.addEventListener(`click`, showSpeakWithGod);
};
const bearSwitcher = function () {
  if (popImg.src == blackImg && header.style.backgroundColor == `black`) {
    popImg.src = cursedImg;
  } else if (
    popImg.src == cursedImg &&
    footer.style.backgroundColor !== `black`
  ) {
    popImg.src = whiteImg;
  }
};

const removeTheWhiteBear = function () {
  popImg.removeEventListener(`mouseleave`, bearPartyIsCancelled);
};
const showShadow = function () {
  shadow.style.display = `flex`;
  secretBtn.style.display = `block`;
};
const showCard = function () {
  secretCard.style.display = `flex`;
};

const backToReality = function () {
  if (header.style.backgroundColor == `black`) {
    popImg.src = whiteImg;
    body.style.color = `rgb(172, 61, 10)`;
    header.style.backgroundColor = `#ff9a9e`;
    footer.style.backgroundColor = `#ff9a9e`;
    pop.style.backgroundImage = `linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)`;
    pop.style.backgroundColor = ` `;
    secretBtn.style.color = `white`;
    popHeaderText.style.color = `rgb(172, 61, 10)`;
    pop.style.color = `rgb(172, 61, 10)`;
    popImg.style.borderColor = `rgb(172, 61, 10)`;
    year.style.color = `rgb(172, 61, 10)`;
    author.style.color = `rgb(172, 61, 10)`;
    cardText.style.color = `rgb(151, 143, 143)`;
    cardPhoto.style.border = `none`;
    popInsideLink.classList.remove(`pop_inside_link_hellmode`);
    popInsideLink.classList.add(`pop_inside_link_normalmode`);
    body.style.cursor = `url(https://sun9-28.userapi.com/c240331/u43582557/docs/d38/135691cae632/chek2.png?extra=6WFkjCV9S_XAIHHR0N878LsDfMGwuemuumRQRAXOnLk1pZm_ml0covEKVvoS0mUwMnUU0lnJhhVyaw7MMVxyo1gEMouER2mXMU_4TNkO4WtbhJdP019_wiHHJyxw7eoO0oNeapw-1Vou3CtTHI0r_g), auto`;
    destinyChanger.style.animationPlayState = `paused`;
    destinyChanger.removeEventListener(`click`, showShadow);
    destinyChanger.removeEventListener(`click`, destinyRoller);
    destinyChanger.removeEventListener(`click`, showDestiny);
  }
};

const blackToWhite = function () {
  popImg.addEventListener(`mouseleave`, bearPartyIsCancelled);
};

const destinyRoller = function () {
  const rockNumber = Math.floor(Math.random() * destiny.length);
  const lastRockNumber = destiny[rockNumber];
  secretCardDestinyText.textContent = lastRockNumber;
};

const showDestiny = function () {
  secretCardDestiny.style.display = `grid`;
  secretCardDestiny.style.justifyItems = `center`;
  secretCardDestiny.style.alignContent = `center`;
  destinyRoller;
};

const showSpeakWithGod = function () {
  speakWithGodForm.style.display = `flex`;
};

const backFromShadow = function (event) {
  shadow.style.display = `none`;
  secretCard.style.display = `none`;
  secretCardDestiny.style.display = `none`;
  secretBtn.style.display = `none`;
};

popImg.addEventListener(`mouseenter`, bearPartyGoneWrong);
popImg.addEventListener(`mouseleave`, bearPartyIsCancelled);
popImg.addEventListener(`click`, bearSwitcher);

popInsideText.addEventListener(`click`, textSwitcher);

colorSwitcher.addEventListener(`click`, colorSwitch);
colorSwitcher.addEventListener(`click`, removeTheWhiteBear);

colorCleaner.addEventListener(`click`, backToReality);
colorCleaner.addEventListener(`click`, blackToWhite);

author.addEventListener(`click`, showShadow);
author.addEventListener(`click`, showCard);

shadow.addEventListener(`click`, function (event) {
  if (this != event.target) {
    return;
  } else {
    backFromShadow();
  }
});
secretBtn.addEventListener(`click`, backFromShadow);
