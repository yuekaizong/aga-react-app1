import { Icon, Grid } from 'antd-mobile';
import React from 'react';

const list = [
    'check-circle', 'check', 'check-circle-o',
    'cross-circle', 'cross', 'cross-circle-o',
    'up', 'down', 'left',
    'right', 'ellipsis',
    'loading',
];

export const IconApp1 = () => {
    const data = list.map(item => ({
        icon: (<Icon type={item} />),
        text: item,
    }));
    return (
        <Grid data={data} columnNum={3} hasLine={false} activeStyle={false} />
    );
};