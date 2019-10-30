import React from 'react';

import { Button, Menu, Dropdown, Icon } from 'antd';

export default function() {
  const menu = (
    <Menu>
      <Menu.Item key="1">1st item</Menu.Item>
      <Menu.Item key="2">2st item</Menu.Item>
      <Menu.Item key="3">3st item</Menu.Item>
    </Menu>
  );
  return (
    <div className="section">
      <h3>多个按钮组合</h3>
      <Button type="primary">Primary</Button>
      <Button>Secondary</Button>
      <Dropdown overlay={menu}>
        <Button>Actions <Icon type="down" /></Button>
      </Dropdown>
    </div>
  );
}
