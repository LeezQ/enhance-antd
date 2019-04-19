import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { Button } from 'antd';

import TitleBar from './index';

class Demo extends Component {
  render() {
    return (
      <>
        <TitleBar
          left="基本信息"
          right={
            <div>
              <Button type="primary">操作</Button>
              <Button>编辑</Button>
            </div>
          }
          borderStyle="solid"
        />
      </>
    );
  }
}

storiesOf('TitleBar', module).add('标题栏', () => <Demo />);
