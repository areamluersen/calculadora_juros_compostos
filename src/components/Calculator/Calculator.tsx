import React from 'react';
import { Form, Input, Select, Row, Col, Button } from 'antd';

const { Option } = Select;

const Calculator: React.FC = () => {
  const handleFormSubmit = (values: any) => {
    // Aqui você pode realizar os cálculos com os valores inseridos pelo usuário
    // e exibir os resultados conforme necessário.
    console.log('Valores do formulário:', values);
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
    </Form>
  );
};

export default Calculator;
