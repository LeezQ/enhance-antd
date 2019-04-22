import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';

import EDatePicker from './index';
import moment from 'moment';

class Demo extends Component {
  render() {
    return (
      <>
        <EDatePicker
          style={{ padding: 20, background: '#eee' }}
          defaultValue={[moment().subtract(7, 'days'), moment()]}
          onChange={(dates, dateStrings) => {
            console.log('values', dates, dateStrings);
          }}
        />
      </>
    );
  }
}

storiesOf('EDatePicker', module).add('日期选择', () => <Demo />);
