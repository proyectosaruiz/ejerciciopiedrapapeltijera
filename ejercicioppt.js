"use strict";

// Realiza un juego de Piedra Papel Tijera contra el Pc. aSe le pregunta al usuario
// que va a jugar (piedr-papel o tijera) mediante un dialogo prompt. El ordenador realizará
// una jugada aleatoria (igualmente piedra-papel o tijera). Cada vez que gane uno se le apuntará
// 1 punto. En caso de empate ninguna de las 2 partes sumará puntos. El ganador final será el que
// consiga 3 puntos.

const juego = prompt("Piedra, Papel o Tijera");

const posibilidades = ["piedra", "papel", "tijera"];

const aleatorio = Math.floor(Math.random() * posibilidades.length);

const posibilidadesCpu = posibilidades[aleatorio];

const usuario = "piedra";
switch (usuario) {
  case "piedra":
    if (posibilidadesCpu === "piedra") {
      alert("Empatas");
    }
    if (posibilidadesCpu === "papel") {
      alert("Pierdes");
    }
    if (posibilidadesCpu === "tijera") {
      alert("Ganas");
    }
    break;

  default:
    break;
}
