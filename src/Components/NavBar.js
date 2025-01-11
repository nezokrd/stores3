import React, { useState } from 'react'
import { Container, Form, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'

 const NavBar = ({filterbySearch}) => {
  const[searchValue,setsearchvalue]=useState('');
  const onSearch=(e)=>{
    e.preventDefault();
    filterbySearch(searchValue);
    setsearchvalue('');
  }
  return (
    <Row>
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container >
       
        <Navbar.Brand href="/">
        
        <div className='brand-color'>
           الرئيسية 
                 </div> 
        </Navbar.Brand>
      
        <NavDropdown className='brand-color mx-2' title=" أنواع المتاجر" id="basic-nav-dropdown">
              <NavDropdown.Item href="/ProductsPageLocalStores">متاجر محلية</NavDropdown.Item>
              <NavDropdown.Item href="/ProductsEcommercePage">
                متاجر الكترونية
              </NavDropdown.Item>
              <NavDropdown.Item href="/ProductsFamilesProductsPage">الأسر المنتجة</NavDropdown.Item>
              <NavDropdown.Divider />
            
        </NavDropdown>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
       
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="ابحث"
              className="mx-2"
              onChange={(e)=>setsearchvalue(e.target.value)}
              value={searchValue}
            />
            <button onClick={onSearch} className="btn-search">بحث</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    </Row>
  )
}
export default NavBar