function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento === null) {
    alert("batata");
  }

  if (elemento != null) {
    elemento.play();
  }
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

  tecla.onkeydown = function (evento) {
    //console.log(evento.code === "Space" || evento.code === "Enter");

    if (evento.code === "Space" || evento.code === "Enter")
      listaDeTeclas[contadorDeTeclas].classList.add("ativa");
  };

  tecla.onkeyup = function () {
    listaDeTeclas[contadorDeTeclas].classList.remove("ativa");
  };
}
