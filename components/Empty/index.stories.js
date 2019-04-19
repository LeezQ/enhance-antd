import React, { Component } from 'react';
import { Button } from 'antd';

import { storiesOf } from '@storybook/react';

import Empty from './index';

storiesOf('Empty', module).add('空白演示', () => (
  <Empty
    extra={
      <>
        暂无数据 <Button type="primary">创建</Button>
      </>
    }
  />
));
