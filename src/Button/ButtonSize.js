import React from 'react';

import { Button, Radio, Icon } from 'antd';

class ButtonSize extends React.Component {
  state = {
    size: 'large'
  };

  handleSizeChagne = e => {
    this.setState({ size: e.target.value });
  }

  render() {
    const { size } = this.state;
    return (
      <div className="section">
        <h3>按钮尺寸</h3>
        <div>
          <Radio.Group value={size} onChange={this.handleSizeChagne}>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>
        </div>
        <br />
        <div className="button-demo">
          <Button type="primary" size={size}>Primary</Button>
          <Button type="default" size={size}>Default</Button>
          <Button type="dashed" size={size}>Dashed</Button>
          <Button type="danger" size={size}>Danger</Button>
          <Button type="link" size={size}>Link</Button>
        </div>
        <div className="button-demo">
          <Button type="primary" icon="download" size={size}></Button>
          <Button type="primary" shape="circle" icon="download" size={size}></Button>
          <Button type="primary" shape="round" icon="download" size={size}></Button>
          <Button type="primary" shape="round" icon="download" size={size}>Download</Button>
          <Button type="primary" icon="download" size={size}>Download</Button>
        </div>
        <div className="button-demo">
          <Button.Group size={size}>
            <Button type="primary">
              <Icon type="left" /> Backward
            </Button>
            <Button type="primary">
              Forward
              <Icon type="right" />
            </Button>
          </Button.Group>
        </div>
      </div>
    );
  }
}

export default ButtonSize;
