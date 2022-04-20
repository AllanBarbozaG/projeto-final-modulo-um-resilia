function validaEntrada() {
  var decisao = prompt('Digite o número da decisão que deseja tomar (1 ou 2)');
  while (decisao != '1' && decisao != '2') {
    alert('Decisão inválida. Digite 1 ou 2')
    decisao = prompt('Digite o número da decisão que deseja tomar');
  } if (decisao == '1') {
    alert('game over!')
  } else {
    window.location.assign("/jogo-introducao/hercules/hercules-fase-um/resultado/alternativa-certa/proxima-fase.html");
  }
}










/*function validaEntrada() {
  var decisao = prompt('Digite o número da decisao que deseja tomar (1 ou 2)');
  if (decisao != '1' && decisao != '2') {
    alert('Insira 1 ou 2')
  } else if (decisao == '1') {
    alert('game over!')
  } else {
    window.location.assign("/jogo-introducao/hercules/hercules-fase-um/resultado/alternativa-certa/proxima-fase.html");
    console.log(window.location.href("proxima-fase.html"))
  }
}*/