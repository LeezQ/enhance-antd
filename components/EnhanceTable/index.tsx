import React from 'react';

const enhanceTable = (WrapComponent, config) =>
  class EnhanceComponent extends React.Component<any, any> {
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
          const ret = await config.requestMethod(params);
          this.setState({
            dataSource: ret.data,
            loading: false,
          });
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
        },
      };
      return <WrapComponent {...this.props} {...newProps} />;
    }
  };

export default enhanceTable;
