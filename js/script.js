// Necesito una variable que capture la xugá'l usuariu y otra de la máquina, asina que entós debería de entamalo per ahí
// Depués creo que pue facese col bucle if else en plan; xugaor = tixoria && máquina = papel { ganaste } mas menos
// Bueno y faeme falta pone-y lo de los puntos

const botonesJugada = document.querySelectorAll(".boton-jugada");
const resultados = document.getElementById("resultados");
const contadorUsuario = document.getElementById("contador-usuario");
const contadorOrdenador = document.getElementById("contador-ordenador");

let puntosUsuario = 0;
let puntosOrdenador = 0;

botonesJugada.forEach(boton => {

  boton.addEventListener("click", () => {

    const jugadas = ["piedra", "papel", "tijera"];
    const jugadaUsuario = boton.getAttribute("data-jugada");
    const jugadaOrdenador = jugadas[Math.floor(Math.random() * 3)];

    const resultado = compararJugadas(jugadaUsuario, jugadaOrdenador);

    if (resultado === "Has ganado") {
      puntosUsuario++;
    } else if (resultado === "Has perdido") {
      puntosOrdenador++;
    }

    contadorUsuario.textContent = `Tus puntos: ${puntosUsuario}`;
    contadorOrdenador.textContent = `Puntos de la máquina: ${puntosOrdenador}`;

  });
});

function compararJugadas(jugadaUsuario, jugadaOrdenador) {
  if (jugadaUsuario === jugadaOrdenador) {

    resultados.textContent = `Elegiste ${jugadaUsuario}, y la máquina ha elegido ${jugadaOrdenador}, por lo que ha habido un empate.`;
    
  } else if (
    (jugadaUsuario === "piedra" && jugadaOrdenador === "tijera") || (jugadaUsuario === "papel" && jugadaOrdenador === "piedra") || (jugadaUsuario === "tijera" && jugadaOrdenador === "papel")
  ) {

    resultados.textContent = `Elegiste ${jugadaUsuario}, y la máquina ha elegido ${jugadaOrdenador}, por lo que has ganado.`;
    
  } else {

    resultados.textContent = `Elegiste ${jugadaUsuario}, y la máquina ha elegido ${jugadaOrdenador}, por lo que has perdido.`;

  }
}