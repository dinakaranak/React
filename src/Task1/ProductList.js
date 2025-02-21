import React, { useReducer } from 'react';
import Card from 'react-bootstrap/Card';
import './API.css'

const products = [
    { id: 1, name: "Product A", price: 10 ,description:"something details"},
    { id: 2, name: "Product B", price: 20,description:"something details" },
    { id: 3, name: "Product C", price: 30 ,description:"something details"}
];

function reducer(state, action) {
    switch (action.type) {
        case "add":
            return  { 
                items: [...state.items, action.payload], 
                total: state.total + action.payload.price 
            };
        case "delete":
            const updatedItems = state.items.filter((_, index) => index !== action.payload);
            const reducedTotal = state.total - state.items[action.payload].price;
            return { items: updatedItems, total: reducedTotal };
        default:
            return state;
    }
}

function ProductList() {
    const [details, dispatch] = useReducer(reducer,{ items: [], total: 0 });

    return (
        <div>
            <h2>Product List</h2>
            <button onClick={() => dispatch({ type: "add", payload: products[0] })} className='btn-1'>Product A</button>
            <button onClick={() => dispatch({ type: "add", payload: products[1] })} className='btn-2'>Product B</button>
            <button onClick={() => dispatch({ type: "add", payload: products[2] })} className='btn-3'>Product C</button>
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
    );
}

export default ProductList;
