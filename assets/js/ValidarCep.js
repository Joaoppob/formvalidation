class ValidarCep {
  constructor() {
    this.logradouro = document.querySelector('[data-tipo="logradouro"]');
    this.cidade = document.querySelector('[data-tipo="cidade"]');
    this.estado = document.querySelector('[data-tipo="estado"]');
  }
  completa(logradouro, cidade, estado) {
    console.log(logradouro, cidade, estado);
    this.logradouro.value = logradouro;
    this.cidade.value = cidade;
    this.estado.value = estado;
  }
  validaCep(input) {
    const cepNumeros = input.value.replace(/\D/g, '');
    if (input.validity.valid) {
      const url = `https://viacep.com.br/ws/${cepNumeros}/json/`;
      const options = {
        method: 'GET',
        mode: 'cors',
        headers: {
          'content-type': 'application/json;charset=utf-8',
        },
      };
      fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
          if (data.erro) {
            input.setCustomValidity('este não é um CEP válido');
            return;
          } else {
            this.completa(data.logradouro, data.localidade, data.uf);
          }
        });
    }
  }
}

export { ValidarCep };
