// variablres
let frenteTazo
let dosCLicks = 0
let listaTazos = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
let comparaId = []
let comparaSrc = []
let contador = 6

const IniciarJuego = () => {
  listaTazos = _.shuffle(listaTazos) /*mezcla tazos*/
  valoresTazos(listaTazos) /*agrega fotos frontales a los tazos*/
  girarTazos() /*gira los tazos*/
}

const valoresTazos = (listaTazos) => {
  // agrego valores a los tazos
  frenteTazo = document.querySelectorAll('.carta > .front > img')
  frenteTazo.forEach((frente, i) => {
    frente.src = `./assets/img/${listaTazos[i]}.svg`
  })
  return frenteTazo
}

const girarTazos = () => {
  let tazos = document.querySelectorAll('.carta')

  tazos.forEach((tazo, i) => {
    tazo.addEventListener('click', () => {
      comparaId.push(frenteTazo[i].attributes.id.value)
      comparaSrc.push(frenteTazo[i].attributes.src.value)

      if (
        comparaId[comparaId.length - 1] !== comparaId[comparaId.length - 2] &&
        comparaSrc[comparaSrc.length - 1] === comparaSrc[comparaSrc.length - 2]
      ) {
        dosCLicks += 1 /*sumador de clicks,solo admitiremos dos clicks*/

        if (dosCLicks <= 2) {
          tazo.classList.add('clickeado')
          dosCLicks = 0 /*vuelve a cero el contador de clicks*/
        }
      } else {
        dosCLicks += 1 /*sumador de clicks,solo admitiremos dos clicks*/

        if (dosCLicks <= 2) {
          tazo.classList.add('clickeado') /*agrega el giro del tazo*/

          setTimeout(() => {
            dosCLicks = 0 /*vuelve a cero el contador de clicks*/
            tazo.classList.remove('clickeado') /*quita giro de tazo*/
          }, 3000)
        }
      }
    })
  })
}

IniciarJuego()
