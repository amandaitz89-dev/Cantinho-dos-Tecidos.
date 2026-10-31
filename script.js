function simularCompra() {
  // Preços unitários dos tecidos
  const preco1 = 19.90; // Crepe Barbie
  const preco2 = 89.90; // Linho Puro
  const preco3 = 49.90; // Alfaiataria Milão

  // Leitura dos valores diretamente dos campos da página (Inputs)
  let inputCrepe = document.getElementById("qtd-crepe").value;
  let inputLinho = document.getElementById("qtd-linho").value;
  let inputAlfaiataria = document.getElementById("qtd-alfaiataria").value;

  // Conversão segura com Number()
  let qtd1 = Number(inputCrepe) || 0;
  let qtd2 = Number(inputLinho) || 0;
  let qtd3 = Number(inputAlfaiataria) || 0;

  // Evita valores negativos
  qtd1 = Math.max(0, qtd1);
  qtd2 = Math.max(0, qtd2);
  qtd3 = Math.max(0, qtd3);

  // Verificação de seleção vazia
  if (qtd1 === 0 && qtd2 === 0 && qtd3 === 0) {
    alert("Nenhum produto foi selecionado.");
    return;
  }

  // Cálculos de preço x quantidade
  let valor1 = qtd1 * preco1;
  let valor2 = qtd2 * preco2;
  let valor3 = qtd3 * preco3;
  let totalBruto = valor1 + valor2 + valor3;

  // Regra de desconto (10% para compras acima de R$ 150,00)
  let desconto = 0;
  if (totalBruto >= 150) {
    desconto = totalBruto * 0.10;
  }
  let totalFinal = totalBruto - desconto;

  // Exibição do resumo via alert()
  let resumo = "CANTINHO DOS TECIDOS\n\n";
  if (qtd1 > 0) resumo += "• Crepe Barbie: " + qtd1 + "m x R$ " + preco1.toFixed(2) + " = R$ " + valor1.toFixed(2) + "\n";
  if (qtd2 > 0) resumo += "• Linho Puro: " + qtd2 + "m x R$ " + preco2.toFixed(2) + " = R$ " + valor2.toFixed(2) + "\n";
  if (qtd3 > 0) resumo += "• Alfaiataria Milão: " + qtd3 + "m x R$ " + preco3.toFixed(2) + " = R$ " + valor3.toFixed(2) + "\n";

  resumo += "\nSubtotal: R$ " + totalBruto.toFixed(2) + "\n";

  if (desconto > 0) {
    resumo += "Desconto (10%): -R$ " + desconto.toFixed(2) + "\n";
  } else {
    resumo += "Sem desconto (compras a partir de R$ 150,00 ganham 10% OFF).\n";
  }

  resumo += "\nTOTAL A PAGAR: R$ " + totalFinal.toFixed(2);

  alert(resumo);
}