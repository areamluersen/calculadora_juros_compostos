import { TJurosCompostos } from "../../utils/juros_compostos";
import { Column } from '@ant-design/plots';

const ProgressPlot = ({ datasource }: { datasource: TJurosCompostos }) => {
  const data = datasource.map(valor => ({ mes: valor.mes, valor: Number(valor.totalInvestido.toFixed(2)), type: 'Total Investido' }))
  data.push(...datasource.map(valor => ({ mes: valor.mes, valor: Number(valor.totalJuros.toFixed(2)), type: 'Total Juros' })))
  console.log("🚀 ---------------------------------------------------------🚀")
  console.log("🚀 ~ file: ProgressPlot.tsx:7 ~ ProgressPlot ~ data:", data)
  console.log("🚀 ---------------------------------------------------------🚀")
  const config = {
    data: data,
    isStack: true,
    xField: 'mes',
    yField: 'valor',
    seriesField: 'type',
    label: {
      position: 'middle', // 'top', 'bottom', 'middle'
    },
    interactions: [
      {
        type: 'active-region',
        enable: false,
      },
    ],
  };

  return <Column {...config} />;
}

export { ProgressPlot };