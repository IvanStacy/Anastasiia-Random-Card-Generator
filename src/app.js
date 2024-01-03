/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  const randomSuit = generateRandomSuit();
  document.querySelector(".card").classList.add(randomSuit);
  document.querySelector(".top-suit").innerHTML = randomSuit;
  document.querySelector(".botton-suit").innerHTML = randomSuit;
  document.querySelector(".number").innerHTML = generateRandomNumber();
};

let generateRandomSuit = () => {
  let suit = ["♦", "♥", "♠", "♣"];
  let indexsuit = Math.floor(Math.random() * suit.length);
  return suit[indexsuit];
};

let generateRandomNumber = () => {
  let number = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let indexnumber = Math.floor(Math.random() * number.length);
  return number[indexnumber];
};
