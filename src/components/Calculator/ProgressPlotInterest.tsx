import { Line, LineConfig } from '@ant-design/plots';
import { TJurosCompostos } from "../../utils/juros_compostos";
import { numberToCurrencyPtBr } from '../../utils/numberToCurrencyPtBr';

function makePlotDataSource(datasource: TJurosCompostos) {
  const jurosRecebido = datasource.map(valor => ({
    mes: valor.mes,
    value: Number(valor.juros.toFixed(2)),
    type: 'Juros Mensal Recebido'
  }))

  return [...jurosRecebido]
}

const ProgressPlotInterest = ({ datasource }: { datasource: TJurosCompostos }) => {
  const data = makePlotDataSource(datasource)
  const lastElement = datasource[datasource.length - 1]

  const config: LineConfig = {
    data,
    xField: 'mes',
    yField: 'value',
    tooltip: {
      items: [
        {
          channel: 'y',
          valueFormatter: (value: number) => numberToCurrencyPtBr(value)
        }
      ]
    },
    sizeField: 'value',
    shapeField: 'trail',
    legend: { size: false },
    colorField: 'type',
  };

  return (<>
    <h4>No último mês você estará recebendo {numberToCurrencyPtBr(lastElement.juros)} de juros. E já terá recebido o montante de {numberToCurrencyPtBr(lastElement.totalJuros)} em Juros.</h4>
    <Line {...config} />
  </>
  );
}

export { ProgressPlotInterest };
