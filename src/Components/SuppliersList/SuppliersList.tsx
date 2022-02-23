import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Container, Row, Col, Card, Button, Spinner, Badge} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {getSuppliers} from '../../Actions'

import Distance from '../Commons/Map/Distance/Distance'

import './SuppliersList.scss'

interface ISuppliersListProps {
    getSuppliers: any;
    suppliers: any;
    geoLocation: any;
}

const SuppliersList: React.FC<ISuppliersListProps> = (props) => {
    const { suppliers, geoLocation } = props;

    useEffect(() => {
        props.getSuppliers()
    }, [])

    if (suppliers !== null) {
        const SupplyItems = suppliers.map((supply: any, i: any) =>
            <Col className="align-self-stretch" xs={12} sm={6} md={4} key={i}>
                <Card className="mt-3">
                    <Card.Header> {supply.name} 
                        {Object.values(supply.address).length > 0 && 
                            <>
                                <Badge bg="secondary">{supply.address.country}</Badge> 
                                <Distance origin={geoLocation.location} destination={supply.address} />
                            
                            </>
                        }
                    </Card.Header>
                    {Object.values(supply.address).length > 0 && 
                    <>
                        <Card.Body>
                            <Card.Title>{supply.address.city} / {supply.address.state}</Card.Title>
                            <Card.Text>
                            {supply.address.street} - {supply.address.number}
                            </Card.Text>
                            <Link to={`/customer/${supply.id}`}>Ver Mapa</Link>
                        </Card.Body>
                        <Card.Footer className="text-muted">{supply.address.neighborhood}</Card.Footer>
                    
                    </>}

                    {Object.values(supply.address).length == 0 && 
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
                    <h2>Suppliers</h2>
                    {SupplyItems}
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

const mapStateToProps = (state: any) => ({
    suppliers: state.suppliersState.suppliers,
    geoLocation: state.geoLocationState.geoLocation
})

export default connect(mapStateToProps, {getSuppliers})(SuppliersList);