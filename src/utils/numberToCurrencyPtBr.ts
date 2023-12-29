
export function numberToCurrencyPtBr(value: number) {
  const formattedNumber = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return formattedNumber
}
