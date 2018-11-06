import {ImagePicker, SegmentedControl, WingBlank} from 'antd-mobile';
import React from 'react';

const data = [{
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
}, {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122',
}];

class ImagePickerApp1 extends React.Component {
    state = {
        files: data,
        multiple: false,
    }
    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
    }
    onSegChange = (e) => {
        const index = e.nativeEvent.selectedSegmentIndex;
        this.setState({
            multiple: index === 1,
        });
    }

    render() {
        const {files} = this.state;
        return (
            <WingBlank>
                <SegmentedControl
                    values={['切换到单选', '切换到多选']}
                    selectedIndex={this.state.multiple ? 1 : 0}
                    onChange={this.onSegChange}
                />
                <ImagePicker
                    files={files}
                    onChange={this.onChange}
                    onImageClick={(index, fs) => console.log(index, fs)}
                    selectable={files.length < 7}
                    multiple={this.state.multiple}
                />
            </WingBlank>
        );
    }
}

export default ImagePickerApp1;