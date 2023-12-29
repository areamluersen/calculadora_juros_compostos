import React from 'react';
import { Layout, Menu } from 'antd';
import Item from 'antd/es/list/Item';
import { FundOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  return (
    <AntHeader style={{ display: 'flex' }}>
      <div style={{ width: 32 }} ><FundOutlined
        style={{ backgroundColor: 'aliceblue' }} /></div>
      <Menu theme="dark" mode="horizontal">
        <Item>Juros Compostos em investimentos</Item>
      </Menu>
    </AntHeader>
  );
};

export default Header;
