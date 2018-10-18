import {WhiteSpace} from 'antd-mobile';
import React from 'react';
import './style.css'

const PlaceHolder = ({className = '', ...restProps}) => (
    <div className={`${className} placeholder`} {...restProps}>Block</div>
);

const WhiteSpaceExample = () => (
    <div>
        <WhiteSpace size="xs"/>
        <PlaceHolder/>

        <WhiteSpace size="sm"/>
        <PlaceHolder/>

        <WhiteSpace/>
        <PlaceHolder/>

        <WhiteSpace size="lg"/>
        <PlaceHolder/>

        <WhiteSpace size="xl"/>
        <PlaceHolder/>
    </div>
);

class WhiteSpaceApp extends React.Component {

    render() {
        return <WhiteSpaceExample/>
    }
};

export default WhiteSpaceApp;
