import React from 'react';

import { Button } from 'antd';
import Buttons from './Button';
import Icon from './Icon';

const pageNames = [
  '按钮',
  '图标',
];
const Pages = [
  Buttons,
  Icon,
];

class PageSwitch extends React.Component {
  state = {
    pageNum: 0
  };

  handleNavClick = (index)=> {
    if( index !== this.state.pageNum ) {
      this.setState({
        pageNum: index
      });
    }
  }

  render() {
    const pageNum = this.state.pageNum;
    const Page = Pages[pageNum];
    const Navs = pageNames.map((item, index) => (
      <Button key={index} 
        type={ pageNum === index ? 'primary' : '' }
        onClick={ ()=>this.handleNavClick(index) }
        >{ item }</Button>
    ));
    return (
      <div>
        <div className="page-nav">
          { Navs }
        </div>
        <Page />
      </div>
    );
  }
} 

export default PageSwitch;
