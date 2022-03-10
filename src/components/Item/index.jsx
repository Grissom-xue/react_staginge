import React, {Component} from 'react';
import './index.css'

export default class Item extends Component {

    state = {mouse: false}
    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }
    handleCheck = (id) => {
        return (event) => {
            console.log(id, event.target.checked)
        }
    }


    render() {
        const {id, name, done} = this.props
        const {mouse} = this.state
        return (
            <div>
                {/*
                    当onMouseEnter或者onMouseLeave 触发的时候，会执行一个函数、 通过这个函数我们把当前鼠标的状态存在state中
                    然后通过state中的状态我们可以做一下判断，当鼠标在上面的时候执行一下变色的操作
                */}
                <li style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)}
                    onMouseLeave={this.handleMouse(false)}>
                    <label>
                        {/*defaultChecked 表示默认勾选的 后面可以进行修改的,当事件更改的是该标签本身的属性时，就可以使用event*/}
                        <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)}/>
                        <span>{name}</span>
                    </label>
                    <button className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}>删除</button>
                </li>
            </div>
        );
    }
}
