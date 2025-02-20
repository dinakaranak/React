import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import './API.css'
function APIWithCard() {
    const [todoData, setTodoData]=useState([])

    function getall(){
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
            console.log(res.data);
            setTodoData(res.data)
            
        })
    }
     useEffect(()=>{getall()},[])
  return (
    <div>
      <div>
      <Navbar expand="lg" className="bg-body-tertiary nav">
      <Container>
        <Navbar.Brand href="#home">API Card Functions</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Signup">Home</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <Nav.Link href="#link">Pages</Nav.Link>
            <Nav.Link href="#link">Details</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Design</Nav.Link>
            <Nav.Link href="#link">Blog pages</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='dd'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>

      <div className='card'>
        {todoData && todoData.map(todo => (
         <Card>
      <Card.Body className='body'>
      <Card.Img variant="top" src={todo.image} style={{height:"250px" , width:"250px", marginLeft:"25px"}} />
        <Card.Title className='tit'>  
            <p>{todo.title}
            </p>
      </Card.Title>
        <Card.Text className='tex'>
          {todo.description}
        </Card.Text>
        <Card.Text>
           $ {todo.price}
        </Card.Text>
        <Button variant="primary">{todo.category}</Button>
      </Card.Body>
    </Card>
    ))}
    </div>
    </div>
  )
}

export default APIWithCard