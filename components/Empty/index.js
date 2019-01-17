import React from 'react';
export default function Empty(props) {
    return (React.createElement("div", { className: "exception-content" },
        React.createElement("img", { src: "https://img.alicdn.com/tfs/TB1WNNxjBHH8KJjy0FbXXcqlpXa-780-780.png", className: "imgException", alt: "empty" }),
        React.createElement("div", null,
            React.createElement("h3", { className: "title" }, "\u9875\u9762\u6682\u65E0\u5185\u5BB9"),
            React.createElement("p", { className: "description" }, "\u62B1\u6B49\uFF0C\u9875\u9762\u6682\u65E0\u5185\u5BB9\uFF0C\u8BF7\u770B\u770B\u5176\u4ED6\u9875\u9762"))));
}
