import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';

import Empty from './index';

storiesOf('Empty', module).add('空白演示', () => <Empty />);
