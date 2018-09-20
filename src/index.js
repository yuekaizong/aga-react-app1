import React from 'react';
import ReactDOM, {render} from 'react-dom';
import './index.css';
import 'whatwg-fetch'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import DropDown from './components/DropDown';
import AgaLink from './components/AgaLink'
import Timer from './components/Timer'
import AgaView from './components/AgaView'

// ReactDOM.render(<App />, document.getElementById('root'));

class HelloMessage extends React.Component {
    render() {
        return (
            <div>Hello {this.props.name}</div>
        )
    }
}

class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {items: [], text: '', name: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.peek = this.peek.bind(this);
        // this.onClick = this.onClick.bind(this);
    }

    render() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items}/>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange} value={this.state.text}/>
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
                <button onClick={this.peek}>test</button>
            </div>
        );
    }

    handleChange(e) {
        this.setState({text: e.target.value});
        console.log(this.state);
    }

    peek() {
        console.log(this)
    }


    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };

        this.setState(preState => ({
            items: preState.items.concat(newItem),
            text: ''
        }));

    }
}

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.items.map(item => (
                        <li key={item.id}>{item.text}</li>
                    ))
                }
            </ul>
        );
    }
}

function Clock(props) {
    return (
        <div>
            <h1>Hello World</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

function tick() {
    ReactDOM.render(
        <Clock date={new Date()}/>,
        document.getElementById('root')
    );
}

function Nickname(props) {
    return <h1>小名：{props.nickname}</h1>
}

function Url(props) {
    return <a>{props.url}</a>
}

function HelloMessage2(props) {
    return <h1>Hello function {props.name}!</h1>
}

class Name extends React.Component {

    constructor() {
        super();
        this.state = {
            navigator: {
                appVersion: window.navigator.appVersion,
                appCodeName: window.navigator.appCodeName,
                javaEnabled: window.navigator.javaEnabled(),
                userAgent: window.navigator.userAgent,
            },
            location: {
                pathname: window.location.pathname,
                host: window.location.host,
                port: window.location.port,
            }
        }
    }

    render() {
        return (<div>
            {this.state.navigator.appVersion}<br/>
            {this.state.navigator.appCodeName}<br/>
            {this.state.navigator.javaEnabled}<br/>
            {this.state.navigator.userAgent}<br/>
            {this.state.location.pathname}<br/>
            {this.state.location.host}<br/>
            {this.state.location.port}<br/>
        </div> )
    }
}

class Link extends React.Component {
    render() {
        return (<a href={this.props.site}>
            {this.props.site}
        </a>);
    }
}

class WebSite extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '王侯将相宁有种乎！',
            site: 'https://www.kaizone.com'
        }
    }

    render() {
        return (
            <div>
                <p>hhh</p>
            </div>
        )
    }
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => (
            {
                isToggleOn: !prevState.isToggleOn
            }
        ));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

class LoginButton extends React.Component {
    handleClick  (){
        console.log('this is :', this);
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    属性初始化器来绑定行数(登录)
                </button>
            </div>

        )
    }
}

class LogoutButton extends React.Component {
    handleClick() {
        console.log('this is:', this);
    }

    render() {
        return (
            <button onClick={(e) => this.handleClick(e)}>
                回调函数中使用箭头函数(登出)
            </button>
        )
    }
}


function UserGreeting(props) {
    return <h1>欢迎回来！</h1>
}

function GuestGreeting(props) {
    return <h1>请先注册。</h1>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting/>
    }
    return <GuestGreeting/>
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>;
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        );
    }
}


const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) => <li>{numbers}</li>);

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => <li key={number.toString()}>{number}</li>);
    return (
        <ul>{listItems}</ul>
    )
}

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm'}
]

function Blog(props) {
    const sidebar = (
        <ul>
            {
                props.posts.map((post) =>
                    <li key={post.id}>
                        {post.title}
                    </li>
                )
            }
        </ul>
    )
    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    )
    return (
        <div>
            {sidebar}
            <hr/>
            {content}
        </div>
    )
}

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {opacity: 1.0};
    }

    componentDidMount() {
        this.timer = setInterval(function () {
            var opacity = this.state.opacity;
            opacity -= .05;
            if (opacity < 0.1) {
                opacity = 1.0;
            }
            this.setState({
                opacity: opacity
            });
        }.bind(this), 100);
    }

    render() {
        return (
            <div style={{opacity: this.state.opacity}}>
                Hello {this.props.name}
                Opacity {this.state.opacity}
            </div>
        )
    }
}

class Content extends React.Component {
    componentWillMount() {
        console.log("Component Will Mount!")
    }

