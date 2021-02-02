import React, { Component } from 'react';
import { ChevronLeft } from 'react-bootstrap-icons';
import {Container,Row,Col} from 'react-bootstrap';

class posts extends Component {
    render() {
        return (
            <div className='posts'>
                <Container>
                    
                    <Row>
                       
                            <Col sm={12} md ={4}>
                                <div className= 'posts-article'>
                                    <div className='posts-header'>قیمت بیت کوین به ۱۸,۰۰۰ دلار رسید اما تحلیل گران درباره اصلاح هشدار میدهند</div>
                                    <div className='posts-detail'>
                                        <p>۲۸ آبان ۱۳۹۹</p>
                                        <p>۱۰ دقیقه</p>
                                    </div>
                                </div>
                            </Col>

                            <Col sm={12} md ={4}>
                                <div className= 'posts-article'>
                                    <div className='posts-header'>قیمت بیت کوین به ۱۸,۰۰۰ دلار رسید اما تحلیل گران درباره اصلاح هشدار میدهند</div>
                                    <div className='posts-detail'>
                                        <p>۲۸ آبان ۱۳۹۹</p>
                                        <p>۱۰ دقیقه</p>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md ={4}>
                                <div className= 'posts-article'>
                                    <div className='posts-header'>قیمت بیت کوین به ۱۸,۰۰۰ دلار رسید اما تحلیل گران درباره اصلاح هشدار میدهند</div>
                                    <div className='posts-detail'>
                                        <p>۲۸ آبان ۱۳۹۹</p>
                                        <p>۱۰ دقیقه</p>
                                    </div>
                                </div>
                            </Col>
                        
                    </Row>
                   
                </Container>


               

                <div className='posts-blog'>
                    <a>مشاهده بلاگ</a>
                    <div className='posts-blog-icon'>
                        <a>
                            <ChevronLeft/>
                        </a>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default posts;