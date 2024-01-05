const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');

focoBt.addEventListener('click', () => { // adicionar eventos através do método .addEventListener
  alterarContexto('foco');
})

curtoBt.addEventListener('click', () => {
  alterarContexto('descanso-curto');
})

longoBt.addEventListener('click', () => {
  alterarContexto('descanso-longo'); 
  })

  function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto); // adicionar um atributo ao elemento HTML.
    banner.setAttribute('src', `imagens/${contexto}.png`); // atenção para usar crase ` ` para usar template string ${}
    switch (contexto) { // alterar o texto da página usando o método variavel.innerHTML
      case "foco":
          titulo.innerHTML =  `  
          Otimize sua produtividade,<br>
              <strong class="app__title-strong">mergulhe no que importa.</strong>
          `
          break; // break serve para encerrar a leitura deste bloco e continua executando o código depois do laço
      case "descanso-curto":
          titulo.innerHTML = `
          Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>
          ` 
          break;
      case "descanso-longo":
          titulo.innerHTML = `
          Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>
          `
      default:
          break;
  }
  }