import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {Instagram,Twitter,Linkedin} from 'react-bootstrap-icons'


class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <Container>
                    <Row>
                        {/* <Col sm={3}>آسان اکسچنج کیتبدلتیبتنلدبنلتذدمبلتناتیسبلپیبنمتلدیبملنیبسلنمتیبلا</Col> */}
                        <Col xs={6} sm={4}>
                            <h4>دسترسی سریع</h4>
                            <ul>
                                <li><a href='/'>معامله سریع</a></li>
                                <li><a href='/'>بازارها</a></li>
                                <li><a href='/'>بازار مبتدی</a></li>
                                <li><a href='/'>بازار حرفه ای</a></li>
                            </ul>
                        </Col>
                        <Col xs={6} sm={4}>
                        <h4>راهنما</h4>
                            <ul>
                                <li><a href='/'>راهنمای استفاده</a></li>
                                <li><a href='/'>سوالات متداول</a></li>
                                <li><a href='/'>قوانین و شرایط</a></li>
                                <li><a href='/'>کارمزدها</a></li>
                                <li><a href='/'>درباره ما</a></li>
                                <li><a href='/'>بلاگ</a></li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={4}>
                        <h4>تماس با ما</h4>
                            <ul>
                                <li><a href='/'>آدرس: خ ستارخان خ اول ک دوم پ سوم واحد چهارم</a></li>
                                <li><a href='/'>تلفن: ۲۲۳۴۳۴۳۴</a></li>
                                <li><a href='/'>ایمیل: example@info.com</a></li>
                               
                            </ul>
                        </Col>
                    </Row>
                    <Row className='last-row'>
                        <Col sm={12} md={12} lg={12} className='last-col'>
                            <div className='fin'>
                                <p>آسان اکسچنج در شبکه های اجتماعی :</p>
                                <a href='/'><Instagram/></a>
                                <a href='/'><Twitter/></a>
                                <a href='/'><Linkedin/></a>
                                
                            </div>
                        </Col>
                       
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;