function validateForm(form) {
  var msg = "";

  //   DADOS DO REQUISITANTE
  if (form.getValue("nome") == "") {
    msg += "Campo nome não foi preenchido.";
  }
  if (form.getValue("email") == "") {
    msg += "Campo email não foi preenchido.";
  }
  if (form.getValue("telefone") == "") {
    msg += "Campo telefone não foi preenchido.";
  }
  if (form.getValue("nascimento") == "") {
    msg += "Campo nascimento não foi preenchido.";
  }
  if (form.getValue("cpf") == "") {
    msg += "Campo cpf não foi preenchido.";
  }
  // DADOS DO PONTO COMERCIAL
  if (form.getValue("tipoPonto") == "") {
    msg += "Campo tipoPonto não foi preenchido.";
  }
  if (
    form.getValue("domingo") != "on" &&
    form.getValue("segunda") != "on" &&
    form.getValue("terca") != "on" &&
    form.getValue("quarta") != "on" &&
    form.getValue("quinta") != "on" &&
    form.getValue("sexta") != "on" &&
    form.getValue("sabado") != "on"
  ) {
    msg += "Selecione os dias de funcionamento do ponto comercial.";
  }
  if (form.getValue("cep") == "") {
    msg += "Campo cep não foi preenchido.";
  }
  if (form.getValue("logradouro") == "") {
    msg += "Campo logradouro não foi preenchido.";
  }
  if (form.getValue("numero") == "") {
    msg += "Campo numero não foi preenchido.";
  }
  if (form.getValue("bairro") == "") {
    msg += "Campo bairro não foi preenchido.";
  }
  if (form.getValue("cidade") == "") {
    msg += "Campo cidade não foi preenchido.";
  }
  if (form.getValue("estado") == "") {
    msg += "Campo estado não foi preenchido.";
  }
  if (form.getValue("informacoes") == "") {
    msg += "Campo informacoes não foi preenchido.";
  }
  //   DADOS FINANCEIROS DO PONTO COMERCIAL
  if (form.getValue("valor") == "") {
    msg += "Campo valor não foi preenchido.";
  }

  if (msg != "") {
    throw msg;
  }
}
