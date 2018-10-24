import {Button, WhiteSpace, WingBlank} from 'antd-mobile';
import React from 'react';

class ButtonApp1 extends React.Component {

    constructor(...args) {
        super(...args)
        this.state = {
            initData: {
                value: '1',
                label: 'xxoo'
            },
            show: false,
        }
    }

    handleClick01 = (e) => {
        console.log("-----------------------------------------------");
        this.setState({show: true});
        // this.setState({
        //     initData: {
        //         value: '2',
        //         label: '另一个方法调用'
        //     }
        // }, () => {
        //     console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        //     console.log(this.state);
        // })
        this.setState((prvState, props) => ({
                show: true,
                initData: {
                    value: '-1',
                    label: '使用(prvState, props)=>({})'
                }
            }
        ))
    }

    handleClick02 = (e) => {
        console.log('##########################################################');
        console.log(this.state);
    }

    render() {
        return (
            <WingBlank>
                <Button onClick={this.handleClick01}>default</Button><WhiteSpace/>
                <Button disabled>default disabled</Button><WhiteSpace/>

                <Button type="primary" onClick={this.handleClick02}>primary</Button><WhiteSpace/>
                <Button type="primary" disabled>primary disabled</Button><WhiteSpace/>

                <Button type="warning">warning</Button><WhiteSpace/>
                <Button type="warning" disabled>warning disabled</Button><WhiteSpace/>

                <Button loading>loading button</Button><WhiteSpace/>
                <Button icon="check-circle-o">with icon</Button><WhiteSpace/>
                <Button icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/jBfVSpDwPbitsABtDDlB.svg" alt=""/>}>with
                    custom icon</Button><WhiteSpace/>
                <Button icon="check-circle-o" inline size="small" style={{marginRight: '4px'}}>with icon and
                    inline</Button>
                <Button icon="check-circle-o" inline size="small">with icon and inline</Button>
                <WhiteSpace/>

                {/* <Button activeStyle={false}>无点击反馈</Button><WhiteSpace /> */}
                {/* <Button activeStyle={{ backgroundColor: 'red' }}>custom feedback style</Button><WhiteSpace /> */}

                <WhiteSpace/>
                <Button type="primary" inline style={{marginRight: '4px'}}>inline primary</Button>
                {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
                <Button type="ghost" inline style={{marginRight: '4px'}} className="am-button-borderfix">inline
                    ghost</Button>

                <WhiteSpace/>
                <Button type="primary" inline size="small" style={{marginRight: '4px'}}>primary</Button>
                <Button type="primary" inline size="small" disabled>primary disabled</Button>
                <WhiteSpace/>
                <Button type="ghost" inline size="small" style={{marginRight: '4px'}}>ghost</Button>
                {/* use `am-button-borderfix`. because Multiple buttons inline arranged, the last one border-right may not display */}
                <Button type="ghost" inline size="small" className="am-button-borderfix" disabled>ghost
                    disabled</Button>
            </WingBlank>
        )
    }
}

export default ButtonApp1;