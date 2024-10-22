document.getElementById("calcularBtn").addEventListener("click", function() {
    // Obtendo os valores de entrada
    const salario = parseFloat(document.getElementById("salario").value);
    const resultadoInput = document.getElementById("resultado");

    let imposto = 0;

    // Cálculo do imposto com base nas faixas salariais
    if (salario > 3583) {
        imposto = salario * 0.275;
    } else if (salario > 2866) {
        imposto = salario * 0.225;
    } else if (salario > 2150) {
        imposto = salario * 0.15;
    } else if (salario >= 1434) {
        imposto = salario * 0.075;
    } else {
        imposto = 0; // Sem imposto para salários abaixo de R$1.434
    }

    // Exibindo o resultado
    resultadoInput.value = `R$ ${imposto.toFixed(2)}`;
});
