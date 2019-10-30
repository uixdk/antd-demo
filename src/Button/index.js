import React from 'react';

import ButtonBasic from './ButtonBasic';
import ButtonSize from './ButtonSize';
import ButtonLoading from './ButtonLoading';
import ButtonGroup from './ButtonGroup';
import ButtonBlock from './ButtonBlock';
import ButtonIcon from './ButtonIcon';
import ButtonDisable from './ButtonDisable';
import ButtonMenu from './ButtonMenu';
import ButtonGhost from './ButtonGhost';

export default function() {
  return (
    <div>
      <h2>Button 组件</h2>
      <ButtonBasic />
      <ButtonSize />
      <ButtonLoading />
      <ButtonGroup />
      <ButtonBlock />
      <ButtonIcon />
      <ButtonDisable />
      <ButtonMenu />
      <ButtonGhost />
    </div>
  );
}
