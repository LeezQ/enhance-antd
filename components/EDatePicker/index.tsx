import React, { CSSProperties, useState } from 'react';
import { DatePicker, Divider } from 'antd';
import moment, { Moment } from 'moment';
import styled from 'styled-components';

interface IProps {
  className?: string;
  style?: CSSProperties;
  defaultValue?: [Moment, Moment];
  onChange?(Moment, string): any;
}

const QuickSelect = styled.a`
  ${props =>
    props.current &&
    `
    color: #fff;
    background: #2596FF;
    border-radius: 2px;
    padding: 1px 2px;
  `}
`;

const format = 'YYYY-MM-DD';

const EDatePicker = (props: IProps) => {
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
    } else {
      return (
        start.format(format) === startDate.format(format) &&
        end.format(format) === endDate.format(format)
      );
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

  return (
    <div className={props.className} style={props.style}>
      <DatePicker.RangePicker
        value={[start, end]}
        onChange={dates => {
          onChange(dates);
        }}
      />
      <Divider type="vertical" />
      <QuickSelect
        current={isCurrent(last7days)}
        href="javascript:;"
        onClick={() => {
          onChange(last7days);
        }}
      >
        最近7天
      </QuickSelect>
      <Divider type="vertical" />
      <QuickSelect
        current={isCurrent(last30days)}
        href="javascript:;"
        onClick={() => {
          onChange(last30days);
        }}
      >
        最近30天
      </QuickSelect>
      <Divider type="vertical" />
      <QuickSelect
        current={isCurrent(lastMonthDays)}
        href="javascript:;"
        onClick={() => {
          onChange(lastMonthDays);
        }}
      >
        上个月
      </QuickSelect>
    </div>
  );
};

export default EDatePicker;
