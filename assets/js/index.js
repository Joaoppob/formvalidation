import { BotaoForms } from './BotaoForms.js';
import { App } from './services/app.js';
window.onload = () => {
  let form = document.querySelector('form');
  const botaoForms = new BotaoForms();
  const app = new App();
  form.reset();
  botaoForms.alterna();
  app.valida();
};
