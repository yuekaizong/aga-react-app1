import React from 'react'

import './style.css'
import card from './card.jpg'
import jojo from './jojo.jpg'
import FlexLayout from "../../components/FlexLayout/index";
import { Button } from 'antd-mobile';

class AgaView extends React.Component {
    render() {
        return (
            <div>
                <h1>CSS text-align实例</h1>
                <p className='date'>2015年3月14号</p>
                <p className='main'></p>
                <button className='button'>按钮</button>
                <button className='button button1'>Blue</button>
                <a target="_blank" href={jojo}>
                    <img src={jojo} alt="Paris" width="100" height="60"></img>
                </a>

                <div className='animation1'></div>
                <div className='animation2'></div>
                <div className='resizebox'>
                    调整属性指定一个元素是否由用户可调整大小的
                </div>
                <div className='style3'>我有一个梦想</div>
                <div className="style1">你好，这个一个div元素</div>
                <div id="div2">这也是一个div原生</div>
                <div className='rcorners1'></div>
                <div className='rcorners2'></div>
                <div className='style2'>这是一组卡牌</div>
                <img className='corner' src={card}/>
                <img className='corner1' src={jojo}/>
            </div>
        );
    }
}

export default AgaView;