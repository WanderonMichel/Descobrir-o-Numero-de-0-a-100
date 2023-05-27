var numberToFind = 0
var attepms = 0

function refresh() {
  //gera um número aleatório
  attepms = 0
  numberToFind = parseInt(Math.random() * 100)

  console.log(numberToFind)
}

function verifyNumber() {
  var bet = document.getElementById('bet').value

  if (bet > 100 || bet < 0) {
    alert('Aposta inválida')
    return
  }

  if (bet > numberToFind) {
    attepms++
    alert(' 🚨 O número para ser encontrado é Menor')
  } else if (bet < numberToFind) {
    alert(' 🚨 O número para ser encontrado é Maior')
  } else {
    alert(' ✅ Parabéns você acertou !! com ' + attepms + ' erros')
    refresh()
  }
}
refresh()
