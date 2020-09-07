$(document).ready(function() {

    $("input[type=button]").click(function(e) {
        let botao = e.target.value;
        let resultado = $("#resultado").val();

        if (botao != "Del" && botao != "ANS") {
            $("#resultado").val(resultado + botao);
        }

        if (botao == "=") {
            $("#resultado").val(eval(resultado));
        }

        if (botao == "C") {
            $("#resultado").val("");
        }

        if (botao == "Del") {
            let tamanho = resultado.length;

            resultado = resultado.substring(0, tamanho - 1);
            $("#resultado").val(resultado);
        }

        if (botao == "ANS") {
            if (localStorage.getItem("ANS") == "") {
                localStorage.setItem("ANS", resultado);
            } else {
                $("#resultado").val(localStorage.getItem("ANS"));
            }
        }
    });
});