// App.tsx
import React from 'react';
import { Layout } from 'antd';
import CalculatorForm from './components/Calculator/CalculatorForm';
import Header from './components/Page/Header';
import Body from './components/Page/Body';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout className="layout">
      <Header />
      <Body>
        <Content style={{ minHeight: '280px' }}>
          <CalculatorForm />
        </Content>
      </Body>
    </Layout>
  );
};

export default App;