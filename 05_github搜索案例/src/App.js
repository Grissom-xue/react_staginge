import React, {Component} from "react";
import Search from "./components/Search";
import List from "./components/List";


// 创建并暴露组件
export default class App extends Component {
    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        err: ''
    }

    updateAppState = (stateObj) => {
        // 记得加{}
        this.setState(stateObj)
    }

    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List {...this.state}/>
            </div>
        );
    }
}


//
/** Q1:React 中如何引入整体的CSS框架？
 *  当我们需要使用完善的CSS框架的时候一般我们会在public中创建一个CSS的目录，然后将第三方的css框架放置到里面。 通过在整体的index.html中引入
 */

// 分析：我们要从search组件传入参数然后进行搜索，然后搜索出来的内容要展示在List组件中。 此时我们所拥有的技术只能通过父类组件共享数据。

// 所以首先可以明确是 在Search组件中 我们要获取输入框的内容。
// 问题2： 如何从input框中实时获取输入的文本内容？
// ref属性(ref={c=>this.自己定义的输入值的名字=c})
// 获取属性值 const {value} = this.自己定义的输入值的名字
// 然后给search按钮绑定单击事件，单击事件发送一个axios请求获取相应的返回值，然后返回值要返回给APP组件的users
// 问题3：如何解决跨域问题？
// 1. 服务器本身解决了跨域限制
// 2. react代理设置 setUpProxy.js（设置代理之后我们要把请求的地址变成自己的端口）
// 子组件获取到接口返回的数据 要交给父组件。此时我们要从父组件中传递一个方法给子组件用户保存返回的值
// 问题4：父组件中state的属性 要如何传给子组件？？？
// 父组件传 <List users={this.state.users}/> 子组件获取 this.pros