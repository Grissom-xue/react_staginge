## 路由的基本使用

    1. 明确好页面中的导航区，展示区
    2. 导航区的a标签改为Link标签  <Link className="list-group-item active" to='/about'>About</Link>
    3. 展示区学Route标签进行路径的匹配 <Route path="/about" component={About}/>
    4. <App>的最外侧包裹一个<BrowserRouter>or<HashRouter>

## 路由组件与一般组件

    1. 写法不同：
        - 一般组件：<Demo/>
        - 路由组件：<Route path="/demo" component={Demo}/>
    2. 存放位置不同
        - 一般组件：components
        - 路由组件：pages
    3. 接收到的不同props不同：
        - 一般组件： 写组件标签时传递了什么就能收到什么
        - 路由组件： 接收到固定的三个属性【history，location，match】

## NavLink与封装NavLink

    - NavLink可以实现路由链接的高亮，通过activeClassName指定样式名
    - 标签体内容是一个特殊的标签属性
    - 通过this.props.children可以获取标签体内容 

## Switch的使用

    - 通常情况下path与components是一一对应的关系
    - Switch可以提高路由匹配的效率（单一匹配）

## 解决多级路径刷新页面样式丢失问题

    - public/index,html 中引入样式时不写./ 写 / （常用）
    - public/index,html 中引入样式时不写./ 写%PUBLIC_URL% （常用）
    - 使用HashRouter

## 路由的严格匹配与模糊匹配

    - 默认使用的是模糊匹配
    - 开启严格匹配 exact={true}
    - 严格匹配不要随便开启，需要再开，有时候开启会导致无法继续匹配二级路由

## Redirect的使用

    - 一般写在所有路由注册的最下方，当所有理由都无法匹配时，跳转到Redirect指定的路由
    -   <Route path="/about" component={About}/>
        {/*exact开启严格匹配*/}
        <Route exact path="/home" component={Home}/>
        {/*当所有路由都没有匹配上的时候 听从该规则*/}
        <Redirect to="/about"/>

## 嵌套路由

    - 注册子路由时候要写上父路由的path值
    - 路由的匹配是按照注册路由的顺序进行的

## 路由组件传递参数

    - params参数
        - 路由链接（携带参数）：<Link to='/demo/test/tom/18'>详情</Link>
        - 注册路由（声明接收）：<Route path='/demo/test/:name/:age' component={Test}>
        - 接收参数： const {name,age} = this.props.match.params
    - search参数
        - 路由链接（携带参数）：<Link to='/demo/test?name=tom&age=18'>详情</Link>
        - 注册路由（声明接收）：<Route path='/demo/test' component={Test}>
        - 接收参数： const {search} = this.props.location  
        - 取出的数据是urlencoded类型的字符串，需要借助queryString库进行解析 
    - state参数
        - 路由链接（携带参数）：<Link to={{path:'/demo/test',state:{name:'tom',age18'}}}>详情</Link>
        - 注册路由（声明接收）：<Route path='/demo/test' component={Test}>
        - 接收参数: this.props.location.state
        - 刷新可以保留住参数

## push与replace模式 在Link中添加属性 replace

## 编程式路由导航

    - 借助this.props.history对象上的API对操作路由跳转，前进，后退
    - this.props.history.push()
    - this.props.history.repalce()
    - this.props.history.goBack()
    - this.props.history.goForward()
    - this.props.history.go()

## withRouter 可以加工一般组件，让一般组件具备路由组件所特有的API，返回值是一个新的组件

## BrowserRouter与HashRouter的区别

1. 底层原理不同：
    1. BrowserRouter使用的是H5的history api 不兼容IE9以及一下
    2. HashRouter 使用的是URL的哈希值
2. URL的表现形式不同
    1. BrowserRouter 的路径中没有#
    2. HashRouter 的路径中带有#
3. 刷新后对路由state参数的影响
    1. BrowserRouter没有任何影响，因为state保存在history对象中
    2. HashRouter刷新后会导致路由state参数的丢失
4. HashRouter可以用于解决一些路径错误相关的问题