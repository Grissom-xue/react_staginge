import React, {Component} from "react";
import Header from './components/Header'
import List from "./components/List";
import Footer from "./components/Footer";
import './App.css'


// 创建并暴露组件
export default class App extends Component {
    //状态在哪里，操作状态的方法也在哪里
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

    // 用于更新一个TODO对象的Done属性
    updateTodo = (id, done) => {
        // 获取状态中的TODOs
        const {todos} = this.state
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) return {...todoObj, done};
            else return todoObj;
        })
        this.setState({todos: newTodos})
    }

    // 用于删除一个TODO对象
    deleteTodo = (id) => {
        const {todos} = this.state
        const newTodos = todos.filter((todoObj) => {
            //返回ID不等于指定要删除的那个对象
            return todoObj.id !== id
        })
        this.setState({todos: newTodos})
    }

    // 全选
    checkAllTodo = (done) => {
        const {todos} = this.state
        const newTodos = todos.map((todoObj) => {
            // return todoObj.done = true;
            return {...todoObj, done}
        })
        this.setState({todos: newTodos})
    }

    //清楚全部已完成
    clearAllDone = () => {
        const {todos} = this.state
        const newTodos = todos.filter((todoObj) => {
            return !todoObj.done
        })
        this.setState({todos: newTodos})
    }

    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    {/*回调函数往子类组件中传*/}
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer
                        todos={todos}
                        checkAllTodo={this.checkAllTodo}
                        clearAllDone={this.clearAllDone}
                    />
                </div>
            </div>
        );
    }
}
