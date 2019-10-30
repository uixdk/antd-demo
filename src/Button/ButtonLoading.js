import React from 'react';

import {Button} from 'antd';

class ButtonLoading extends React.Component {
  state = {
    loading: false,
    iconLoading: false,
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };

  render() {
    return (
      <div className="section">
        <h3>Loading 按钮</h3>
        <div className="button-demo">
          <Button type="primary" loading>Loading</Button>
          <Button type="primary" size="small" loading>Loading</Button>
          <br />
          <Button type="primary" 
            loading={this.state.loading} 
            onClick={this.enterLoading}>Click me!</Button>

          <Button type="primary" 
            icon="poweroff"
            loading={this.state.iconLoading} 
            onClick={this.enterIconLoading}>Click me!</Button>

          <br />
          <Button type="primary" loading />
          <Button type="primary" shape="circle" loading></Button>
          <Button type="danger" shape="round" loading></Button>
        </div>
      </div>
    );
  }
}

export default ButtonLoading;
