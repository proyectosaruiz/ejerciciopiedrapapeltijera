"use strict";

// Realiza un juego de Piedra Papel Tijera contra el Pc. aSe le pregunta al usuario
// que va a jugar (piedr-papel o tijera) mediante un dialogo prompt. El ordenador realizará
// una jugada aleatoria (igualmente piedra-papel o tijera). Cada vez que gane uno se le apuntará
// 1 punto. En caso de empate ninguna de las 2 partes sumará puntos. El ganador final será el que
// consiga 3 puntos.

const eleccionesDelOrdenador = ["piedra", "papel", "tijera"];

const posicionAleatorio = Math.floor(
  Math.random() * eleccionesDelOrdenador.length
);

const posibilidadesDelOrdenador = eleccionesDelOrdenador[posicionAleatorio];

const EleccionDelUsuario = prompt("¿Piedra Papel o Tijera 1, 2, 3. YA?");
switch (EleccionDelUsuario) {
  case EleccionDelUsuario:
    if (posibilidadesDelOrdenador == EleccionDelUsuario) {
      alert(
        `Jugada del ordenador ${posibilidadesDelOrdenador} y tú  juegas ${EleccionDelUsuario} Empataron suma 2 puntos`
      );
    }
    if (posibilidadesDelOrdenador < EleccionDelUsuario) {
      alert(
        `Jugada del ordenador ${posibilidadesDelOrdenador} y tú juegas ${EleccionDelUsuario} Ganaste suma 1 punto`
      );
    }
    if (posibilidadesDelOrdenador > EleccionDelUsuario) {
      alert(
        `Jugada del ordenador ${posibilidadesDelOrdenador} y tú juegas ${EleccionDelUsuario} Perdiste gana ordenador 1 punto`
      );
    }
    break;

  default:
    break;
}
