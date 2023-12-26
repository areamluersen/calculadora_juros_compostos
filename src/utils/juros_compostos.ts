export type TJurosCompostos = { mes: number, totalInvestido: number, juros: number, totalJuros: number, totalAcumulado: number }[]

export function calcularValorFinal(meses: number, jurosMensal: number, valorInicial: number, aporteMensal: number): TJurosCompostos {
  const dataSource: TJurosCompostos = []
  dataSource.push({ mes: 0, totalInvestido: valorInicial, totalAcumulado: valorInicial, juros: 0, totalJuros: 0 })
  let valorFinal = valorInicial
  for (let i = 0; i < meses; i++) {
    const juros = valorFinal * jurosMensal
    valorFinal = valorFinal + juros + aporteMensal

    const { totalInvestido, totalJuros } = dataSource[i]
    dataSource.push({
      mes: i + 1,
      juros,
      totalInvestido: totalInvestido + aporteMensal,
      totalAcumulado: valorFinal,
      totalJuros: totalJuros + juros
    })
  }
  // console.table(dataSource)
  return dataSource
}

export function jurosAnuaisParaMensais(jurosAnual: number): number {
  const jurosMensal = Math.pow(1 + jurosAnual, 1 / 12) - 1;
  return jurosMensal;
}

export function jurosMensaisParaAnuais(jurosMensal: number): number {
  const jurosAnual = Math.pow(1 + jurosMensal, 12) - 1;
  return jurosAnual;
}

// function runFixedValues() {
//   const valorInicial = 10000
//   const jurosAnual = 9
//   const jurosMensal = jurosAnuaisParaMensais(jurosAnual / 100)

//   const periodoEmAnos = 10

//   const meses = periodoEmAnos * 12
//   const aporteMensal = 100

//   calcularValorFinal(meses, jurosMensal, valorInicial, aporteMensal)
// }

// runFixedValues()