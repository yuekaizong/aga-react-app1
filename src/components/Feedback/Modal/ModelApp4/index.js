import { Modal, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import React from 'react';

const operation = Modal.operation;

export const ModelApp4 = () => (
    <WingBlank size="lg">
        <WhiteSpace size="lg" />
        <Button onClick={() => operation([
            { text: '标为未读', onPress: () => console.log('标为未读被点击了') },
            { text: '置顶聊天', onPress: () => console.log('置顶聊天被点击了') },
        ])}
        >operation</Button>
        <WhiteSpace size="lg" />
    </WingBlank>
);
