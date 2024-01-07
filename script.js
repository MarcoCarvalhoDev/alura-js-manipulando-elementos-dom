const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const startPauseBt = document.querySelector('#start-pause');
const musicaFocoInput = document.querySelector('#alternar-musica');
const iniciarOuPausarBt = document.querySelector('#start-pause span');
const iniciarOuPausarBtIcon = document.querySelector('.app__card-primary-button-icon');
const tempoNaTela = document.querySelector('#timer');
const musica = new Audio('sons/luna-rise-part-one.mp3'); // variaveis criadas para armazenar sons e audios
const audioPlay = new Audio('sons/play.wav'); 
const audioTempoFinalizado = new Audio('sons/beep.mp3');
const audioPausa = new Audio('sons/pause.mp3');

let tempoDecorridoEmSegundos = 1500; //armazena o valor de tempo para o temporizador
let intervaloId = null;

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
  tempoDecorridoEmSegundos =  1500; 
  alterarContexto('foco');
  focoBt.classList.add('active');
})

curtoBt.addEventListener('click', () => {
  tempoDecorridoEmSegundos =  300; // altera o valor da variavel tempo de acordo com o contexto
  alterarContexto('descanso-curto');
  curtoBt.classList.add('active');
})

longoBt.addEventListener('click', () => {
  tempoDecorridoEmSegundos =  900; 
  alterarContexto('descanso-longo');
  longoBt.classList.add('active'); 
  })

  function alterarContexto(contexto) { // criando uma função para reduzir código repetido ao realizar as alterações na pág. ao clicar nos botões
    mostrarTempo(); // sempre que chamada a funcao que altera o contexto, chama a funcao mostrar tempo para exibir o novo tempo de acordo com o contexto (foco, descanso curto ou longo)
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

  const contagemRegressiva = () => { // variavel contagem regressiva que iniciada, verifica o tempo ate ser menor ou igual a 0 para executa-la
    if (tempoDecorridoEmSegundos <= 0 ) {
      audioTempoFinalizado.play();
      alert('Tempo Finalizado!'); // mensagem alert e audio executados ao fim da contagem regressiva
      zerar();
      return;
    }
    tempoDecorridoEmSegundos -= 1; // decremento do tempo (variavel -= 1)
    mostrarTempo();
  }

  startPauseBt.addEventListener('click', iniciarOuPausar); // adiciona eveto de click ao botao startPauseBt

  function iniciarOuPausar() { // funcao para iniciar ou pausar a contagem regressiva
    if (intervaloId) {
      audioPausa.play();
      zerar();
      return
    }
    audioPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000)  // metodo setInterval, que executa uma funcao ou chama uma variavel a cada x tempo (1000 no caso)
    iniciarOuPausarBt.textContent = "Pausar";
    iniciarOuPausarBtIcon.setAttribute('src', 'imagens/pause.png');
  }

  function zerar() { // funcao para zerar a contagem e retornar para os valores iniciais
    clearInterval(intervaloId);
    iniciarOuPausarBt.textContent = "Começar";
    iniciarOuPausarBtIcon.setAttribute('src', 'imagens/play_arrow.png');
    intervaloId = null;
  }

  function mostrarTempo () {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleString('pt-br',{minute: '2-digit', second: '2-digit'})
    tempoNaTela.innerHTML = `${tempoFormatado}`;
  }

  mostrarTempo() // para exibir o tempo inicial sempre na tela