class RetornaMensagemErro {
  constructor() {}

  retornaMensagem(tipo, validity) {
    let mensagemDeErro = '';
    const tiposErro = ['valueMissing', 'typeMismatch', 'tooShort', 'rangeUnderflow', 'customError', 'patternMismatch'];

    const mensagensErro = {
      email: {
        valueMissing: 'O email é necessario',
        typeMismatch: 'Este não é um email valido',
      },
      nascimento: {
        valueMissing: 'A data de nascimento é necessaria',
        rangeUnderflow: 'O ano ser no minimo antes de 1901',
      },
      senha1: {
        valueMissing: 'A senha é necessario',
        tooShort: 'A senha deve ter no minimo 4(quatro) caracteres',
        customError: 'As senhas não batem',
      },
      cpf: {
        valueMissing: 'O CPF é necessario',
        customError: 'Este não é um cpf valido',
      },
      rg: {
        valueMissing: 'O RG é necessario',
      },
      cep: {
        valueMissing: 'O CEP é necessario',
        patternMismatch: 'Esse CEP não é valido',
        customError: 'Este não é um CEP valido',
      },
      logradouro: {
        alueMissing: 'O logradouro é necessario',
      },
      cidade: {
        alueMissing: 'O cidade  é necessario',
      },
      estado: {
        alueMissing: 'O estado é necessario',
      },
    };

    tiposErro.forEach((erro) => {
      if (validity[erro]) {
        mensagemDeErro = mensagensErro[tipo][erro];
      }
    });
    return mensagemDeErro;
  }
}

export { RetornaMensagemErro };
