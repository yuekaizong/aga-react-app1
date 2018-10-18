import {Tabs, WhiteSpace} from 'antd-mobile';
import React from 'react';

const tabs = [
    {title: 'Tab A'},
    {title: 'Second Tab'},
    {title: 'Third Tab'},
];

class TabApp5 extends React.Component {

    render() {
        return (
            <div style={{height: 200}}>
                <WhiteSpace/>
                <Tabs tabs={tabs}
                      initalPage={'t2'}
                      tabBarPosition="left"
                      tabDirection="vertical"
                >
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '250px',
                        backgroundColor: '#fff'
                    }}>
                        Content of first tab
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '250px',
                        backgroundColor: '#fff'
                    }}>
                        Content of second tab
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '250px',
                        backgroundColor: '#fff'
                    }}>
                        Content of third tab
                    </div>
                </Tabs>
                <WhiteSpace/>
            </div>
        )
    }
}

export default TabApp5;