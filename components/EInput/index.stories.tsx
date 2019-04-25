import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';

import EInput from './index';

class Demo extends Component {
  render() {
    return (
      <>
        <EInput />
      </>
    );
  }
}

storiesOf('EInput', module).add('Input', () => <Demo />);
