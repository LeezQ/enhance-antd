import React from 'react';
import { Tag } from 'antd';
const ColorDefine = {
    fail: {
        bgColor: '#FFCCC7',
        textColor: '#F5222D',
    },
    warning: {
        bgColor: '#FFE7BA',
        textColor: '#FA8C16',
    },
    backup1: {
        bgColor: '#FFF1B8',
        textColor: '#FAAD14',
    },
    backup2: {
        bgColor: '#E4E2FA',
        textColor: '#7265E6',
    },
    success: {
        bgColor: '#D9F7BE',
        textColor: '#52C41A',
    },
    process: {
        bgColor: '#D2EAFB',
        textColor: '#5389f5',
    },
    default: {
        bgColor: '#E8E8E8',
        textColor: '#595959',
    },
};
const AcpTag = props => {
    const { type = 'default', text = '标签文字' } = props;
    return (React.createElement(Tag, { color: ColorDefine[type].bgColor },
        React.createElement("span", { style: { color: ColorDefine[type].textColor } }, text)));
};
export default AcpTag;
