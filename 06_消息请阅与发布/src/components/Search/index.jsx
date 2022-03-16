import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import axios from "axios";

class Search extends Component {
    getUsers = () => {

        // 获取用户输入
        const {keywordElement} = this
        PubSub.publish('updateState', {isFirst: false, isLoading: true})
        // 发起异步请求获取
        axios.get(`http://localhost:3000/api1/search/users?q=${keywordElement.value}`).then(
            response => {
                PubSub.publish('updateState', {users: response.data.items, isLoading: false})
            },
            error => {
                PubSub.publish('updateState', {err: error.message, isLoading: false})
            }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keywordElement = c} type="text" placeholder="输入用户名点击搜索"/>&nbsp;
                    <button onClick={this.getUsers}>搜索</button>
                </div>
            </section>
        );
    }
}

export default Search;