import React from 'react'
import { WingBlank, WhiteSpace } from 'antd-mobile';
import './style.css'

const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>Block</div>
);

const WingBlankExample = () => (
    <div style={{ padding: '15px 0' }}>
        <WingBlank><PlaceHolder /></WingBlank>

        <WhiteSpace size="lg" />
        <WingBlank size="md"><PlaceHolder /></WingBlank>

        <WhiteSpace size="lg" />
        <WingBlank size="sm"><PlaceHolder /></WingBlank>
    </div>
);

class WingBlankApp extends React.Component{
    render(){
        return (
            <WingBlankExample/>
        )
    }
};

export default WingBlankApp;