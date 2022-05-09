let cardPosition = 0;
const cards = document.getElementsByClassName("card__item");
const container = document.getElementById("cards__container");
container.style.position = "absolute";
container.style.left = "0px";

document
  .getElementById("button__carousel--next")
  .addEventListener("click", function () {
    moveToNextCard();
  });
document
  .getElementById("button__carousel--previous")
  .addEventListener("click", function () {
    moveToPrevCard();
  });

function updateCardVisibility(totalCards) {
  for (i = 0; i < totalCards; i++) {
    if (i < cardPosition) {
      cards[i].classList.add("carousel__item--hidden");
    } else {
      cards[i].classList.remove("carousel__item--hidden");
    }
  }
}

function moveToNextCard() {
  let totalCards = cards.length;

  cardPosition++;
  let cardClone = cards[cardPosition - 1].cloneNode(true);
  container.appendChild(cardClone);

  let slider = container.style.left.replace("px", "");
  container.style.left = slider - 335 + "px";
  updateCardVisibility(totalCards);
}

function moveToPrevCard() {
  let totalCards = cards.length;

  if (cardPosition <= 0) {
    let cardClone = cards[totalCards + cardPosition - 1].cloneNode(true);
    container.prepend(cardClone);
  } else {
    let slider = container.style.left.replace("px", "");
    container.style.left = +slider + 335 + "px";
  }

  cardPosition--;
  updateCardVisibility(totalCards);
}
