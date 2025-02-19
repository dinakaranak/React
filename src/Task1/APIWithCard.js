import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
function APIWithCard() {
    const [todoData, setTodoData]=useState([])

    function getall(){
        axios.get('https://fakestoreapi.com/products/5')
        .then(res => {
            console.log(res.data);
            setTodoData(res.data)
            
        })
    }
     useEffect(()=>{getall()},[])
  return (
    <div>APIWithCard
        
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={todoData.image} style={{height:"100px" , width:"100px", marginLeft:"100px"}} />
      <Card.Body>
        <Card.Title>  
            <p>{todoData.title}
            </p>
      </Card.Title>
        <Card.Text>
          {todoData.description}
        </Card.Text>
        <Card.Text>
           $ {todoData.price}
        </Card.Text>
        <Button variant="primary">{todoData.category}</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default APIWithCard