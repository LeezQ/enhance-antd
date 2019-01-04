import React from 'react';
import { Table } from 'antd';

class EnhanceTable extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      loading: false,
    };
  }
  componentDidMount() {
    this.getData({});
  }

  getData = params => {
    this.setState(
      {
        loading: true,
      },
      async () => {
        const ret = await this.props.requestMethod(params);
        this.setState({
          dataSource: ret.data,
          loading: false,
        });
        this.props.onComplete(params);
      }
    );
  };

  render() {
    const newProps = {
      ...this.state,
      onChange: params => {
        this.getData(params);
      },
      pagination: {
        pageSize: 1,
        ...this.props.pagination,
      },
    };
    return <Table {...this.props} {...newProps} />;
  }
}
export default EnhanceTable;
