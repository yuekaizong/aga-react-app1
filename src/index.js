import React from 'react';
import ReactDOM, {render} from 'react-dom';
import './index.css';
import 'whatwg-fetch'
import registerServiceWorker from './registerServiceWorker';
import AgaLink from './components/AgaLink';


// ReactDOM.render(<AgaApp />, document.getElementById('root'));


class LoggerView extends React.Component {
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

function Panel() {
    return (
        <div>
            <AgaLink/><br/>
{/*            <DropDown/><br/>
            <Timer/><br/>
            <LoggerView name="标哥"/><br/>
            <AgaView/><br/>*/}
        </div>
    );
}

ReactDOM.render(<Panel/>, document.getElementById('root'));
registerServiceWorker();
