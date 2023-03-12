function tocaSom(idElementAudio) {
  document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

let contadorDeTeclas = 0;

while (contadorDeTeclas < listaDeTeclas.length) {
  const tecla = listaDeTeclas[contadorDeTeclas];

  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`;
  //console.log(idAudio);

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  contadorDeTeclas = contadorDeTeclas + 1;
  //console.log(contadorDeTeclas);
}
