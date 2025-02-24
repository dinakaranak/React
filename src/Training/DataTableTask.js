import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'



const customStyles = {
	rows: {
		style: {
			minHeight: '72px', // override the row height
		},
	},
	headCells: {
		style: {
			paddingLeft: '8px', // override the cell padding for head cells
			paddingRight: '8px',
            backgroundColor:"green",
            color:"white"
		},
	},
	cells: {
		style: {
			paddingLeft: '8px', // override the cell padding for data cells
			paddingRight: '8px',
		},
	},
};
function DataTableTask() {
    const [postData, setPostData] = useState([])

    const col = [
        {
            name:"ID",
            selector: row => row.id
        },
        {
            name:"Title",
            selector: row => row.title
        },
    //     {
    //         name:"des",
    //         selector: row => row.body
    //     }
    ]

    function getPostData(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            console.log(res.data);
            setPostData(res.data)
            
        })
    }
    useEffect(() => {
        getPostData()
    },[])
  return (
    <div>DataTableTask
        <DataTable
        columns={col}
        data={postData}
        pagination
        paginationPerPage={5}
        paginationRowsPerPageOptions={[15,25,35]}
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        customStyles={customStyles}
        />
    </div>
  )
}

export default DataTableTask
//npm i react-data-table-component