import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import './API.css'
import { context } from './ProductContextHook';



function ProductContextChild() {
    const {products,details, dispatch}=useContext(context)
  return (
    <div>
            <button onClick={() => dispatch({ type: "add", payload: products[3] })} >Product D</button>
            <button onClick={() => dispatch({ type: "add", payload: products[4] })} className='btn-2'>Product E</button>
            <button onClick={() => dispatch({ type: "add", payload: products[5] })} className='btn-3'>Product F</button>
            {/* <h3>Product Details</h3> */}
            <p>
                {details.items.map((detail, index) => (
                    <p key={index}>
                        <Card className='car'>
                      <Card.Body className='bod'>   
                     <p>{detail.name}</p>
                      <p>{detail.description}</p>
                    <p> ${detail.price}</p>
                        <button onClick={() => dispatch({ type: "delete", payload: index })} style={{ marginLeft: "10px" }}>Delete</button>
                        </Card.Body>   
                        </Card>
                    </p>
                ))}
            </p>
            <hr></hr>
            <h3 className='total'>Total Price: ${details.total}</h3>
    </div>
  )
}

export default ProductContextChild