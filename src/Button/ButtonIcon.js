import React from 'react';
import { Button } from 'antd';

export default function() {
  return (
    <div className="section">
      <h3>图标按钮</h3>
      <Button type="primary" shape="circle" icon="search"></Button>
      <Button type="primary" shape="circle">A</Button>
      <Button type="primary" icon="search">Search</Button>
      <Button shape="circle" icon="search"></Button>
      <Button icon="search">Search</Button>
      <br /> <br />
      <Button shape="circle" icon="search"></Button>
      <Button icon="search">Search</Button>
      <Button type="dashed" shape="circle" icon="search"></Button>
      <Button type="dashed" icon="search">Search</Button>
    </div>
  );
}
