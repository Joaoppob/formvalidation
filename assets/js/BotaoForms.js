class BotaoForms {
  constructor() {
    (this.botoes = document.querySelectorAll('[data-botao]')), (this.forms = document.querySelectorAll('[data-form]'));
  }
  ativarForm(valor) {
    const form = document.querySelector(`[data-form = "${valor}"]`);
    form.classList.remove('esconder__visualmente');
  }

  inativarForm() {
    this.forms.forEach((form) => {
      form.classList.add('esconder__visualmente');
    });
  }

  ativarBotao(valor) {
    const botao = document.querySelector(`[data-botao = "${valor}"]`);
    botao.classList.add('ativo');
  }

  inativarBotao() {
    this.botoes.forEach((botao) => {
      botao.classList.remove('ativo');
    });
  }

  alterna() {
    this.botoes.forEach((botao) => {
      botao.addEventListener('click', () => {
        const valor = botao.dataset.botao;
        this.inativarBotao();
        this.ativarBotao(valor);

        this.inativarForm();
        this.ativarForm(valor);
      });
    });
  }
}

export { BotaoForms };
