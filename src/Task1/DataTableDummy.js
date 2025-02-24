import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

const paginationComponentOptions = {
	rangeSeparatorText: 'de',
	selectAllRowsItem: true,
	selectAllRowsItemText: 'Todos',
};
function DataTableDummy() {
    const [dataPost, setDataPost]=useState([])
    const column=[
        {
            name:"ID",
            selector: row =>row.id
        },
        {
            name:"Title",
            selector: row =>row.title
        },
        {
            name:"Category",
            selector: row =>row.category
        },
        {
            name:"Price",
            selector:row=>row.price
        },
        {
            name:"DiscountPercentage",
            selector:row=>row.discountPercentage
        },
        {
            name:"Rating",
            selector:row=>row.rating
        }
    ]
 
function getPostMethod (){
    axios.get("https://dummyjson.com/products")
    .then(res=>{
        console.log(res.data);
        setDataPost(res.data.products);
    })
}
useEffect(()=>{
    getPostMethod()
},[])
  return (
    <div>
     {/* <DataTable title="Lista de Peliculas" columns={columns} 
        data={data} pagination paginationComponentOptions={paginationComponentOptions} /> */}
        <DataTable 
         columns={column}
         data={dataPost}
         pagination
         paginationComponentOptions={paginationComponentOptions}
        
        />
    </div>
  )
}

export default DataTableDummy