// App.tsx
import React from 'react';
import { Layout } from 'antd';
import Calculator from './components/Calculator/Calculator';
import Header from './components/Page/Header';
import Body from './components/Page/Body';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout className="layout">
      <Header />
      <Body>
        <Content style={{ minHeight: '280px' }}>
          <Calculator />
        </Content>
      </Body>
    </Layout>
  );
};

export default App;