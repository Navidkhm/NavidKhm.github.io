import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';

class Pros extends Component {
    render() {
        return (
            <div className='pros'>
                <Container>
                    <Row>
                        <Col sm={3} md={6} lg={3}>
                            <div>
                                <img src='/bitcoin.svg'></img>
                                <h3>پشتیبانی ۲۴ ساعته</h3>
                            </div>
                        </Col>
                        <Col sm={3} md={6} lg={3}>
                            <div>
                                <img src='/team.svg'></img>
                                <h3>کسب درآمد از طریق دعوت دوستان</h3>
                            </div>
                        </Col>
                        <Col sm={3} md={6} lg={3}>
                            <div>
                                <img src='wallet.svg'></img>
                                <h3>کارمزد بسیار پایین معاملات</h3>
                            </div>
                        </Col>
                        <Col sm={3} md={6} lg={3}>
                            <div>
                                <img src='/transfer.svg'></img>
                                <h3>واریز سریع وجه</h3>
                            </div>
                        </Col>
                    </Row>
                    
                </Container>
               
            </div>
        );
    }
}

export default Pros;