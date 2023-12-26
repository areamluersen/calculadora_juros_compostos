// Header.tsx
import React from 'react';
import { Layout, Menu } from 'antd';
import Item from 'antd/es/list/Item';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  return (
    <AntHeader>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal">
        <Item>Calculo de Juros Compostos</Item>
      </Menu>
    </AntHeader>
  );
};

export default Header;
