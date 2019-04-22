import React from 'react';
import { useState } from 'react';
import { DatePicker, Divider } from 'antd';
import moment from 'moment';
import styled from 'styled-components';
const QuickSelect = styled.a `
  ${props => props.current &&
    `
    color: #fff;
    background: #2596FF;
    border-radius: 2px;
    padding: 1px 2px;
  `}
`;
const format = 'YYYY-MM-DD';
const EDatePicker = (props) => {
    const [defaultStart, defaultEnd] = props.defaultValue || [undefined, moment()];
    const [dateRange, setDateRange] = useState([defaultStart, defaultEnd]);
    const [start, end] = dateRange;
    const onChange = dates => {
        setDateRange(dates);
        const [start, end] = dates;
        props.onChange && props.onChange(dates, [start.format(format), end.format(format)]);
    };
    const isCurrent = dates => {
        const [startDate, endDate] = dates;
        if (!start || !end) {
            return false;
        }
        else {
            return (start.format(format) === startDate.format(format) &&
                end.format(format) === endDate.format(format));
        }
    };
    const last7days = [moment().subtract(7, 'days'), moment()];
    const last30days = [moment().subtract(30, 'days'), moment()];
    const lastMonthDays = [
        moment()
            .month(moment().month() - 1)
            .startOf('month'),
        moment()
            .month(moment().month() - 1)
            .endOf('month'),
    ];
    return (React.createElement("div", { className: props.className, style: props.style },
        React.createElement(DatePicker.RangePicker, { value: [start, end], onChange: dates => {
                onChange(dates);
            } }),
        React.createElement(Divider, { type: "vertical" }),
        React.createElement(QuickSelect, { current: isCurrent(last7days), href: "javascript:;", onClick: () => {
                onChange(last7days);
            } }, "\u6700\u8FD17\u5929"),
        React.createElement(Divider, { type: "vertical" }),
        React.createElement(QuickSelect, { current: isCurrent(last30days), href: "javascript:;", onClick: () => {
                onChange(last30days);
            } }, "\u6700\u8FD130\u5929"),
        React.createElement(Divider, { type: "vertical" }),
        React.createElement(QuickSelect, { current: isCurrent(lastMonthDays), href: "javascript:;", onClick: () => {
                onChange(lastMonthDays);
            } }, "\u4E0A\u4E2A\u6708")));
};
export default EDatePicker;
