import {Carousel, WingBlank} from 'antd-mobile';
import React from 'react';

export const CarouselApp5 = () => (
    <WingBlank>
        <Carousel className="my-carousel"
                  vertical
                  dots={false}
                  dragging={false}
                  swiping={false}
                  autoplay
                  infinite
                  speed={200}
                  autoplayInterval={300}
                  resetAutoplay={false}
        >
            {['ring', 'ruby', 'iPhone', 'iPod', 'sorry', 'tourism', 'coke', 'ticket', 'note'].map(type => (
                <div className="v-item" key={type}>{type}</div>
            ))}
        </Carousel>
    </WingBlank>
);