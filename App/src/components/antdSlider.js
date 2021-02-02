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
      <div className='slider'>
        <Carousel afterChange={onChange}>
          <div>
            <h3 style={contentStyle}>آسان اکسچنج</h3>
            <h3 style={contentStyle1}>آسان ترین مکان برای خرید،فروش و مدیریت رمزارزهای شما</h3>
            
          </div>
          <div>
            <h3 style={contentStyle}>آسان اکسچنج</h3>
            <h3 style={contentStyle1}>آسان ترین مکان برای خرید،فروش و مدیریت رمزارزهای شما</h3>
          </div>
          <div>
            <h3 style={contentStyle}>آسان اکسچنج</h3>
            <h3 style={contentStyle1}>آسان ترین مکان برای خرید،فروش و مدیریت رمزارزهای شما</h3>
          </div>
          <div>
            <h3 style={contentStyle}>آسان اکسچنج</h3>
            <h3 style={contentStyle1}>آسان ترین مکان برای خرید،فروش و مدیریت رمزارزهای شما</h3>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default AntdSlider;