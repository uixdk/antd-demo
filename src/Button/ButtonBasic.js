import React from 'react';
import { Button } from 'antd';
import './button.css'

export default function() {
  return (
    <div className="section button-demo">
      <h3>基本使用</h3>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
      <Button type="link">Link</Button>
    </div>
  );
}
