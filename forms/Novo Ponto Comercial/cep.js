// TAMBÉM PODE SER:
// $(window).on("load", function(){})
$(document).ready(function () {
  $("#cep").blur(function () {$.getJSON("https://viacep.com.br/ws/" + $("#cep").val() + "/json/", function (dados) {
        $("#logradouro").val(dados.logradouro);
        $("#bairro").val(dados.bairro);
        $("#cidade").val(dados.localidade);
        $("#estado").val(dados.uf);
      }
    );
  });
});