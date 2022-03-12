import React, {Component} from 'react';
import Item from '../Item/index'
import './index.css'
import PropTypes from "prop-types";

export default class List extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired
    }

    render() {
        const {todos, updateTodo, deleteTodo, checkAllTodo} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map((todo) => {
                        return <Item key={todo.id} {...todo}
                                     updateTodao={updateTodo}
                                     deleteTodo={deleteTodo}
                        />
                    })
                }
            </ul>
        );
    }
}


