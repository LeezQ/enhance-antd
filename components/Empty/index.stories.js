import React from 'react';
import { Button } from 'antd';
import { storiesOf } from '@storybook/react';
import Empty from './index';
storiesOf('Empty', module).add('空白演示', () => (React.createElement(Empty, { extra: React.createElement(React.Fragment, null,
        "\u6682\u65E0\u6570\u636E ",
        React.createElement(Button, { type: "primary" }, "\u521B\u5EFA")) })));
