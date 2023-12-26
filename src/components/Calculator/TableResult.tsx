import { Table } from "antd";
import { TJurosCompostos } from "../../utils/juros_compostos";

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
          title: 'Mês'
        },
        {
          title: 'Juros',
          dataIndex: 'juros',
          render: (value: number) => value.toFixed(2)
        },
        {
          title: 'Total Investido',
          dataIndex: 'totalInvestido',
          render: (value: number) => value.toFixed(2)
        },
        {
          title: 'Total Juros',
          dataIndex: 'totalJuros',
          render: (value: number) => value.toFixed(2)
        },
        {
          title: 'Total Acumulado',
          dataIndex: 'totalAcumulado',
          render: (value: number) => value.toFixed(2)
        }
      ]}
    />
  );
}