import React from 'react';
import { configure, addDecorator } from '@storybook/react';

// 添加 antd 的样式
import 'antd/dist/antd.css';

const styles = {
  padding: '20px',
};
const CenterDecorator = storyFn => <div style={styles}>{storyFn()}</div>;
addDecorator(CenterDecorator);

// automatically import all files ending in *.stories.js
const req = require.context('../components', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
