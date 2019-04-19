import React from 'react';
import styled from 'styled-components';
import { Row, Tooltip } from 'antd';
const TitleBarWrap = styled.div `
  padding-bottom: 8px;
  line-height: 28px;

  ${props => !props.borderStyle &&
    `
    margin-bottom: 8px;
    `}

  ${props => props.onlyTitle &&
    `
    margin-bottom: 0;
    `}

    ${props => !props.onlyTitle &&
    props.borderStyle &&
    `
      padding-bottom: 16px;
      `}

  ${props => props.borderStyle &&
    `
      border-bottom: 1px ${props.borderStyle} #eee;
      margin-bottom: 16px;
    `};
`;
const Left = styled.div `
  float: left;

  > div {
    > * {
      margin-right: 8px;
    }
  }

  .ant-input-search > .ant-input-suffix > .ant-input-search-button {
    margin-right: 0 !important;
  }

  .ant-input-affix-wrapper {
    width: auto;
  }

  max-width: 96%;

  ${props => `
      ${props.width && `width: ${props.width}; max-width: ${props.width};`}
      ${props.overflow === 'ellipsis'
    ? `overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;`
    : ''}
    `};
`;
const Right = styled.div `
  float: right;

  > div {
    > * {
      margin-left: 8px;
    }
  }

  a {
    margin-left: 16px;
  }

  .ant-input-search > .ant-input-suffix > .ant-input-search-button {
    margin-left: 0 !important;
  }

  .ant-input-affix-wrapper {
    width: auto;
  }

  ${props => `
      ${props.width && `width: ${props.width}`};
    `};
`;
const Title = styled.span `
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-right: 8px;
`;
const TipText = styled.i `
  color: #999;
  font-size: 14px;
  float: right;
  margin-left: -4px;
`;
const TextContent = styled.div `
  // max-width: 270px;
`;
const EditBtn = styled.a `
  margin-left: 16px;
`;
const AdvanceWrap = styled.div `
  background: #f7f8fa;
  border: 1px solid #eee;
  padding: 24px 24px 0;
  border-radius: #eee;
  margin-bottom: 18px;

  ${props => !props.showAdvance &&
    `
    display: none;
  `};
`;
const SearchText = styled.span `
  color: #0366d6;
  cursor: pointer;
  margin-left: 8px;
`;
class AcpTitleBar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onEdit = () => {
            if (this.props.onEdit) {
                this.props.onEdit();
            }
        };
        this.showAdvance = expandAdvance => {
            this.setState(prevState => {
                if (this.props.showAdvance) {
                    this.props.showAdvance(expandAdvance);
                }
                return {
                    expandAdvance: expandAdvance,
                };
            });
        };
        this.state = {
            expandAdvance: props.expandAdvance || false,
        };
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.expandAdvance && nextProps.expandAdvance !== this.state.expandAdvance) {
            this.showAdvance(nextProps.expandAdvance);
        }
    }
    render() {
        const { borderStyle, children, title = null, left = null, right = null, leftWidth = 'auto', rightWidth = 'auto', showEdit = false, editMode, bgColor, overflow, expandAdvance, tipText = null, advanceContent, } = this.props;
        const shouldShow = showEdit && !editMode; // 是否显示编辑按钮判断
        const onlyTitle = !left && !right;
        return (React.createElement(TitleBarWrap, { bgColor: bgColor, borderStyle: borderStyle, onlyTitle: onlyTitle, className: "__acp_titlebar" },
            advanceContent && this.state.expandAdvance && (React.createElement(AdvanceWrap, { showAdvance: this.state.expandAdvance }, advanceContent)),
            React.createElement(Row, { type: "flex", justify: "space-between" },
                React.createElement(Left, { width: leftWidth, overflow: overflow },
                    title && (React.createElement(Title, null,
                        title,
                        tipText && (React.createElement(Tooltip, { title: React.createElement(TextContent, null, tipText) },
                            React.createElement(TipText, { className: "iconfont antdcloud-icon-xinxi-fill" }))))),
                    left,
                    shouldShow && (React.createElement(EditBtn, { href: "javascript:;", onClick: () => {
                            this.onEdit();
                        } }, "\u7F16\u8F91"))),
                React.createElement(Right, { width: rightWidth },
                    !this.state.expandAdvance && right,
                    advanceContent &&
                        !expandAdvance &&
                        (this.state.expandAdvance ? (React.createElement(SearchText, { onClick: () => {
                                this.showAdvance(false);
                            } }, "\u7B80\u6613\u641C\u7D22")) : (React.createElement(SearchText, { onClick: () => {
                                this.showAdvance(true);
                            } }, "\u9AD8\u7EA7\u641C\u7D22")))),
                children)));
    }
}
export default AcpTitleBar;
