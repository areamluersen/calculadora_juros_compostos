import { Table } from "antd";
import { TJurosCompostos } from "../../utils/juros_compostos";
import { numberToCurrencyPtBr } from "../../utils/numberToCurrencyPtBr";

export const TableResult = ({ resultado, loading }: { resultado: TJurosCompostos, loading?: boolean }) => {
  return (
    <Table
      rowKey='mes'
      dataSource={resultado}
      size='small'
      pagination={{ defaultPageSize: 100, pageSizeOptions: [10, 50, 100, resultado.length ?? 500] }}
      scroll={{ y: 350 }}
      loading={loading}
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