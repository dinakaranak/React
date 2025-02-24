import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';

function BorrowBook() {
      const [borrow, setBorrow]=useState([])
        const colu=[
            {
                name:"Book-ID",
                selector: row =>row.bookId
            },
            {
                name:"Title",
                selector: row =>row.title
            },
            {
                name:"Author",
                selector: row =>row.author
            },
            {
                name:"Genre",
                selector:row=>row.genre
            },
            {
                name:"AvailabilityStatus",
                selector:row=>row.availabilityStatus
            }
        ]
    function getPostBorrow (){
        axios.get("http://92.205.109.210:8051/library/borrowedbooks")
        .then(res=>{
            console.log(res.data);
            setBorrow(res.data.data);
        })
    }
    useEffect(()=>{
        getPostBorrow()
    },[])
  return (
    <div>
        <DataTable 
           columns={colu}
           data={borrow}
        />
    </div>
  )
}

export default BorrowBook