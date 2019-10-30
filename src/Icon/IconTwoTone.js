import React from 'react';

import { Icon } from 'antd';

export default function() {
  return (
    <div className="section">
      <h3>多色图标</h3>
      <Icon type="smile" style={{ fontSize: '32px' }} width="40" theme="twoTone" />
      <Icon type="heart" style={{ fontSize: '32px' }} theme="twoTone" twoToneColor="#eb2f96" />
      <Icon type="check-circle" style={{ fontSize: '32px' }} theme="twoTone" twoToneColor="#52c41a" />
    </div>
  );
}
