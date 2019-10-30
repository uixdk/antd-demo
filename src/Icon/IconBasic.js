import React from 'react';

import { Icon } from 'antd';

export default function() {
  return (
    <div className="section icon-list">
      <h3>基本用法</h3>
      <Icon type="home" />
      <Icon type="setting" theme="filled" />
      <Icon type="smile" theme="outlined" />
      <Icon type="sync" spin />
      <Icon type="smile" rotate={180} />
      <Icon type="loading" />
    </div>
  );
}
