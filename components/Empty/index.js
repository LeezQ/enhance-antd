import React from 'react';
import styled from 'styled-components';
const Content = styled.div `
  text-align: center;
`;
const Img = styled.img `
  width: 200px;
`;
const Extra = styled.h3 `
  margin-top: 16px;
`;
export default function Empty(props) {
    return (React.createElement(Content, null,
        React.createElement(Img, { src: "https://img.alicdn.com/tfs/TB1WNNxjBHH8KJjy0FbXXcqlpXa-780-780.png", alt: "empty" }),
        React.createElement("div", null, props.extra && React.createElement(Extra, null, props.extra))));
}
