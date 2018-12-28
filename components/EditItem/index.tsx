import React, { PureComponent } from 'react';
import { Tooltip, Icon } from 'antd';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const IconV = styled(Icon)`
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

const DisplayContentWrap = styled.div`
  display: inline-block;
  align-items: center;
  line-height: 29px;

  ${props =>
    props.disabled &&
    `
    cursor: not-allowed;
    color: #999;

    * {
      pointer-events: none;
      color: #999 !important;
    }
  `};
`;

const EditContentWrap = styled.div`
  display: inline-block;
  line-height: 28px;
  white-space: nowrap;
`;

const EditIconWrap = styled.div`
  display: inline-block;
`;

class EditItem extends PureComponent<any, any> {
  public timer = null;

  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      copyMessage: '复制',
    };
  }

  onOk = () => {
    if (this.props.onOk) {
      this.props.onOk();
    } else {
      this.hide();
    }
  };

  hide = () => {
    this.setState({ isEdit: false });
  };

  onCancel = () => {
    this.setState({ isEdit: false });
  };

  onCopy = () => {
    if (this.timer) clearTimeout(this.timer);
    this.setState({ copyMessage: '复制成功' }, () => {
      this.timer = setTimeout(() => {
        this.setState({ copyMessage: '复制' });
      }, 600);
    });
  };

  render() {
    const {
      displayContent,
      editContent,
      showCopy = false,
      showEdit = false,
      style,
      disabled,
      copyText,
    } = this.props;
    const { isEdit } = this.state;
    return isEdit ? (
      <EditContentWrap style={style}>
        {editContent}
        <EditIconWrap mode="edit">
          <IconV type="edit" onClick={() => this.onOk()} />
          <IconV
            className="iconfont antdcloud-icon-guanbi"
            type="close"
            onClick={() => this.onCancel()}
          />
        </EditIconWrap>
      </EditContentWrap>
    ) : (
      <DisplayContentWrap disabled={disabled} style={style}>
        {displayContent}
        <EditIconWrap>
          {showEdit && (
            <Tooltip title={'编辑'}>
              <IconV type="edit" onClick={() => this.setState({ isEdit: true })} />
            </Tooltip>
          )}

          {showCopy && (
            <CopyToClipboard text={copyText || displayContent} onCopy={() => this.onCopy()}>
              <Tooltip title={this.state.copyMessage}>
                <IconV className="iconfont antdcloud-icon-fuzhi" />
              </Tooltip>
            </CopyToClipboard>
          )}
        </EditIconWrap>
      </DisplayContentWrap>
    );
  }
}

export default EditItem;
