import React from 'react';

import { Icon } from 'antd';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

export default function() {
  return (
    <div className="section icon-list">
      <h3>使用 iconfont.cn</h3>
      <IconFont type="icon-tuichu" />
      <IconFont type="icon-facebook" />
      <IconFont type="icon-twitter" />
    </div>
  );
}
