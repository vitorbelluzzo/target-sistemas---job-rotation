const faturamento_mensal = [
  { dia: 1, valor: 22174.1664 },
  { dia: 2, valor: 24537.6698 },
  { dia: 3, valor: 26139.6134 },
  { dia: 6, valor: 26742.6612 },
  { dia: 8, valor: 42889.2258 },
  { dia: 9, valor: 46251.174 },
  { dia: 10, valor: 11191.4722 },
  { dia: 13, valor: 3847.4823 },
  { dia: 14, valor: 373.7838 },
  { dia: 15, valor: 2659.7563 },
  { dia: 16, valor: 48924.2448 },
  { dia: 17, valor: 18419.2614 },
  { dia: 20, valor: 35240.1826 },
  { dia: 21, valor: 43829.1667 },
  { dia: 22, valor: 18235.6852 },
  { dia: 23, valor: 4355.0662 },
  { dia: 24, valor: 13327.1025 },
  { dia: 27, valor: 25681.8318 },
  { dia: 28, valor: 1718.1221 },
  { dia: 29, valor: 13220.495 },
  { dia: 30, valor: 8414.61 }
];
const valores_faturamento = faturamento_mensal.map(item => item.valor);

const menor_valor = Math.min(...valores_faturamento);
console.log(
  ` O menor valor de faturamento ocorrido em um dia do mês foi ${menor_valor}`
);
const maior_valor = Math.max(...valores_faturamento);
console.log(
  ` O maior valor de faturamento ocorrido em um dia do mês foi ${maior_valor}`
);

const total_dias = valores_faturamento.length;

const soma_faturamento = valores_faturamento.reduce(
  (acumulador, valorAtual) => {
    return acumulador + valorAtual;
  }
);
const media_faturamento = soma_faturamento / total_dias;
// media arredondada

dias = 0;

for (let i = 0; i < total_dias; i++) {
  if (valores_faturamento[i] > media_faturamento) {
    dias++;
  }
}

console.log(`O faturamento foi maior que a média em ${dias} dias.`);
