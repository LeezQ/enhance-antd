import React, { Component } from 'react';
import { Table } from 'antd';

import { storiesOf } from '@storybook/react';

import EnhanceTable from './index';

const requestMethod = params =>
  new Promise(resolve => {
    return setTimeout(() => {
      resolve({
        success: true,
        data: [
          {
            recvDeptName: 'nihao',
            projId: '111',
            matName: 'matername',
            key: 1,
          },
          {
            recvDeptName: 'nihao',
            projId: '222',
            matName: 'matername',
            key: 2,
          },
          {
            recvDeptName: 'nihao',
            projId: '333',
            matName: 'matername',
            key: 3,
          },
        ],
      });
    }, 2000);
  });

class Demo extends Component {
  get columns() {
    return [
      {
        title: '办件部门',
        dataIndex: 'recvDeptName',
        key: 'recvDeptName',
      },
      {
        title: '申报号',
        dataIndex: 'projId',
        key: 'projId',
      },
      {
        title: '事项名称',
        dataIndex: 'matName',
        key: 'matName',
      },
    ];
  }

  get data() {
    return [
      {
        recvDeptName: 'nihao',
        projId: '123123',
        matName: 'matername',
      },
    ];
  }

  render() {
    return (
      <EnhanceTable
        columns={this.columns}
        {...this.props}
        pagination={{ pageSize: 2 }}
        requestMethod={requestMethod}
        onComplete={params => console.log(params)}
      />
    );
  }
}

storiesOf('EnhanceTable', module).add('表格', () => <Demo />);
