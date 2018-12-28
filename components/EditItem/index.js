import React, { PureComponent } from 'react';
import { Tooltip, Icon } from 'antd';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const IconV = styled(Icon) `
  margin-left: 8px;
  ${props => {
    return props.type !== 'close'
        ? `
        color: #5389f5;
        `
        : `
        color: rgba(0,0,0,0.43);
        `;
}} font-size: 14px !important;

  &:hover {
    color: #5389f5;
  }
`;
const DisplayContentWrap = styled.div `
  display: inline-block;
  align-items: center;
  line-height: 29px;

  ${props => props.disabled &&
    `
    cursor: not-allowed;
    color: #999;

    * {
      pointer-events: none;
      color: #999 !important;
    }
  `};
`;
const EditContentWrap = styled.div `
  display: inline-block;
  line-height: 28px;
  white-space: nowrap;
`;
const EditIconWrap = styled.div `
  display: inline-block;
`;
class EditItem extends PureComponent {
    constructor(props) {
        super(props);
        this.timer = null;
        this.onOk = () => {
            if (this.props.onOk) {
                this.props.onOk();
            }
            else {
                this.hide();
            }
        };
        this.hide = () => {
            this.setState({ isEdit: false });
        };
        this.onCancel = () => {
            this.setState({ isEdit: false });
        };
        this.onCopy = () => {
            if (this.timer)
                clearTimeout(this.timer);
            this.setState({ copyMessage: '复制成功' }, () => {
                this.timer = setTimeout(() => {
                    this.setState({ copyMessage: '复制' });
                }, 600);
            });
        };
        this.state = {
            isEdit: false,
            copyMessage: '复制',
        };
    }
    render() {
        const { displayContent, editContent, showCopy = false, showEdit = false, style, disabled, copyText, } = this.props;
        const { isEdit } = this.state;
        return isEdit ? (React.createElement(EditContentWrap, { style: style },
            editContent,
            React.createElement(EditIconWrap, { mode: "edit" },
                React.createElement(IconV, { type: "edit", onClick: () => this.onOk() }),
                React.createElement(IconV, { className: "iconfont antdcloud-icon-guanbi", type: "close", onClick: () => this.onCancel() })))) : (React.createElement(DisplayContentWrap, { disabled: disabled, style: style },
            displayContent,
            React.createElement(EditIconWrap, null,
                showEdit && (React.createElement(Tooltip, { title: '编辑' },
                    React.createElement(IconV, { type: "edit", onClick: () => this.setState({ isEdit: true }) }))),
                showCopy && (React.createElement(CopyToClipboard, { text: copyText || displayContent, onCopy: () => this.onCopy() },
                    React.createElement(Tooltip, { title: this.state.copyMessage },
                        React.createElement(IconV, { className: "iconfont antdcloud-icon-fuzhi" })))))));
    }
}
export default EditItem;
