import { validarInput } from './validar.js';
class App {
  constructor() {
    this.inputs = document.querySelectorAll('input');
  }

  valida() {
    this.inputs.forEach((input) => {
      input.addEventListener('input', () => {
        validarInput(input);
      });
    });
  }
}

export { App };
