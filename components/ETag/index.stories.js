import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';

import ETag from './index';

class Demo extends Component {
  render() {
    return (
      <>
        <ETag type="process" text="进行中" />
        <ETag type="success" text="成功" />
        <ETag type="warning" text="警告" />
        <ETag type="fail" text="失败" />
        <ETag text="失效" />
        <ETag type="backup1" text="备用1" />
        <ETag type="backup2" text="备用2" />
      </>
    );
  }
}

storiesOf('ETag', module).add('标签', () => <Demo />);
