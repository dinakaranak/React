import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';

function Category() {
    const [Datas, setDatas] =useState([])
    const colum=[
        {
            name:"Category-ID",
            selector: row =>row.categoryId
        },
        {
            name:"Category",
            selector: row =>row.category
        },
        {
            name:"Description",
            selector:row=>row.description
        },
        {
            name:"CreatedBy",
            selector:row=>row.createdBy
        }
    ]
    function getPost(){
        axios.get("http://catodotest.elevadosoftwares.com//Category/GetAllCategories")
        .then(res => {
            console.log(res.data);
            setDatas(res.data.CategoryList)
            
        })
    }
    useEffect(() => {
        getPost()
    },[])
  return (
    <div>
     <DataTable 
     columns={colum}
     data={Datas}
     />
     <input type='text'></input>
     <input type='text'></input>
    </div>
  )
}

export default Category