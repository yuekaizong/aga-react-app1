import React, {Component} from 'react';
import {render} from 'react-dom';
import ReactSwiper from 'reactjs-swiper';
import "./style.css"

const items = [
    {
        image: 'http://image.antns.com/uploads/20180519/11/1526700406-kPCpLfsyNQ.jpg',
        title: '图片2',
    },
    {
        image: 'http://t1.hxzdhn.com/uploads/tu/201602/142/0fw0cxi10z3.jpg',
        title: '图片1',
        link: 'http://jd.com'
    },
    {
        image: 'http://image.antns.com/uploads/20180519/11/1526700408-mNByirYDUo.jpg',
        title: '图片3',
        link: 'http://jd.com'
    },
    {
        image: 'http://image.antns.com/uploads/20180519/11/1526700409-lOMGxRgWDa.jpg',
        title: '图片4',
    }];

const swiperOptions = {
    preloadImages: true,
    autoplay: 1,
    autoplayDisableOnInteraction: false
};

export const SwiperApp = () => (
    <ReactSwiper swiperOptions={swiperOptions} showPagination items={items}
                 className="swiper"/>
)