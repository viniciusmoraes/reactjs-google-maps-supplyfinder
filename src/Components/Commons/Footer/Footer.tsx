import React from 'react'
import {connect} from 'react-redux'
import {Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Footer.scss'

interface IFooterProps {}
interface IFooterState {}

class Footer extends React.Component<IFooterProps, IFooterState> {
    componentDidMount() {

    }

    render() {
        return (
            <footer className='mt-3'>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col>© 2022 Codux Tecnology, Inc.</Col>
                        <Col>
                            <Link to='/'>Home</Link>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}

const mapStateToProps = (state: any) => ({

})

export default connect(mapStateToProps, {})(Footer);