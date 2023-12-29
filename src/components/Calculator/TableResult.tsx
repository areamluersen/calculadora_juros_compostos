import { Table } from "antd";
import { TJurosCompostos } from "../../utils/juros_compostos";
import { numberToCurrencyPtBr } from "../../utils/numberToCurrencyPtBr";

export const TableResult = ({ resultado }: { resultado: TJurosCompostos }) => {
  return (
    <Table
      rowKey='mes'
      dataSource={resultado}
      size='small'
      pagination={false}
      scroll={{ y: 350 }}
      columns={[
        {
          dataIndex: 'mes',
          title: 'Mês',
          width: 60
        },
        {
          title: 'Juros',
          dataIndex: 'juros',
          width: 120,
          ellipsis: true,
          render: (value: number) => numberToCurrencyPtBr(value)
        },
        {
          title: 'Total Investido',
          dataIndex: 'totalInvestido',
          width: 120,
          ellipsis: true,
          render: (value: number) => numberToCurrencyPtBr(value)
        },
        {
          title: 'Total Juros',
          dataIndex: 'totalJuros',
          width: 120,
          ellipsis: true,
          render: (value: number) => numberToCurrencyPtBr(value)
        },
        {
          title: 'Total Acumulado',
          dataIndex: 'totalAcumulado',
          width: 120,
          ellipsis: true,
          render: (value: number) => numberToCurrencyPtBr(value)
        }
      ]}
    />
  );
}