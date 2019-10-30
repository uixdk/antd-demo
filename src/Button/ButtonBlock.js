import React from 'react';

import { Button } from 'antd';

export default function() {
  return (
    <div className="section">
      <h3>Block 按钮</h3>
      <Button type="primary" block>Primary</Button>
      <Button block>Default</Button>
      <Button type="dashed" block>Dashed</Button>
      <Button type="danger" block>Danger</Button>
      <Button type="link" block>Link</Button>
    </div>
  );
}
