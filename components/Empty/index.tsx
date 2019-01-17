import React from 'react';

export default function Empty(props) {
  return (
    <div className="exception-content">
      <img
        src="https://img.alicdn.com/tfs/TB1WNNxjBHH8KJjy0FbXXcqlpXa-780-780.png"
        className="imgException"
        alt="empty"
      />
      <div>
        <h3 className="title">页面暂无内容</h3>
        <p className="description">抱歉，页面暂无内容，请看看其他页面</p>
      </div>
    </div>
  );
}
