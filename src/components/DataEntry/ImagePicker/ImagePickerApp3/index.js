import { ImagePicker } from 'antd-mobile';
import React from 'react';

const data = [{
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
}, {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122',
}];

export class ImagePickerApp3 extends React.Component {
    state = {
        files: data,
    };
    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
    };
    onAddImageClick = (e) => {
        e.preventDefault();
        this.setState({
            files: this.state.files.concat({
                url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
                id: '3',
            }),
        });
    };
    onTabChange = (key) => {
        console.log(key);
    };
    render() {
        const { files } = this.state;
        return (
            <div>
                <ImagePicker
                    length="6"
                    files={files}
                    onChange={this.onChange}
                    onImageClick={(index, fs) => console.log(index, fs)}
                    selectable={files.length < 7}
                    onAddImageClick={this.onAddImageClick}
                />
            </div>
        );
    }
}