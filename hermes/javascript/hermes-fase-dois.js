function validaEntrada() {
  var decisao = prompt('Digite o número da decisão que deseja tomar (1 ou 2)');
  while(true) {
    if (decisao == 1 || decisao == 2) {
      break;
    } else {
      alert('Decisão inválida. Digite 1 ou 2');
      decisao = prompt('Digite o número da decisao que deseja tomar');
    }
  } function redirecionaPagina() {
    if (decisao == '1') {
      window.location.assign("/hermes/html/hermes-fase-dois-game-over.html");
    } else {
      window.location.assign("/hermes/html/hermes-fase-dois-resposta-certa.html");
    }
  } redirecionaPagina();
} 


/*function validaEntrada() {
  var decisao = prompt('Digite o número da decisão que deseja tomar (1 ou 2)');
  while (decisao != '1' && decisao != '2') {
    alert('Decisão inválida. Digite 1 ou 2')
    decisao = prompt('Digite o número da decisão que deseja tomar');
  } if (decisao == '1') {
    alert('game over!')
  } else {
    window.location.assign("/jogo-introducao/hercules/hercules-fase-um/resultado/alternativa-certa/proxima-fase.html");
  }
}*/










