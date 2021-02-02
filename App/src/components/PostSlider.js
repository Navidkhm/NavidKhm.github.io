import { Carousel } from 'antd';
import React, { Component } from 'react';


class AntdSlider extends Component {

  render() {

    function onChange(a, b, c) {
      console.log(a, b, c);
    }

    const contentStyle = {
      height: '100px',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      marginTop:'200px'
     
    };
    const contentStyle1 = {
      height: '100px',
      color: '#fff',
      lineHeight: '43px',
      textAlign: 'center',
      
    }
   

    return (
      <>
        <Carousel afterChange={onChange}>
            <div className= 'posts-article'>
                <div className='posts-header'>قیمت بیت کوین به ۱۸,۰۰۰ دلار رسید اما تحلیل گران درباره اصلاح هشدار میدهند</div>
                <div className='posts-detail'>
                    <p>۲۸ آبان ۱۳۹۹</p>
                    <p>۱۰ دقیقه</p>
                </div>
            </div>
            <div className= 'posts-article'>
                <div className='posts-header'>قیمت بیت کوین به ۱۸,۰۰۰ دلار رسید اما تحلیل گران درباره اصلاح هشدار میدهند</div>
                <div className='posts-detail'>
                    <p>۲۸ آبان ۱۳۹۹</p>
                    <p>۱۰ دقیقه</p>
                </div>
            </div>
            <div className= 'posts-article'>
                <div className='posts-header'>قیمت بیت کوین به ۱۸,۰۰۰ دلار رسید اما تحلیل گران درباره اصلاح هشدار میدهند</div>
                <div className='posts-detail'>
                    <p>۲۸ آبان ۱۳۹۹</p>
                    <p>۱۰ دقیقه</p>
                </div>
            </div>
          
        </Carousel>
      </>
    );
  }
}

export default AntdSlider;