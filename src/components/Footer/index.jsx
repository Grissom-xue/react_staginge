import React, {Component} from "react";
import './index.css'

export default class Index extends Component {
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }
    handleClearAllDone = () => {
        this.props.clearAllDone()
    }

    render() {
        const {todos} = this.props
        const finishedTodos = todos.filter((todoObj) => {
            return todoObj.done === true
        }).length

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll}
                           checked={todos.length === finishedTodos && todos.length !== 0}/>
                </label>
                <span>
                  <span>已完成{finishedTodos}</span> / 全部{todos.length}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
}

