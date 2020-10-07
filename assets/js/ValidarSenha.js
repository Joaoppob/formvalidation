class ValidarSenha {
  constructor() {
    this.senha = document.querySelector('[data-tipo="senha"]');
    this.senha1 = document.querySelector('[data-tipo="senha1"]');
  }

  validaSenha(input) {
    if (this.senha.value != this.senha1.value) {
      input.setCustomValidity('Senha diferentes');
      return;
    }
    input.setCustomValidity('');
    return;
  }
}
export { ValidarSenha };
