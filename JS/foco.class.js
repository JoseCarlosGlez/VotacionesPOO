class Foco {
  estado = false;

  CambiarEstado() {
                    
    this.estado = !this.estado;
    if (this.estado) {
      return "./../assets/focoPrendido.jfif";
    } else {
      return "./../assets/FocoApagado.jfif";
    }
  }
}
