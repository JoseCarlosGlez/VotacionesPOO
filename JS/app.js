EventListener();

const contenedor = document.getElementById("Contenedor");

function EventListener() {
  document
    .getElementById("btnCambio")
    .addEventListener("click", CambiarPantalla);
}
function CambiarPantalla() {
  const PreguntaVotacion = document.getElementById("TextoVotacion").value;

  if (PreguntaVotacion == "") {return
  }

  eliminarDom();
  crearPantallaVotaciones(PreguntaVotacion);
}

function eliminarDom() {
  while (contenedor.firstChild) {
    contenedor.firstChild.remove();
  }
}

function crearPantallaVotaciones(TextoVotaciones) {
  const input = document.createElement("input");
  input.setAttribute("class", "form-control");
  input.value = TextoVotaciones;
  input.disabled = true;

  const row = document.createElement("div");
  row.setAttribute("class", "row mt-5 ");

  const col12 = document.createElement("div");
  col12.setAttribute("class", "col-12");

  const col12buttons = document.createElement("div");
  col12buttons.setAttribute("class", "col-12 mt-3 text-center");

  const buttonFavor = document.createElement("button");
  buttonFavor.setAttribute("class", "btn btn-outline-success mr-3 ");
  buttonFavor.innerText = "A favor";

  const buttonContra= document.createElement("button");
  buttonContra.setAttribute("class", "btn btn-outline-warning mr-3 ");
  buttonContra.innerText = "En contra";

  const buttonAbstinencia = document.createElement("button");
  buttonAbstinencia.setAttribute("class", "btn btn-outline-info ");
  buttonAbstinencia.innerText = "Abstención";

  contenedor.appendChild(row);
  row.appendChild(col12);
  col12.appendChild(input);
  contenedor.appendChild(row)
  row.appendChild(col12buttons)
  col12buttons.appendChild(buttonFavor)
  col12buttons.appendChild(buttonContra)
  col12buttons.appendChild(buttonAbstinencia)
 
}
