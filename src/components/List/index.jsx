import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import './index.css'

class List extends Component {
    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: ''
    }

    // 组件挂载之后就进行订阅消息
    componentDidMount() {
        this.token = PubSub.subscribe('updateState', (msg, stateObj) => {
            this.setState(stateObj)
        })
    }

    // 组件卸载之前取消订阅
    componentWillUnmount() {
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {users, isFirst, isLoading, err} = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2>输入关键字随后点击搜索</h2> :
                        isLoading ? <h2>loading.....</h2> :
                            err ? <h1 style={{color: "red"}}>{err}</h1> :
                                users.map((userObj) => {
                                    return (
                                        <div key={userObj.id} className="card">
                                            <a rel="noreferrer" href={userObj.html_url} target="_blank">
                                                <img alt='head_portrait' src={userObj.avatar_url}
                                                     style={{width: '100px'}}/>
                                            </a>
                                            <p className="card-text">{userObj.login}</p>
                                        </div>
                                    )
                                })
                }
            </div>
        );
    }
}

export default List;