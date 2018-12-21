import React from 'react';
import {Carousel, Grid, WingBlank} from 'antd-mobile';
import {ListViewApp1} from "../../Combination/ListView/ListViewApp1/index";

class LoanCarousel extends React.Component {
    state = {
        data: [
            {
                id: "1",
                href: "https://kaizone.xyz/static/index.html#/",
                imageUrl: "http://image.antns.com/uploads/20180519/11/1526700406-kPCpLfsyNQ.jpg",
            },
            {
                id: "2",
                href: "https://kaizone.xyz/static/index.html#/",
                imageUrl: "http://t1.hxzdhn.com/uploads/tu/201602/142/0fw0cxi10z3.jpg",
            },
            {
                id: "3",
                href: "https://kaizone.xyz/static/index.html#/",
                imageUrl: "http://image.antns.com/uploads/20180519/11/1526700408-mNByirYDUo.jpg",
            },
            {
                id: "4",
                href: "https://kaizone.xyz/static/index.html#/",
                imageUrl: "http://image.antns.com/uploads/20180519/11/1526700409-lOMGxRgWDa.jpg",
            }
            ],
        imgHeight: 100,
    }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            // this.setState({
            //     data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            // });
        }, 100);
    }

    render() {
        return (
            <Carousel
                autoplay={false}
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
            >
                {this.state.data.map(val => (
                    <a
                        key={val.id}
                        href={val.href}
                        style={{display: 'inline-block', width: '100%', height: this.state.imgHeight}}
                    >
                        <img
                            src={val.imageUrl}
                            alt=""
                            style={{width: '100%', height: '300px', verticalAlign: 'top'}}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({imgHeight: 'auto'});
                            }}
                        />
                    </a>
                ))}
            </Carousel>
        );
    }
}

const gridData = Array.from(new Array(4)).map(() => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
}));


const LoanGrid = () => (
    <Grid data={gridData}
          columnNum={4}
          itemStyle={{ height: '150px', background: 'rgba(0,0,0,.05)' }}
          renderItem={dataItem => (
              <div style={{padding: '12.5px'}}>
                  <img src={dataItem.icon} style={{width: '75px', height: '75px'}} alt=""/>
                  <div style={{color: '#888', fontSize: '14px', marginTop: '12px'}}>
                      <span>I am title..</span>
                  </div>
              </div>
          )}
    />
)


export default class LoanHome extends React.Component {
    render() {
        return <div>
            <WingBlank>
                <LoanCarousel/>
                <LoanGrid/>
                <ListViewApp1/>
            </WingBlank>
        </div>
    }
}
