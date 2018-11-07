import {Tag} from 'antd-mobile';
import React from 'react';
import './style.css'

function onChange(selected) {
    console.log(`tag selected: ${selected}`);
}

export const TagApp1 = () => (
    <div className="tag-container">
        <Tag data-seed="logId">Basic</Tag>
        <Tag selected>Selected</Tag>
        <Tag disabled>Disabled</Tag>
        <Tag onChange={onChange}>Callback</Tag>
        <Tag closable
             onClose={() => {
                 console.log('onClose');
             }}
             afterClose={() => {
                 console.log('afterClose');
             }}
        >
            Closable
        </Tag>
        <Tag small>Small and Readonly</Tag>
    </div>
);
