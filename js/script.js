const botonesJugada = document.querySelectorAll(".boton-jugada");
const resultados = document.getElementById("resultados");
const contadorUsuario = document.getElementById("contador-usuario");
const contadorOrdenador = document.getElementById("contador-ordenador");

let puntosUsuario = 0;
let puntosOrdenador = 0;

botonesJugada.forEach(boton => {
  boton.addEventListener("click", () => {
    const jugadaUsuario = boton.getAttribute("data-jugada");

    const jugadas = ["piedra", "papel", "tijera"];
    const jugadaOrdenador = jugadas[Math.floor(Math.random() * 3)];

    // const jugadaOrdenador = jugadas[1] (Así siempre sale papel);

    //He tenido que buscar cómo hacer que la máquina escogiera entre las tres opciones.
    //Pensando, he considerado crear un array con las tres opciones para que según el número (0, 1 o 2), la máquina eligiera
    //De todas formas seguía sin saber cómo hacer que javascript generase un número aleatorio entre el 0 y el 2 por lo que lo he buscado
    //y he dado con la opción de usar math random para indicar que el valor sea aleatorio. El multiplicarlo por tres indica que las opciones son tres, ya que se abarcan el 0, 1 y 2, siendo tres números (piedra, papel y tijera en el array)
    //Por último, al ver que seguía sin funcionar, he vuelto a investigar y he visto que math floor era una función que no conocía pero por lo visto es necesaria para que los números que se generasen al azar fueran enteros, sin decimales, siendo esta la razón de que no funcionase.


    const resultado = compararJugadas(jugadaUsuario, jugadaOrdenador);

    contadorUsuario.textContent = `Tus puntos: ${puntosUsuario}`;
    contadorOrdenador.textContent = `Puntos de la máquina: ${puntosOrdenador}`;
  });
});

function compararJugadas(jugadaUsuario, jugadaOrdenador) {
  
    let resultado;

  if (jugadaUsuario === jugadaOrdenador) {
    resultado = `Elegiste ${jugadaUsuario}, y la máquina ha elegido ${jugadaOrdenador}, por lo que ha habido un empate.`;
  } else if (
    (jugadaUsuario === "piedra" && jugadaOrdenador === "tijera") ||
    (jugadaUsuario === "papel" && jugadaOrdenador === "piedra") ||
    (jugadaUsuario === "tijera" && jugadaOrdenador === "papel")
  ) {
    resultado = `Elegiste ${jugadaUsuario}, y la máquina ha elegido ${jugadaOrdenador}, por lo que has ganado.`;
    puntosUsuario++;
  } else {
    resultado = `Elegiste ${jugadaUsuario}, y la máquina ha elegido ${jugadaOrdenador}, por lo que has perdido.`;
    puntosOrdenador++;
  }

  resultados.textContent = resultado;

  return resultado;
}
