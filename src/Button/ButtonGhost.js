import React from 'react';

import { Button } from 'antd';

export default function() {
  return (
    <div className="section button-demo">
      <h3>幽灵按钮</h3>
      <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
        <Button type="primary" ghost>Primary</Button>
        <Button ghost>Default</Button>
        <Button type="dashed" ghost>Dashed</Button>
        <Button type="danger" ghost>Danger</Button>
        <Button type="link" ghost>Link</Button>
      </div>
    </div>
  );
}
