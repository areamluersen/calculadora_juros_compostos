const dataSource: { mes: number, totalInvestido: number, juros: number, totalJuros: number, totalAcumulado: number }[] = []

function calcularValorFinal (meses: number, jurosMensal: number, valorInicial: number, aporteMensal: number) {
  dataSource.push({ mes: 0, totalInvestido: valorInicial, totalAcumulado: valorInicial, juros: 0, totalJuros: 0 })
  let valorFinal = valorInicial
  for (let i = 0; i < meses; i++) {
    const juros = valorFinal * jurosMensal / 100
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
  console.table(dataSource)
}

function run () {
  const valorInicial = 10000
  const jurosAnual = 8
  const jurosMensal = 0.67
  const periodoEmAnos = 10

  const meses = periodoEmAnos * 12
  const aporteMensal = 100

  calcularValorFinal(meses, jurosMensal, valorInicial, aporteMensal)
}

run()