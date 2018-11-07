import { Icon, Grid } from 'antd-mobile';
import React from 'react';

export const IconApp2 = () => {
    const size = ['xxs', 'xs', 'sm', 'md', 'lg'];
    const data = size.map(item => ({
        icon: (<Icon type="search" size={item} />),
        text: item,
    }));
    return (<Grid data={data} columnNum={5} hasLine={false} activeStyle={false} />);
};