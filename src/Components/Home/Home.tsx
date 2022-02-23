import React from 'react';
import {connect} from 'react-redux'
import './Home.scss';
import {Container, Row, Col} from 'react-bootstrap'

interface IHomeProps {
}

interface IHomeState {

}
class Home extends React.Component<IHomeProps, IHomeState> {
    componentDidMount() {

    }

    render() {
        return(
            <article className={`home`}>
                <Container>
                    <Row>
                        <Col>Home</Col>
                    </Row>
                </Container>
            </article>
        )
    }
}

const mapStateToProps = (state: any) => ({
})
export default connect(mapStateToProps, { })(Home);
