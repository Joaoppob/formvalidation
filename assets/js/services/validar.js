import { ColocarErros } from '../ColocarErros.js';
import { ValidarCpf } from '../ValidarCpf.js';
import { ValidarData } from '../ValidarData.js';
import { ValidarCep } from '../ValidarCep.js';
import { ValidarSenha } from '../ValidarSenha.js';

export const validarInput = (input) => {
  const colocarErros = new ColocarErros();
  const validaData = new ValidarData();
  const validarCpf = new ValidarCpf();
  const validarCep = new ValidarCep();
  const validarSenha = new ValidarSenha();

  const tipo = input.dataset.tipo;
  const validadoresEspecificos = {
    nascimento: (input) => validaData.validarDataNascimento(input),
    cpf: (input) => validarCpf.validaCpf(input),
    cep: (input) => validarCep.validaCep(input),
    senha1: (input) => validarSenha.validaSenha(input),
  };
  let timeout = null;

  input.addEventListener('focusout', () => {
    if (validadoresEspecificos[tipo]) {
      validadoresEspecificos[tipo](input);
    }
    colocarErros.colocaErro(input, tipo);
  });
  input.onfocusout = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {}, 1000);
  };
};
