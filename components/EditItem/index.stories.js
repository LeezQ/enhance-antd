import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { Input } from 'antd';

import AcpEditItem from './index';

class Editale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: '我可以编辑的啊',
    };
    this.editItem = null;
  }

  show = num => {
    // 注意，在使用 this.editItem 之前，你得先定义 editItem，看上面的 static editItem = null; 然后需要在组件上设置 ref 引用
    this.editItem.hide();
  };

  setVal = val => {
    this.setState({
      val,
    });
  };

  render() {
    return (
      <AcpEditItem
        ref={editItem => (this.editItem = editItem)}
        displayContent={this.state.val}
        showEdit
        editContent={
          <Input
            defaultValue={this.state.val}
            onChange={e => {
              this.setVal(e.target.value);
            }}
          />
        }
        onOk={() => {
          this.show(123);
        }}
        style={{ width: 200 }}
      />
    );
  }
}

storiesOf('EditItem', module).add('编辑组件', () => <Editale />);
