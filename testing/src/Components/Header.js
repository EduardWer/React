import React, {Component} from 'react';
import {Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import Logo from './logo192.png'




class Header extends Component {
    render() {
        return (
            <>
            <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand href='/'>

                        <img
                            src={Logo}
                            height='30'
                            width='30'
                            className='d-inline-block align-top'
                            alt='Logo'
                        />
                        ReactGame
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='mr-auto'>
                            <Nav.Link href='/'> Главная </Nav.Link>
                            <Nav.Link href='/Katalog'> Каталог </Nav.Link>
                            <Nav.Link href='/Likes'> Избранное </Nav.Link>
                            <Nav.Link href='/Korzina'> Корзина </Nav.Link>

                        </Nav>

                        <Form className='d-flex ml-auto'>
                            <FormControl
                                type='text'
                                placeholder='Search'
                                className='mr-sm-2'
                            />
                            <Button variant="outline-info">Search</Button>
                        </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
        );
    }
}

export default Header;