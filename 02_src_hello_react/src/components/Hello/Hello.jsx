import React, {Component} from "react";
import './Hello.css'

// 创建并暴露组件
export default class Hello extends Component {
    render() {
        return (
            <h1 className="title">Hello react!</h1>
        );
    }

}