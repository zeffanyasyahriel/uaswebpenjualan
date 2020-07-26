import React, { useContext } from 'react'
import { Jumbotron, Button, Container, Row, Col ,Card} from 'reactstrap';
import CardComp from './CardComp';
import { CartContext } from '../../CartContext';

function AboutComp() {
   
    return (
        <div>
            <Card body inverse color="info">
            <Jumbotron>
            <Card body inverse color="primary">
                <h1 className="display-3">Beli HP Oppo ,Ayo ,Tunggu Apalagi </h1>
                <p className="lead">Buy handphone</p>
                <hr className="my-2" />
                <p>Di Web kami tersedia Berbagai Macam Handphone bagus dan hargapun terjangkau.</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>

                </p>
                </Card>
            </Jumbotron>
            </Card>
            <Container>
            <Card body inverse color="primary">
                <Row>
                    <Col><CardComp id="1" judul="Oppo youth 7" tanggal="22/06/2020"/></Col>
                    <Col><CardComp id="2" judul="Oppo V9" tanggal="23/06/2020"/></Col>
                    <Col><CardComp id="3" judul="Vivo" tanggal="24/06/2020"/></Col>
                </Row>
                </Card >
            </Container>
        </div>
    )
}

export default AboutComp;