const whiteImg = `https://cdn1.ozone.ru/s3/multimedia-o/c1000/6040136676.jpg`;
const blackImg = `https://psv4.userapi.com/c237131/u43582557/docs/d43/e818886b5a1e/6040136676.jpg?extra=LDk4T0tfnFnpiBYINO0jLfkrXMRUsRMCgL29J7b7t-UgF-1iE7DTWceVxYV_IMZ4ZKLvNzJLbEUDZ-NIftV-AM6dq7oMXO9d3KQVClGNUpgDlyJBAEBAjfdTBasc9cO2rZDbX1B9hh6_4NXr8OxGx6w`;
const cursedImg = `https://psv4.userapi.com/c240331/u43582557/docs/d7/1ec1b6a370ba/ffff.jpg?extra=_Nx7dO-H2T8YuwVlU42A7zS4ygbwpPuvQmXVcgz0PNZUkyuiuT3fbgSN--G5JO6Jpa7mtB_xcfr9A2x6pbbSaRqZ-SZihpxOZGb9DWAQquiK9Y5t4nROrH22d1XKfMzRiLPFnVX1_hPmiD7uxWm2Lgc`;
const destiny = [
  `тебе сегодня повезет`,
  `ожидает неудача`,
  `ты встретишься с Федюком`,
  `у тебя вырастут волосы`,
  `твои проблемы решатся сами собой`,
  `ты провалишь задание`,
  `ты помоешься`,
  `тебе понравится аниме`,
  `ты наступишь на собачье говно`,
  `ты послужишь Родине`,
];
const pop = document.querySelector(`.pop`);
const popBtn = document.querySelector('.pop_button');
const popImg = document.querySelector(`.pop_img`);
const popText = document.querySelector(`.pop_inside_hello`);
const popHeaderText = document.querySelector(`.pop_header_text`);
const popInsideLink = document.querySelector(`.pop_inside_link`);
const popInsideText = document.querySelector(`.pop_inside_text`);
const popInsideTextInvisible = document.querySelector(
  `.pop_inside_text_invisible`
);
const colorSwitcher = document.querySelector(`.header_text_color_switcher`);
const colorCleaner = document.querySelector(`.header_text_color_cleaner`);
const destinyChanger = document.querySelector(`.header_text_destiny`);
const body = document.querySelector(`.body`);
const header = document.querySelector(`.header`);
const footer = document.querySelector(`.footer`);
const footerEnding = document.querySelector(`.footer_ending`);
const year = document.querySelector(`.footer_ending_year`);
const author = document.querySelector(`.footer_ending_author`);
const shadow = document.querySelector(`.shadow`);
const secretCard = document.querySelector(`.secret_card`);
const secretBtn = secretCard.querySelector(`.secret_button`);
const cardText = document.querySelector(`.card_text`);
const cardPhoto = document.querySelector(`.card_photo`);
const secretCardDestiny = document.querySelector(`.secret_card_destiny`);
const secretCardDestinyText = document.querySelector(
  `.secret_card_destiny_text`
);
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

const backFromShadow = function () {
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

shadow.addEventListener(`click`, backFromShadow);
// в общем здесь нужно как-то поправить уход из тени, так как карточка находится внутри shadow блока
secretBtn.addEventListener(`click`, backFromShadow);
