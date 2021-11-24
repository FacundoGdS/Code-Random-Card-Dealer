/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let palos = ["♦", "♥", "♠", "♣"];
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let palorandom = Math.floor(Math.random() * palos.length);
  let numerosrandom = Math.floor(Math.random() * numeros.length);

  let topPalo = document.querySelector(".top");
  let bottomPalo = document.querySelector(".bottom");
  let middleNumber = document.querySelector(".middle");

  topPalo.innerHTML = palos[palorandom];
  bottomPalo.innerHTML = palos[palorandom];
  middleNumber.innerHTML = numeros[numerosrandom];

  console.log(topPalo.innerText);
  const colorRed = () => {
    if (palos[palorandom] === "♥") {
      topPalo.style.color = "red";
      bottomPalo.style.color = "red";
    } else if (palos[palorandom] === "♦") {
      topPalo.style.color = "red";
      bottomPalo.style.color = "red";
    }
  };
  colorRed();
};

// &spades;
// &clubs;
// &hearts;
// &diams;
