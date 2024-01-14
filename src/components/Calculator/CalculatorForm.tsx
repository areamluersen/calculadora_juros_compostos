import { LineChartOutlined, TableOutlined } from '@ant-design/icons';
import { Button, Col, Form, Input, Row, Select, Tabs, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { TJurosCompostos, calcularValorFinal, jurosAnuaisParaMensais, jurosMensaisParaAnuais } from '../../utils/juros_compostos';
import { TableResult } from './TableResult';
import { ProgressPlotInterest } from './ProgressPlotInterest';
import { ProgressPlot } from './ProgressPlot';

const { Option } = Select;

type TFormFields = {
  initialValue: number,
  monthlyContribution: number,
  interestRate: number,
  period: number,
}

type TInterestPeriod = 'month' | 'yarn'
type TPeriodType = 'months' | 'years'

const CalculatorForm: React.FC = () => {
  const [form] = Form.useForm()
  const [resultado, setResultado] = useState<TJurosCompostos>([])
  const [interestPeriod, setInterestPeriod] = useState<TInterestPeriod>('month')
  const [periodType, setPeriodType] = useState<TPeriodType>('years')
  const [loading, setLoading] = useState<boolean>(false)

  const handleFormSubmit = async ({ initialValue, interestRate, monthlyContribution, period }: TFormFields) => {
    setLoading(true)
    let interestRateMonth = interestRate / 100
    if (interestPeriod === 'yarn') {
      interestRateMonth = jurosAnuaisParaMensais(interestRateMonth)
    }

    const periodInMonths = periodType === 'years' ? period * 12 : period

    const projecao = await calcularValorFinal(periodInMonths, interestRateMonth, Number(initialValue), Number(monthlyContribution))
    setResultado(projecao)
    message.success({ content: "Progeção calculada com sucesso!" });
    setLoading(false)
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
        initialValue: 5000,
        monthlyContribution: 1000,
        interestRate: 0.7,
        period: 30,
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
                <Select defaultValue={"month"}
                  onChange={(value: TInterestPeriod) => {
                    const actualInterest = form.getFieldValue('interestRate')
                    const newParsedInterest = value === 'month' ? jurosAnuaisParaMensais(actualInterest / 100) : jurosMensaisParaAnuais(actualInterest / 100)
                    form.setFieldValue('interestRate', (newParsedInterest * 100).toFixed(2))
                    setInterestPeriod(value)
                  }

                  }>
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
                <Select defaultValue={"months"} onChange={(value: TPeriodType) => setPeriodType(value)}>
                  <Option value="months">Meses</Option>
                  <Option value="years">Anos</Option>
                </Select>
              )}
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item wrapperCol={{ span: 24 }}>
            <Button type="primary" onClick={() => form.submit()} loading={loading}>
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
            children: <TableResult resultado={resultado} loading={loading} />,
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
