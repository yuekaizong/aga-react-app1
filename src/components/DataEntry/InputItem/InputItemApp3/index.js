import {List, InputItem, Toast} from 'antd-mobile';
import React from 'react';

class InputItemApp3 extends React.Component {
    state = {
        hasError: false,
        value: '',
    }
    onErrorClick = () => {
        if (this.state.hasError) {
            Toast.info('Please enter 11 digits');
        }
    }
    onChange = (value) => {
        if (value.replace(/\s/g, '').length < 11) {
            this.setState({
                hasError: true,
            });
        } else {
            this.setState({
                hasError: false,
            });
        }
        this.setState({
            value,
        });
    }

    render() {
        return (
            <div>
                <List renderHeader={() => 'Confirm when typing'}>
                    <InputItem
                        type="phone"
                        placeholder="input your phone"
                        error={this.state.hasError}
                        onErrorClick={this.onErrorClick}
                        onChange={this.onChange}
                        value={this.state.value}
                    >手机号码</InputItem>
                </List>
            </div>
        );
    }
}

export default InputItemApp3;