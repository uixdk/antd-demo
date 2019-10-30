import React from 'react';

import ButtonBasic from './ButtonBasic';
import ButtonSize from './ButtonSize';
import ButtonLoading from './ButtonLoading';
import ButtonGroup from './ButtonGroup';
import ButtonBlock from './ButtonBlock';

export default function() {
  return (
    <div>
      <h2>Button 组件</h2>
      <ButtonBasic />
      <ButtonSize />
      <ButtonLoading />
      <ButtonGroup />
      <ButtonBlock />
    </div>
  );
}
