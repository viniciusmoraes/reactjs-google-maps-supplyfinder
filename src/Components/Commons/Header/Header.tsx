import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import './Header.scss'

interface IHeaderProps {
}
interface IHeaderState {
    expanded: boolean;
}

class Header extends React.Component<IHeaderProps, IHeaderState> {
    constructor(props: any) {
        super(props)
        
        this.state = {
            expanded: false
        };
    }
    
    componentDidMount() {
    }

    onClickMenu(expanded: boolean) {
        this.setState({
            ...this.state,
            expanded: expanded
        })
    }

    render() {
        const { expanded } = this.state;

        return (
            <header className='mb-5'>
                <Navbar 
                    bg="light" 
                    expand={false}
                >
                    <Container fluid>
                        <Navbar.Brand href="#">React.JS Supplyfinder</Navbar.Brand>
                        <Navbar.Toggle aria-controls="offcanvasNavbar" />
                        <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Link onClick={() => this.onClickMenu(false)} to="/">Home</Link>
                                    <Link onClick={() => this.onClickMenu(false)} to="/customers">Customers</Link>
                                    <Link onClick={() => this.onClickMenu(false)} to="/suppliers">Suppliers</Link>
                                </Nav>
            
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </header>
        )
    }
}

const mapStateToProps = (state: any) => ({

})

export default connect(mapStateToProps, {})(Header);