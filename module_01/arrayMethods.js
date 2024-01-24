const precos = [
  'Crédito',
  'R$ 200',
  'R$ 400',
  'Contas Pagar',
  'R$ 300',
  'R$ 400',
  'Meus dados',
];

const precosFilter = precos.filter((p) => p.includes('R$'));
const precosNumeros = precosFilter.map((p) => Number(p.replace('R$ ', '')));
console.log(precosNumeros);
