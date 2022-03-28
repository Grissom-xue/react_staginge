import React, {Component} from "react";
import {Button} from 'antd';
import 'antd/dist/antd.css'


// 创建并暴露组件
export default class App extends Component {

    render() {
        return (
            <div>
                <Button type="primary">Primary Button</Button>
            </div>
        );
    }
}