import React, {Component} from "react";
import Header from './components/Header'
import List from "./components/List";
import Footer from "./components/Footer";
import './App.css'


// 创建并暴露组件
export default class App extends Component {
    // 初始化状态
    state = {
        todos: [
            {id: '1001', name: '吃饭', done: false},
            {id: '1002', name: '看书', done: true},
            {id: '1003', name: '敲代码', done: false},
            {id: '1004', name: '逛街', done: true},
        ]
    }
    // addTodo = (todoObj) => {
    //     const {todos} = this.state
    //     todos.push({id:('100'+(todos.length+1)),name:todoObj,done:false});
    //     this.setState({todos:todos})
    // }
    addTodo = (todoObj) => {
        const {todos} = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({todos: newTodos})
    }

    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos}/>
                    <Footer/>
                </div>
            </div>
        );
    }
}
