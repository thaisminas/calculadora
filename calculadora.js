$(document).ready(function() {

    $("input[type=button]").click(function(e) {
        let botao = e.target.value;
        let resultado = $("#resultado").val();

        $("#resultado").val(resultado + botao);

        if (botao == "=") {
            $("#resultado").val(eval(resultado));
        }
        if (botao == "C") {
            $("#resultado").val("");
        }
        if (botao == "Del") {
            botao.substring(0, -3)

        }


    });
});