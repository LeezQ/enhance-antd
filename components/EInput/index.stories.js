import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import EInput from './index';
class Demo extends Component {
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(EInput, null)));
    }
}
storiesOf('EInput', module).add('Input', () => React.createElement(Demo, null));
