import { ImagePicker } from 'antd-mobile';
import React from 'react';

const data = [{
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
}, {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122',
}];

class ImagePickerApp2 extends React.Component {
    state = {
        files: data,
    }
    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
    }

    render() {
        const { files } = this.state;
        return (
            <div>
                <ImagePicker
                    files={files}
                    onChange={this.onChange}
                    onImageClick={(index, fs) => console.log(index, fs)}
                    selectable={files.length < 5}
                    accept="image/gif,image/jpeg,image/jpg,image/png"
                />
            </div>
        );
    }
}

export default ImagePickerApp2;