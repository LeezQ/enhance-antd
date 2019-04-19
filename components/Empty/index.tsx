import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  text-align: center;
`;

const Img = styled.img`
  width: 200px;
`;

const Extra = styled.h3`
  margin-top: 16px;
`;

interface IProps {
  extra?: React.ReactNode;
}

export default function Empty(props: IProps) {
  return (
    <Content>
      <Img
        src="https://img.alicdn.com/tfs/TB1WNNxjBHH8KJjy0FbXXcqlpXa-780-780.png"
        alt="empty"
      />
      <div>
        { props.extra && <Extra >{props.extra}</Extra>}
      </div>
    </Content>
  );
}
