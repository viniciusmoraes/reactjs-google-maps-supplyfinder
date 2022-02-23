import React from 'react';
import {connect} from 'react-redux';
import './App.scss';
import {getGeoLocation} from '../../Actions'
import {Container, Row, Col, Spinner} from 'react-bootstrap'

import Header from '../Commons/Header/Header'
import Footer from '../Commons/Footer/Footer'

interface IAppProps {
    getGeoLocation: any;
    geoLocation: any;
    children: any
}

interface IAppState {

}
class App extends React.Component<IAppProps, IAppState> {
    componentDidMount() {
        this.props.getGeoLocation();

    }

    render() {
        const {geoLocation, children } = this.props
        if (geoLocation !== null) {
            return (
                <article className={`app`}>
                    <Container>
                        <Row>
                            <Col>
                                <Header />
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col>{children}</Col>
                        </Row>
                        <Row>
                            <Col>
                                <Footer />
                            </Col>
                        </Row>
                    </Container>
                </article>
            )    
        } else {
            return (
                <Spinner animation="grow">
                      <span className="visually-hidden">Loading...</span>
                </Spinner>
            )
        }
        
    }
}

const mapStateToProps = (state: any) => ({
    geoLocation: state.geoLocationState.geoLocation
})
export default connect(mapStateToProps, { getGeoLocation })(App);
