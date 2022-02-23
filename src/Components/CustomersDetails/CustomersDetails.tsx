import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Link, useParams} from 'react-router-dom'
import {Container, Row, Col, Card, Badge} from 'react-bootstrap'

import './CustomersDetails.scss'

import Distance from '../Commons/Map/Distance/Distance'
import MapOrigin from '../Commons/Map/Map/MapOrigin'
import MapMarkers from '../Commons/Map/Map/MapMarkers'

interface ICustomersDetailsProps {
    customers: any;
    geoLocation: any;
}

const CustomersDetails: React.FC<ICustomersDetailsProps> = (props) => {
    let { id } = useParams();
    //@ts-ignore
    let customer = props.customers.find(item => item.id === Number(id));


    useEffect(() => {
    
    }, []);
    
    return (
        <Container>
            <Row>
                <Col xs={12} sm={12} md={1}>
                    <Link to={`/customers`}>Voltar</Link>
                </Col>

                <Col xs={12} sm={12} md={11}>
                    <h1>
                        Customer / 
                        <small className="text-muted">
                            {customer.name} 
                            <Badge bg="secondary">{customer.address.country}</Badge>
                            <Distance origin={props.geoLocation.location} destination={customer.address} />
                        </small>
                    </h1>
                </Col>
                
                <Col className="align-self-stretch" xs={12} sm={12} md={12}>
                    <Card className="mt-3">
                        <Card.Body>
                            <Card.Title>{customer.address.city} / {customer.address.state}</Card.Title>
                            <Card.Text>
                            {customer.address.street} - {customer.address.number}
                            </Card.Text>
                            <MapOrigin destination={customer.address} />
                        </Card.Body>
                        <Card.Footer className="text-muted">Fonte: Google Maps</Card.Footer>
                    </Card> 
                </Col>

                <Col className="mt-4 align-self-stretch" xs={12} sm={12} md={12}>
                    <Card className="mt-3">
                        <Card.Body>
                            <MapMarkers destination={customer.address} origin={props.geoLocation.location} />
                        </Card.Body>
                        <Card.Footer className="text-muted">Fonte: Google Maps</Card.Footer>
                    </Card> 
                </Col>
                
            </Row>
        </Container>
    )
    
}

const mapStateToProps = (state: any) => ({
    customers: state.customersState.customers,
    geoLocation: state.geoLocationState.geoLocation
})

export default connect(mapStateToProps, {})(CustomersDetails);