function validaEntrada() {
  var decisao = prompt('Digite o número da decisão que deseja tomar (1 ou 2)');
  while(true) {
    if (decisao == 1 || decisao == 2) {
      redirecionaPagina(decisao)
      break;
    } else {
      alert('Decisão inválida. Digite 1 ou 2');
      decisao = prompt('Digite o número da decisao que deseja tomar');
    }
  } 
} 

function redirecionaPagina(decisao) {
  if (decisao == '1') {
    window.location.assign("/projeto-final-modulo-um-resilia/hercules/html/hercules-fase-dois-game-over.html");
  } else {
    window.location.assign("/projeto-final-modulo-um-resilia/hercules/html/hercules-fase-tres.html");
  }
} 

/* Segunda versão do código

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
      window.location.assign("/projeto-final-modulo-um-resilia/hercules/html/hercules-fase-dois-game-over.html");
    } else {
      window.location.assign("/projeto-final-modulo-um-resilia/hercules/html/hercules-fase-tres.html");
    }
  } redirecionaPagina();
} */


/* Primeira versão do código

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
}*/










