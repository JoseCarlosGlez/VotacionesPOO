class Votaciones {
  Afavor = 0;
  EnContra = 0;
  Abstinencia = 0;

  ContarVotos(BotonPresionado) {
    switch (BotonPresionado) {
      case "A favor":
        this.Afavor++;
        break;

      case "En contra":
        this.EnContra++;
        break;

      case "Abstención":
        this.Abstinencia++;
        break;
    }

    console.log(this.Afavor, this.Abstinencia, this.EnContra);
  }

  VerificarGanador() {
    if (this.Afavor > this.EnContra) {
      if (this.Afavor > this.Abstinencia) {
        console.log(this.Afavor);
      } else {
        console.log(this.Abstinencia);
      }
    } else if (this.EnContra > this.Abstinencia) {
      console.log(this.EnContra);
    } else {
      console.log(this.Abstinencia);
    }
  }
}
