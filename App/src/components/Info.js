import React, { Component } from 'react';
import { Container,Row,Col } from 'react-bootstrap';

class Info extends Component {
    render() {
        return (
            <div className='info'>
                <Container>
                    <Row>
                        <Col sm={3} md={6} lg={3}>
                            <div>
                    
                                <h3 className='num'>۱۸,۲۷۳</h3>
                                <h4 className='descript'>تعداد کاربران</h4>
                            </div>

                        </Col>
                        <Col sm={3} md={6} lg={3}>
                            <div>
                                <h3 className='num'>۸۴,۵۳۸,۹۲۱,۰۶۷</h3>
                                <h4 className='descript'>ارزش معاملات (تومان)</h4>
                            </div>
                            
                        </Col>
                        <Col sm={3} md={6} lg={3}>
                            <div>
                                <h3 className='num'>۷۲,۵۳۸</h3>
                                <h4 className='descript'>تعداد کل معاملات</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
                
                
                
            </div>
        );
    }
}

export default Info;