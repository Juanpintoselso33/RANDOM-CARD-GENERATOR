/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let suits = ["&hearts;", "&spades;", "&clubs;", "&diams;"];
let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J", "A"];

function getRandomCard() {
  let suit = suits[Math.floor(Math.random() * suits.length)];
  let value = values[Math.floor(Math.random() * values.length)];

  return { suit, value };
}

document.addEventListener("DOMContentLoaded", event => {
  generateCard();

  document
    .getElementById("newCardButton")
    .addEventListener("click", generateCard);

  setInterval(generateCard, 10000); // Generates a new card every 10 seconds
});

function generateCard() {
  const card = getRandomCard();
  const cardWidth = document.getElementById("cardWidth").value || 270; // Default width
  const cardHeight = document.getElementById("cardHeight").value || 400; // Default height

  const cardElement = document.getElementById("card");
  cardElement.style.width = `${cardWidth}px`;
  cardElement.style.height = `${cardHeight}px`;

  const cardBodyElement = document.getElementById("cardBody");
  cardBodyElement.innerHTML = `
      <div class="card-suit top-left ${
        card.suit === "&hearts;" || card.suit === "&diams;"
          ? "text-danger"
          : "text-dark"
      }" style="font-size: ${cardHeight / 6}px">${card.suit}</div>
      <h1 class="card-value ${
        card.suit === "&hearts;" || card.suit === "&diams;"
          ? "text-danger"
          : "text-dark"
      }" style="font-size: ${cardHeight / 4}px">${card.value}</h1>
      <div class="card-suit bottom-right ${
        card.suit === "&hearts;" || card.suit === "&diams;"
          ? "text-danger"
          : "text-dark"
      }" style="font-size: ${cardHeight / 6}px">${card.suit}</div>
  `;
}
