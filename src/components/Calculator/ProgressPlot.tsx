import { TJurosCompostos } from "../../utils/juros_compostos";
import { Column } from '@ant-design/plots';

function makePlotDataSource(datasource: TJurosCompostos) {
  const totalInvestido = datasource.map(valor => ({
    mes: valor.mes,
    value: Number(valor.totalInvestido.toFixed(2)),
    type: 'Total Investido'
  }))
  const totalJuros = datasource.map(valor => ({
    mes: valor.mes,
    value: Number(valor.totalJuros.toFixed(2)),
    type: 'Total Juros'
  }))

  return [...totalInvestido, ...totalJuros]
}

const ProgressPlot = ({ datasource }: { datasource: TJurosCompostos }) => {
  const data = makePlotDataSource(datasource)

  const config = {
    data,
    xField: 'mes',
    yField: 'value',
    stack: true,
    colorField: 'type',
    label: {
      text: 'value',
      textBaseline: 'bottom',
      position: 'inside',
      transform: [
        {
          type: 'overflowHide',
        },
      ],
    },
    interaction: {
      elementHighlightByColor: {
        link: true,
      },
    },
    state: {
      active: { linkFill: 'rgba(0,0,0,0.25)', stroke: 'black', lineWidth: 0.5 },
      inactive: { opacity: 0.5 },
    },
  };

  return <Column {...config} />;
}

export { ProgressPlot };