    componentDidMount() {
        console.log('Component Did Mount!')
    }

    componentWillReceiveProps(newProps) {
        console.log('Component Will Receive Props!')
    }

    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Component Will Update!')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component Did Update!')
    }

    componentWillUnmount() {
        console.log('Component Will UnMount!')
    }

    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        )
    }
}

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: 0};
        this.setNewNumber = this.setNewNumber.bind(this);
    }

    setNewNumber() {
        this.setState({data: this.state.data + 1});
    }

    render() {
        return (
            <div>
                <button onClick={this.setNewNumber}> Increment</button>
                <Content myNumber={this.state.date}></Content>
            </div>
        )
    }
}

class UserGist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username: '', lastGistUrl: ''};
        this.getDate = this.getDate.bind(this);
    }

    componentDidMount() {
        // this.serverRequst = $.get(this.props.source, function (result) {
        //     var lastGist = result[0];
        //     this.setState({
        //         username : lastGist.owner.login,
        //         lastGistUrl : lastGist.html_url
        //     });
        // }.bind(this));
        // fetch(this.props.source).then(response=>response.json()).then(data=>alert(data.toString()));
    }

    getDate() {
        var url = this.props.source; // 接口url
        fetch(url).then(
            response => (response.json())
        ).then(json => {
            json.map(
                item =>
                    console.log(item.url, item.comments)
            )
        })
    }

    componentWillUnmount() {
        this.serverRequst.abort();
    }

    render() {
        return (
            <div>
                {this.state.username} 用户最新的Gist 共享地址：
                <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
                <button onClick={this.getDate}>fatch 数据</button>
            </div>
        )
    }
}

class Editext extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Hello Editext'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        var value = this.state.value;
        return <div>
            <input type="text" value={value} onChange={this.handleChange}/>
            <h4>{value}</h4>
        </div>
    }
}

class UpdateStateInput extends React.Component {
    render() {
        return <div>
            <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp}/>
            <h4>{this.props.myDataProp}</h4>
        </div>
    }
}

class TipsEditText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'Tips EditText'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        var value = this.state.value;
        return <div>
            <UpdateStateInput myDataProp={value} updateStateProp={this.handleChange}/>
        </div>
    }
}

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is:' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="gg">Google</option>
                        <option value="rn">Runoob</option>
                        <option value="tb">Taobao</option>
                        <option value="fb">Facebook</option>
                    </select>
                </label>
                <input type="submit" value="提交"/>
            </form>
        )
    }
}

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    是否离开：
                    <input name="isGoing" type="checkbox" checked={this.state.isGoing}
                           onChange={this.handleInputChange}/>
                </label>
                <br/>
                <label>
                    访客数：
                    <input name="numberOfGuests" type="number" value={this.state.numberOfGuests}
                           onChange={this.handleInputChange}/>
                </label>
            </form>
        )
    }
}

function Panel() {
    return (
        <div>
            {/*<Reservation/>*/}
            {/*<FlavorForm/>*/}
            {/*<TipsEditText/>*/}
            {/*<Editext/>*/}
            {/*<Hello name="world"/>*/}
            {/*<Blog posts={posts}/>*/}
            {/*<Button/>*/}
            {/*<hr/>*/}
            {/*<UserGist source="https://api.github.com/users/octocat/gists"/>*/}
            <DropDown/><br/>
            <AgaLink/><br/>
            <Timer/><br/>
            <WebSite/><br/>
            <Name name="标哥"/><br/>
            <AgaView/><br/>
            {/*<Url url="http://www.biaoge.com"/>*/}
            {/*<Nickname nickname="Biaoge"/>*/}
            {/*<TodoApp/>*/}
            {/*<Timer/>*/}
            {/*<Toggle/>*/}
            {/*<LoginControl/>*/}
            {/*<ul>{listItems}</ul>*/}
            {/*<NumberList numbers={numbers}/>*/}
        </div>
    );
}

const element = <HelloMessage2 name="Runoob"/>

// var txt = "浏览器代号：" + navigator.appCodeName + "\n";
// txt += "浏览器名称:" + navigator.appName + "\n";
// txt += "浏览器版本:" + navigator.appVersion + "\n";
// txt += "启用Cookies:" + navigator.cookieEnabled + "\n";
// txt += "硬件平台:" + navigator.platform + "\n";
// txt += "用户代理:" + navigator.userAgent + "\n";
// txt += "用户代理语言:" + navigator.systemLanguage + "\n";
// txt += "cookie" + document.cookie + "\n";


// ReactDOM.render(<TodoApp name="Aga"/>, document.getElementById('root'));
ReactDOM.render(<Panel/>, document.getElementById('root'));
registerServiceWorker();
