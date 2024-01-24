const grupoA = 300;
const grupoB = 300;

// if (grupoA > grupoB) {
//   console.log('Grupo A ganhou');
// } else if (grupoB > grupoA) {
//   console.log('Grupo B ganhou')
// } else {
//   console.log('Deu empate.')
// }

// const vencedor = grupoA > grupoB ? 'Grupo A venceu' : 'Grupo B venceu';
// console.log(vencedor);

const active = true;
const button = active && 'Botão está ativo';
let buttonHTML = '<button>Ativo</button>';
if (!button) { buttonHTML = '<button>Inativo</button>' }
console.log(buttonHTML)