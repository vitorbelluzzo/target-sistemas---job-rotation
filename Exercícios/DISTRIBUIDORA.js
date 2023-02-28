let SP = 67836.43;
let RJ = 36678.66;
let MG = 29229.88;
let ES = 27165.48;
let OUTROS = 19849.53;

var total = SP + MG + ES + OUTROS // Somando as variáveis

let percentual_SP = (SP / total) * 100  // calculando o percentual dos Estados
let percentual_RJ = (RJ / total) * 100
let percentual_MG = (MG / total) * 100  
let percentual_ES = (ES / total) * 100
let percentual_OUTROS = (OUTROS / total) * 100

console.log(`Percentual de SP: "  ${percentual_SP.toFixed(2)} %`);
console.log(`Percentual de RJ: "  ${percentual_RJ.toFixed(2)} %`);
console.log(`Percentual de MG: "  ${percentual_MG.toFixed(2)} %`);
console.log(`Percentual de ES: "  ${percentual_ES.toFixed(2)} %`);
console.log(`Percentual de outros Estados: "  ${percentual_OUTROS.toFixed(2)} %`);

