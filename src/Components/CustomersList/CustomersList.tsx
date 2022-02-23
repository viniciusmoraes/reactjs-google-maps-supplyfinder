import React from 'react'
import {connect} from 'react-redux'
import {getCustomers} from '../../Actions'
import {Container, Row, Col, Card, Button, Spinner, Badge} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Distance from '../Commons/Map/Distance/Distance'
import './CustomersList.scss'

interface ICustomersListProps {
    getCustomers: any;
    customers: any;
    geoLocation: any;
}

interface ICustomersListState {

}

class CustomersList extends React.Component<ICustomersListProps, ICustomersListState> {
    componentDidMount() {
        this.props.getCustomers()
    }

    render() {
        const { customers, geoLocation } = this.props;
        
        if (customers !== null) {
            const CustomerItems = customers.map((customer: any, i: any) =>
                <Col className="align-self-stretch" xs={12} sm={6} md={4} key={i}>
                    <Card className="mt-3">
                    <Card.Header> {customer.name} 
                        {Object.values(customer.address).length > 0 && 
                            <>
                                <Badge bg="secondary">{customer.address.country}</Badge> 
                                <Distance origin={geoLocation.location} destination={customer.address} />
                            
                            </>
                        }
                    </Card.Header>
                    {Object.values(customer.address).length > 0 && 
                    <>
                        <Card.Body>
                            <Card.Title>{customer.address.city} / {customer.address.state}</Card.Title>
                            <Card.Text>
                            {customer.address.street} - {customer.address.number}
                            </Card.Text>
                            <Link to={`/customer/${customer.id}`}>Ver Mapa</Link>
                        </Card.Body>
                        <Card.Footer className="text-muted">{customer.address.neighborhood}</Card.Footer>
                    
                    </>}

                    {Object.values(customer.address).length == 0 && 
                    <>
                        <Card.Body>
                            <Card.Text>
                                Endereço não cadastrado!
                            </Card.Text>
                        </Card.Body>
                    
                    </>}
                    
                </Card> 
                </Col>
            );
            
            return (
                <Container>
                    <Row className="justify-content-center">
                        <h2>Customers</h2>
                        {CustomerItems}
                    </Row>
                </Container>
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
    customers: state.customersState.customers,
    geoLocation: state.geoLocationState.geoLocation
})
export default connect(mapStateToProps, { getCustomers })(CustomersList);