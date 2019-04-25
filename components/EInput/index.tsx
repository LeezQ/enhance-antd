import React, { useEffect } from 'react';
// import { useState } from 'react';
import { Input } from 'antd';

interface IProps {}

const EInput = (props: IProps) => {
  const initData = async () => {
    return new Promise(resolve => {
      resolve(123);
    });
  };

  useEffect(() => {
    initData();
  }, []);

  return <Input />;
};

export default EInput;
