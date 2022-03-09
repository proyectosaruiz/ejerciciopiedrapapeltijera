"use strict";

// Realiza un juego de Piedra Papel Tijera contra el Pc. aSe le pregunta al usuario
// que va a jugar (piedr-papel o tijera) mediante un dialogo prompt. El ordenador realizará
// una jugada aleatoria (igualmente piedra-papel o tijera). Cada vez que gane uno se le apuntará
// 1 punto. En caso de empate ninguna de las 2 partes sumará puntos. El ganador final será el que
// consiga 3 puntos.

"use strict";

const posibilidadesOrdenador = ["piedra", "papel", "tijeras"];
let puntosUsuario = 0;
let puntosOrdenador = 0;

while (puntosUsuario < 3 && puntosOrdenador < 3) {
  const posicionAleatoria = Math.floor(Math.random() * 3);

  const eleccionOrdenador = posibilidadesOrdenador[posicionAleatoria];
  const eleccionUsuario = prompt("Juega tu opción");

  console.log("Eleccion del usuario :", eleccionUsuario);
  console.log("Eleccion del ordenador :", eleccionOrdenador);

  if (
    (eleccionOrdenador === "piedra" && eleccionUsuario === "tijeras") ||
    (eleccionOrdenador === "tijeras" && eleccionUsuario === "papel") ||
    (eleccionOrdenador === "papel" && eleccionUsuario === "piedra")
  ) {
    console.log("El ordenador gana");
    puntosOrdenador++;
  } else if (
    (eleccionOrdenador === "piedra" && eleccionUsuario === "papel") ||
    (eleccionOrdenador === "tijeras" && eleccionUsuario === "piedra") ||
    (eleccionOrdenador === "papel" && eleccionUsuario === "tijeras")
  ) {
    console.log("El usuario gana");
    puntosUsuario++;
  } else {
    console.log("Empate");
  }

  console.log("Puntos usuario:", puntosUsuario);
  console.log("Puntos ordenador:", puntosOrdenador);
}
