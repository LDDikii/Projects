import {Container, Row, Col, Carousel} from 'react-bootstrap';

const BootstrapTest = () => {
    return(
        <Container classname='mt-5 mb-5'>
            <Row>
                <Col>1 of 2</Col>
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <img 
                            className='d-block w-100'
                            src='https://ru.freepik.com/photos/%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8'
                            alt='First slide'/>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}

export default BootstrapTest;