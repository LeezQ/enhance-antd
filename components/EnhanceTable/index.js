var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React from 'react';
import { Table } from 'antd';
class EnhanceTable extends React.Component {
    constructor(props) {
        super(props);
        this.getData = params => {
            this.setState({
                loading: true,
            }, () => __awaiter(this, void 0, void 0, function* () {
                const ret = yield this.props.requestMethod(params);
                this.setState({
                    dataSource: ret.data,
                    loading: false,
                });
                this.props.onComplete(params);
            }));
        };
        this.state = {
            dataSource: [],
            loading: false,
        };
    }
    componentDidMount() {
        this.getData({});
    }
    render() {
        const newProps = Object.assign({}, this.state, { onChange: params => {
                this.getData(params);
            }, pagination: Object.assign({ pageSize: 1 }, this.props.pagination) });
        return React.createElement(Table, Object.assign({}, this.props, newProps));
    }
}
export default EnhanceTable;
