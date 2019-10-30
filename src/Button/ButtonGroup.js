import React from 'react';

import { Button, Icon } from 'antd';

export default function() {
  return (
    <div className="section">
      <h3>按钮组</h3>
      <h4>Basic</h4>
      <Button.Group>
        <Button>Cancle</Button>
        <Button>OK</Button>
      </Button.Group>
      &nbsp;&nbsp;
      <Button.Group>
        <Button disabled>L</Button>
        <Button disabled>M</Button>
        <Button disabled>R</Button>
      </Button.Group>
      &nbsp;&nbsp;
      <Button.Group>
        <Button>L</Button>
        <Button>M</Button>
        <Button>R</Button>
      </Button.Group>
      <br /> <br />
      <h4>With Icon</h4>
      <Button.Group>
        <Button type="primary">
          <Icon type="left" /> Go Back
        </Button>
        <Button type="primary">
          Go forward <Icon type="right" />
        </Button>
      </Button.Group>
      <br /> <br />
      <Button.Group>
        <Button type="primary" icon="cloud"></Button>
        <Button type="primary" icon="cloud-download"></Button>
      </Button.Group>
      &nbsp;&nbsp;
      <Button.Group>
        <Button type="primary" size="small" icon="cloud"></Button>
        <Button type="primary" size="small" icon="cloud-download"></Button>
      </Button.Group>
    </div>
  );
}
