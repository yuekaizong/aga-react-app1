import React from 'react';
import ReactDOM, {render} from 'react-dom';
import './index.css';
import 'whatwg-fetch'
import registerServiceWorker from './registerServiceWorker';

import DropDown from './components/DropDown';
import AgaLink from './components/AgaLink';
import Timer from './components/Timer';
import AgaView from './components/AgaView';


// ReactDOM.render(<App />, document.getElementById('root'));


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
            <DropDown/><br/>
            <AgaLink/><br/>
            <Timer/><br/>
            <LoggerView name="标哥"/><br/>
            <AgaView/><br/>
        </div>
    );
}

ReactDOM.render(<Panel/>, document.getElementById('root'));
registerServiceWorker();
