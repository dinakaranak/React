import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar, NavDropdown, Card } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import axios from 'axios';
import './API.css';

function Website() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [showCart, setShowCart] = useState(false); // Toggle between products and cart page

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => setProducts(res.data));
    }, []);

    // Add to Cart Function
    const addToCart = (product) => {
        setCart([...cart, product]);
        setTotal(total + product.price);
    };

    // Remove from Cart Function
    const removeFromCart = (index) => {
        const itemToRemove = cart[index];
        setCart(cart.filter((_, i) => i !== index));
        setTotal(total - itemToRemove.price);
    };

    return (
        <div>
            {/* Navbar Section */}
            <Navbar expand="lg" className="bg-body-tertiary nav">
                <Container>
                    <Navbar.Brand href="#">API Card Functions</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">Contact</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        {/* Cart Icon */}
                        <Button variant="outline-dark" onClick={() => setShowCart(true)}>
                            <FaShoppingCart /> ({cart.length})
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Toggle Between Product Page & Cart Page */}
            {showCart ? (
                // Cart Page
                <div className="container mt-4">
                    <h3>Shopping Cart</h3>
                    {cart.length === 0 ? <p>No items in cart</p> : (
                        <ul className="list-group">
                            {cart.map((item, index) => (
                                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                    {item.title} - ${item.price}
                                    <Button variant="danger" size="sm" onClick={() => removeFromCart(index)}>Remove</Button>
                                </li>
                            ))}
                        </ul>
                    )}
                    <h4 className="mt-3">Total Price: ${total.toFixed(2)}</h4>
                    <Button variant="secondary" className="mt-3" onClick={() => setShowCart(false)}>Back to Products</Button>
                </div>
            ) : (
                // Products Page
                <div className="d-flex flex-wrap justify-content-center">
                    {products.map((product) => (
                        <Card key={product.id} className="m-3" style={{ width: '18rem' }}>
                          
                            <Card.Body  className='body'>
                            <Card.Img variant="top" src={product.image} style={{ height: "250px", width:"250px"}} />
                                <Card.Title className='tit'>{product.title}</Card.Title>
                                <Card.Text className='tex'>{product.description.substring(0, 100)}...</Card.Text>
                                <Card.Text><strong>Price:</strong> $ {product.price}</Card.Text>
                                <div className="d-flex justify-content-between">
                                    <Button variant="primary" className='button'>{product.category}</Button>
                                    <Button variant="success" onClick={() => addToCart(product)}>Add to Cart</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Website;
