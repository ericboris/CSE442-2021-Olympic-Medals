import { Container, Col, Row } from 'react-bootstrap';
import templateMap from '

function App() {
    return (
        <Container fluid>
            <Row>
                Title
            </Row>
            <Row>
                Map and Graphs
                <Col horizontalalignment="left" >
                    Map
                    <img src='https://mdbcdn.b-cdn.net/img/new/slides/041.jpg' />
                </Col>
                <Col horizontalalignment="right">
                    Graphs
                    <Container>
                        Top Row Graphs
                        <Row>
                            Title: Medals By Country
                        </Row>
                        <Row>
                            Graphs Top
                            <Col>
                                Graph Top Left
                            </Col>
                            <Col>
                                Graph Top Mid
                            </Col>
                            <Col>
                                Graph Top Right
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        Bottom Row Graphs
                        <Row>
                            Title: Medals By Country by %
                        </Row>
                        <Row>
                            Graphs Bottom
                            <Col>
                                Graph Bottom Left
                            </Col>
                            <Col>
                                Graph Bottom Mid
                            </Col>
                            <Col>
                                Graph Bottom Right
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default App;
