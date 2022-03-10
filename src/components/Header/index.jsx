import React, {Component} from 'react';
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {
    handleKeyUp = (event) => {
        const {key, target} = event
        const {addTodo} = this.props
        // 获取输入的内容值
        if (key !== "Enter") return

        // 添加的名字不能为空
        if (target.value.trim() === '') {
            alert('输入不能为空')
            return;
        }

        console.log(target.value)
        // 将获取的内容添加到父类的todos属性中，ID自增1，name取现在的值，done取false（如何从子类将数据添加到父类的state中去？？）
        // ***** 在父类给子类传一个回调函数，通过回调函数来把子类的数据返回给父类
        // addTodo(target.value)

        // 第二种写法：先创造一个新的TODO对象 然后传回去(id值生成用了第三方的库 nanoid 生成唯一的ID)
        const todo = {id: nanoid(), name: target.value, done: false}
        addTodo(todo)
    }

    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }
}
