import {Tabs, WhiteSpace} from 'antd-mobile';
import React from 'react';

const tabs = [
    {title: 'First Tab'},
    {title: 'Second Tab'},
    {title: 'Third Tab'},
];

class TabApp4 extends React.Component {

    render() {
        return (
            <div>
                <WhiteSpace/>
                <div style={{height: 200}}>
                    <Tabs tabs={tabs}
                          initalPage={'t2'}
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
                </div>
            </div>
        )
    }
}

export default TabApp4;