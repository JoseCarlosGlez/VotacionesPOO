const imagen = document.getElementById("Carro");
let sizeMarginLeft = 0;

const carro = new Carro(0, 0);

let PosicionImagenes = [];

const contenedor = document.getElementById("contenedor");

EventListener();

function EventListener() {
  ObtenerMargin();
  document.addEventListener("keydown", moveCar);
  contenedor.addEventListener("click", PonerPremio);
  window.addEventListener("resize", ObtenerMargin);
}

function moveCar(event) {

  carro.MoverCarro(event.key, imagen, PosicionImagenes);
}

function PonerPremio(event) {
  const premio = new Premios(event.x, event.y);

  PosicionImagenes.push(premio.CrearImagen(contenedor, sizeMarginLeft));
  console.log(PosicionImagenes);
}

function ObtenerMargin() {
  const MarginContainer = window
    .getComputedStyle(contenedor)
    .getPropertyValue("margin-left");

  sizeMarginLeft = MarginContainer.substring(0, MarginContainer.length - 2);
}
