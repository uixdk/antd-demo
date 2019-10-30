import React from 'react';

import { Button } from 'antd';

export default function() {
  return (
    <div className="section">
      <h3>不可用状态</h3>
      <Button type="primary">Primary</Button>
      <Button type="primary" disabled>Primary(Disabled)</Button>
      <br /> <br />
      <Button>Default</Button>
      <Button disabled>Default(Disabled)</Button>
      <br /> <br />
      <Button type="dashed">Dashed</Button>
      <Button type="dashed" disabled>Dashed(Disabled)</Button>
      <br /> <br />
      <Button type="danger">Danger</Button>
      <Button type="danger" disabled>Danger(Disabled)</Button>
      <br /> <br />
      <Button type="link">Link</Button>
      <Button type="link" disabled>Link(Disabled)</Button>
      <br /> <br />
      <div style={{ padding: '8px', background: 'rgb(190, 200, 200)' }}>
        <Button ghost>Ghost</Button>
        <Button ghost disabled>Ghost(Disabled)</Button>
      </div>
    </div>
  );
}
