import { RetornaMensagemErro } from './RetornaMensagemErro.js';

class ColocarErros {
  constructor() {}

  colocaErro(input, tipo) {
    const retornaMensagemErro = new RetornaMensagemErro();

    const classeElementoErro = 'erro__validacao';
    const classeInputErro = 'possui-erro-validacao';
    const elementoPai = input.parentNode;
    const elementoErroExiste = elementoPai.querySelector(`.${classeElementoErro}`);
    const elementoErro = elementoErroExiste || document.createElement('div');
    const elementoValido = input.validity.valid;

    if (!elementoValido) {
      elementoErro.className = classeElementoErro;
      input.classList.add(classeInputErro);
      elementoErro.textContent = retornaMensagemErro.retornaMensagem(tipo, input.validity);
      input.after(elementoErro);
    } else {
      elementoErro.remove();
      input.classList.remove(classeInputErro);
    }
  }
}

export { ColocarErros };
