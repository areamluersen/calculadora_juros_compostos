import React, { useState } from 'react';
import { Form, Input, Select, Row, Col, Button, Table } from 'antd';
import { TJurosCompostos, calcularValorFinal } from '../../utils/juros_compostos';
import { ProgressPlot } from './ProgressPlot';

const { Option } = Select;

type TFormFields = {
  initialValue: number,
  monthlyContribution: number,
  interestRate: number,
  period: number,
}

const CalculatorForm: React.FC = () => {
  const [resultado, setResultado] = useState<TJurosCompostos>([])

  const handleFormSubmit = ({ initialValue, interestRate, monthlyContribution, period }: TFormFields) => {
    console.log("🚀 --------------------------------------------------------------------------------🚀")
    console.log("🚀 ~ file: CalculatorForm.tsx:16 ~ handleFormSubmit ~ initialValue:", initialValue)
    console.log("🚀 --------------------------------------------------------------------------------🚀")
    console.log("🚀 --------------------------------------------------------------------------------🚀")
    console.log("🚀 ~ file: CalculatorForm.tsx:16 ~ handleFormSubmit ~ interestRate:", interestRate)
    console.log("🚀 --------------------------------------------------------------------------------🚀")
    // Aqui você pode realizar os cálculos com os valores inseridos pelo usuário
    // e exibir os resultados conforme necessário.
    setResultado(calcularValorFinal(period, interestRate / 100, Number(initialValue), Number(monthlyContribution)))
  };

  return (
    <Form
      layout='vertical'
      onFinish={handleFormSubmit}
      initialValues={{
        initialValue: 0,
        monthlyContribution: 0,
        interestRate: 0,
        period: 120,
      }}
    >
      <Row gutter={[16, 0]}>
        <Col sm={12} md={5}>
          <Form.Item label="Valor Inicial" name="initialValue">
            <Input type="number" />
          </Form.Item>
        </Col>
        <Col sm={12} md={5}>
          <Form.Item label="Aporte Mensal" name="monthlyContribution">
            <Input type="number" />
          </Form.Item>
        </Col>
        <Col sm={12} md={7}>
          <Form.Item label="Juros" name="interestRate">
            <Input type="number"
              addonAfter={(
                <Select defaultValue={"month"}>
                  <Option value="month">Mensal</Option>
                  <Option value="yarn">Anual</Option>
                </Select>
              )}
            />
          </Form.Item>
        </Col>
        <Col sm={12} md={7}>
          <Form.Item label="Período" name="period">
            <Input
              type="number"
              addonAfter={(
                <Select defaultValue={"months"}>
                  <Option value="months">Meses</Option>
                  <Option value="years">Anos</Option>
                </Select>
              )}
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item wrapperCol={{ span: 24 }}>
            <Button type="primary" htmlType="submit">
              Calcular
            </Button>
          </Form.Item>
        </Col>
      </Row>
      <ProgressPlot datasource={resultado} />
      <Table
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
    </Form>
  );
};

export default CalculatorForm;
