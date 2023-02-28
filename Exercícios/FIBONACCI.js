var fibonacci = [0, 1];
var numero = 5; // valor informado

for (let i = 2; i <= numero; i++) {
  var valorAnterior = fibonacci[i - 1]; //variável que armazena o valor do elemento anterior na sequência
  var valorAtual = fibonacci[i - 2] + valorAnterior; //variável que armazena o valor do elemento atual na sequência
  if (valorAtual <= numero) {
    fibonacci.push(valorAtual);
  }
}
console.log(fibonacci);

if (fibonacci.indexOf(numero) === -1) {
  console.log(`o número informado não pertence a sequência`);
} else {
  console.log(`o número informado pertence a sequência`);
}
