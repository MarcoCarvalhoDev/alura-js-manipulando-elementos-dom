const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('sons/luna-rise-part-one.mp3');
musica.loop = true; // para manter a musica tocando em loop  

musicaFocoInput.addEventListener('change', () => { // cria funcionalidade do botao musica ao ser ativado, ligar a musica
  if(musica.paused) {
    musica.play();
  }
  else {
    musica.pause();
  }
})

focoBt.addEventListener('click', () => { // adicionar eventos através do método .addEventListener
  alterarContexto('foco');
  focoBt.classList.add('active');
})

curtoBt.addEventListener('click', () => {
  alterarContexto('descanso-curto');
  curtoBt.classList.add('active');
})

longoBt.addEventListener('click', () => {
  alterarContexto('descanso-longo');
  longoBt.classList.add('active'); 
  })

  function alterarContexto(contexto) { // criando uma função para reduzir código repetido ao realizar as alterações na pág. ao clicar nos botões
    botoes.forEach(function (contexto) { // através de uma iteração, muda o design dos botões ao serem clicados
      contexto.classList.remove('active');
    })
    
    html.setAttribute('data-contexto', contexto); // adicionar um atributo ao elemento HTML.
    banner.setAttribute('src', `imagens/${contexto}.png`); // atenção para usar crase ` ` para usar template string ${}
    
    switch (contexto) { // alterar o texto da página usando o método switch (case) de acordo com o contexto
      case "foco":
          titulo.innerHTML =  `  
          Otimize sua produtividade,<br>
              <strong class="app__title-strong">mergulhe no que importa.</strong>
          ` // variavel.innerHTML para inserir ou alterar textos em HTML
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