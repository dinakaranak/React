import React, { useReducer } from 'react';

const products = [
    { id: 1, name: "Product A", price: "$10" },
    { id: 2, name: "Product B", price: "$20" },
    { id: 3, name: "Product C", price: "$30" }
];

function reducer(state, action) {
    switch (action.type) {
        case "add":
            return [...state, action.payload];
        case "delete":
            return state.filter((_, index) => index !== action.payload);
        default:
            return state;
    }
}

function AddToCart() {
    const [details, dispatch] = useReducer(reducer, []);

    return (
        <div>
            <h2>Product List</h2>
            {products.map((product, index) => (
                <button key={product.id} onClick={() => dispatch({ type: "add", payload: product })}>
                    {product.name}
                </button>
            ))}
            <h3>Product Details</h3>
            <ul>
                {details.map((detail, index) => (
                    <li key={index}>
                        {detail.name} - {detail.price}
                        <button onClick={() => dispatch({ type: "delete", payload: index })} style={{ marginLeft: "10px" }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AddToCart;













// import React, { useReducer, useState } from 'react'

// function AddToCart() {
//     const[stat, dispatch]=useReducer(reducer,[])
//     const[product, setProduct]=useState()
//   return (
//     <div>

//         <button>Product 1</button>
//         <button>Product 2</button>
//         <button>Product 3</button>
//     </div>
//   )
// }

// export default AddToCart