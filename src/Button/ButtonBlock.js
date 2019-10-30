import React from 'react';

import { Button } from 'antd';

export default function() {
  return (
    <div className="section">
      <Button type="primary" block>Primary</Button>
      <Button block>Default</Button>
      <Button type="dashed" block>Dashed</Button>
      <Button type="danger" block>Danger</Button>
      <Button type="link" block>Link</Button>
    </div>
  );
}
