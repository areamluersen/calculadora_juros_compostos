import React from 'react';
import { Form, Input, Select, Row, Col, Button } from 'antd';

const { Option } = Select;

const Calculator: React.FC = () => {
  const handleFormSubmit = () => {
    // Aqui você pode realizar os cálculos com os valores inseridos pelo usuário
    // e exibir os resultados conforme necessário.
    console.log('Valores do formulário:');
  };

  return (
    <Form
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={handleFormSubmit}
      initialValues={{
        initialValue: 0,
        monthlyContribution: 0,
        interestRate: 0,
        period: 'monthly',
      }}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Valor Inicial" name="initialValue">
            <Input type="number" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Aporte Mensal" name="monthlyContribution">
            <Input type="number" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Juros" name="interestRate" initialValue={0}>
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
        <Col span={12}>
          <Form.Item label="Período" name="period" initialValue={0}>
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
      </Row>
      <Row>
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
