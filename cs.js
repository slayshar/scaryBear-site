const sizeMatter = () => {
  popBtn.classList.toggle(`pop_button_clicked`);
};
const bearParty = () => {
  popImg.src = cursedImg;
};
const bearPartyGoneWrong = () => {
  if (popImg.src == whiteImg) {
    popImg.src = blackImg;
  }
};
const bearPartyIsCancelled = () => {
  if (popImg.src == blackImg) {
    popImg.src = whiteImg;
  }
};
const textSwitcher = () => {
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
const colorSwitch = () => {
  //!режим ада
  popImg.src = blackImg;
  body.style.color = `black`;
  header.style.backgroundColor = `black`;
  footer.style.backgroundColor = `black`;
  pop.style.backgroundImage = `none`;
  pop.style.backgroundColor = `black`;
  pop.style.color = `red`;
  secretCard.style.outline = `red solid 3px`;
  secretCard.style.outlineOffset = `-3px`;
  popImg.style.borderColor = `red`;
  author.style.color = `red`;
  year.style.color = `red`;
  popHeaderText.style.color = `red`;
  cardText.style.color = `red`;
  cardPhoto.style.border = `red 3px solid`;
  body.style.cursor = `url(https://i.ibb.co/jDRhvCd/3.png), auto`;
  destinyChanger.style.animation = `movement 1s infinite alternate`;
  destinyChanger.addEventListener(`click`, showShadow);
  destinyChanger.addEventListener(`click`, destinyRoller);
  destinyChanger.addEventListener(`click`, showDestiny);
  speakWithGod.style.animation = `movement 1.2s infinite alternate`;
  speakWithGod.addEventListener(`click`, showShadow);
  speakWithGod.addEventListener(`click`, showSpeakWithGod);
  secretBtnList.forEach((el) => {
    el.style.color = `red`;
  });
  blackSelectionText.forEach((el) => {
    el.classList.remove(`black_selection`);
    el.classList.add(`red_selection`);
  });
};
const bearSwitcher = () => {
  if (popImg.src == blackImg && header.style.backgroundColor == `black`) {
    popImg.src = cursedImg;
  } else if (
    popImg.src == cursedImg &&
    footer.style.backgroundColor !== `black`
  ) {
    popImg.src = whiteImg;
  }
};

const removeTheWhiteBear = () => {
  popImg.removeEventListener(`mouseleave`, bearPartyIsCancelled);
};
const showShadow = () => {
  shadow.style.display = `flex`;
};
const showCard = () => {
  secretCard.style.display = `flex`;
};

const backToReality = () => {
  if (header.style.backgroundColor == `black`) {
    popImg.src = whiteImg;
    body.style.color = `rgb(172, 61, 10)`;
    header.style.backgroundColor = `#ff9a9e`;
    footer.style.backgroundColor = `#ff9a9e`;
    pop.style.backgroundImage = `linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)`;
    pop.style.backgroundColor = ` `;
    secretCard.style.outline = `none`;
    secretCard.style.outlineOffset = `-3px`;
    popHeaderText.style.color = `rgb(172, 61, 10)`;
    pop.style.color = `rgb(172, 61, 10)`;
    popImg.style.borderColor = `rgb(172, 61, 10)`;
    year.style.color = `rgb(172, 61, 10)`;
    author.style.color = `rgb(172, 61, 10)`;
    cardText.style.color = `rgb(151, 143, 143)`;
    cardPhoto.style.border = `none`;
    body.style.cursor = `url(https://i.ibb.co/J5RZfkB/2.png), auto`;
    speakWithGod.style.animationPlayState = `paused`;
    speakWithGod.removeEventListener(`click`, showShadow);
    speakWithGod.removeEventListener(`click`, showSpeakWithGod);
    destinyChanger.style.animationPlayState = `paused`;
    destinyChanger.removeEventListener(`click`, showShadow);
    destinyChanger.removeEventListener(`click`, destinyRoller);
    destinyChanger.removeEventListener(`click`, showDestiny);
    secretBtnList.forEach((el) => {
      el.style.color = `white`;
    });
    blackSelectionText.forEach((el) => {
      el.classList.remove(`red_selection`);
      el.classList.add(`black_selection`);
    });
  }
};

const blackToWhite = () => {
  popImg.addEventListener(`mouseleave`, bearPartyIsCancelled);
};

const destinyRoller = () => {
  const rockNumber = Math.floor(Math.random() * destiny.length);
  const lastRockNumber = destiny[rockNumber];
  secretCardDestinyText.textContent = lastRockNumber;
};

const showDestiny = () => {
  secretCardDestiny.style.display = `grid`;
  secretCardDestiny.style.justifyItems = `center`;
  secretCardDestiny.style.alignContent = `center`;
  destinyRoller;
};

const showSpeakWithGod = () => {
  speakWithGodForm.style.display = `flex`;
  speakWithGodHeader.style.display = `flex`;
  speakWithGodSubHeader.style.display = `flex`;
};

const backFromShadow = (event) => {
  shadow.style.display = `none`;
  secretCard.style.display = `none`;
  secretCardDestiny.style.display = `none`;
  speakWithGodHeader.style.display = `none`;
  speakWithGodForm.style.display = `none`;
};

secretBtnList.forEach((el) => {
  el.addEventListener(`click`, backFromShadow);
});

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

const createAnswer = (quest) => {
  const asktwo = confirm(
    `"${quest}" - ты можешь задать Богу любой вопрос на свете, и ты выбираешь именно ЭТОТ вопрос?`
  );
  if (asktwo) {
    console.log(`Кринж...`);
  }
};
sendToGodBtn.addEventListener(`click`, (event) => {
  event.preventDefault();
  const magicquestion = questionToGod.value;
  createAnswer(magicquestion);
});
