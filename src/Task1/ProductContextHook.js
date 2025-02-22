import React, { createContext, useReducer } from 'react'
import ProductContextChild from './ProductContextChild'
import './API.css'

export let context = createContext()
const products = [
    { id: 1, name: "Product A", price: 10 ,description:"something details"},
    { id: 2, name: "Product B", price: 20,description:"something details" },
    { id: 3, name: "Product C", price: 30 ,description:"something details"},
    { id: 4, name: "Product D", price: 40 ,description:"something details"},
    { id: 5, name: "Product E", price: 50,description:"something details" },
    { id: 6, name: "Product F", price: 60 ,description:"something details"}
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
function ProductContextHook() {
    const [details, dispatch] = useReducer(reducer,{ items: [], total: 0 });
  return (
    <context.Provider value={{products, details, dispatch}}>
    <div>
    <h2>Product List</h2>
            <button onClick={() => dispatch({ type: "add", payload: products[0] })}>Product A</button>
            <button onClick={() => dispatch({ type: "add", payload: products[1] })} className='btn-2'>Product B</button>
            <button onClick={() => dispatch({ type: "add", payload: products[2] })} className='btn-3'>Product C</button>
            {/* <h3>Product Details</h3> */}
            {/* <p>
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
            </p> */}
            {/* <hr></hr>
            <h3 className='total'>Total Price: ${details.total}</h3> */}
    </div>
    <ProductContextChild />
    </context.Provider>
  )
}

export default ProductContextHook