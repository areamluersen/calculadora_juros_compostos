import { LineChartOutlined, TableOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { TJurosCompostos, calcularValorFinal } from '../../utils/juros_compostos';
import { ProgressPlot } from './ProgressPlot';
import { TableResult } from './TableResult';
import { ProgressPlotInterest } from './ProgressPlotInterest';

const { Option } = Select;

type TFormFields = {
  initialValue: number,
  monthlyContribution: number,
  interestRate: number,
  period: number,
}

const CalculatorForm: React.FC = () => {
  const [form] = Form.useForm()
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

  useEffect(() => {
    if (resultado.length === 0) {
      form.submit()
    }
  }, [form, resultado.length]
  )

  return (
    <Form
      form={form}
      layout='vertical'
      onFinish={handleFormSubmit}
      initialValues={{
        initialValue: 1000,
        monthlyContribution: 100,
        interestRate: 0.7,
        period: 12,
      }}
    >
      <Row gutter={[16, 0]}>
        <Col sm={12} md={5}>
          <Form.Item label="Valor Inicial" name="initialValue">
            <Input type="number" addonBefore="R$" />
          </Form.Item>
        </Col>
        <Col sm={12} md={5}>
          <Form.Item label="Aporte Mensal" name="monthlyContribution">
            <Input type="number" addonBefore="R$" />
          </Form.Item>
        </Col>
        <Col sm={12} md={7}>
          <Form.Item label="Juros" name="interestRate">
            <Input
              addonBefore="%"
              type="number"
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
              addonBefore="Nº"
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
      <Tabs defaultActiveKey='2'
        items={[
          {
            key: '1',
            label: `Tabela`,
            children: <TableResult resultado={resultado} />,
            icon: <TableOutlined />,
          },
          {
            key: '2',
            label: `Gráficos`,
            children: resultado.length > 0 && (<>
              <ProgressPlotInterest datasource={resultado} />
              <ProgressPlot datasource={resultado} />
            </>),
            icon: <LineChartOutlined />,
          }
        ]}
      />

    </Form>
  );
};

export default CalculatorForm;
