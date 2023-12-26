// Body.tsx
import { ReactNode } from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const Body = ({ children }: { children: ReactNode }) => {
  return (
    <Content style={{ padding: '20px 30px' }}>
      {children}
    </Content>
  );
};

export default Body;
