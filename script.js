const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');


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
  }