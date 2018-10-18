import {Pagination, Icon} from 'antd-mobile';
import React from 'react';

const locale = {
    prevText: 'Prev',
    nextText: 'Next',
};

class PaginationApp extends React.Component {

    render() {
        return (
            <div className="pagination-container">
                <p className="sub-title">Button with text</p>
                <Pagination total={5} current={1} locale={locale}/>

                <p className="sub-title">Button with text and icon</p>
                <Pagination total={5}
                            className="custom-pagination-with-icon"
                            current={1}
                            locale={{
                                prevText: (<span className="arrow-align"><Icon type="left"/>上一步</span>),
                                nextText: (<span className="arrow-align">下一步<Icon type="right"/></span>),
                            }}
                />

                <p className="sub-title">Hide number</p>
                <Pagination simple total={5} current={1} locale={locale}/>

                <p className="sub-title">Show number only</p>
                <Pagination mode="number" total={5} current={3}/>

                <p className="sub-title">Point style</p>
                <Pagination mode="pointer" total={5} current={2} style={{marginBottom: '16px'}}/>
            </div>
        )
    }
}

export default PaginationApp;