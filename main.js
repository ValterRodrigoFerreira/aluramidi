function tocaSom(idElementAudio) {
  document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for (
  let contadorDeTeclas = 0;
  contadorDeTeclas < listaDeTeclas.length;
  contadorDeTeclas++
) {
  const tecla = listaDeTeclas[contadorDeTeclas];

  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`; //template string

  tecla.onclick = function () {
    tocaSom(idAudio);
  };
}
