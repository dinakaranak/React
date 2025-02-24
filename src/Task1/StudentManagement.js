import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

function StudentManagement() {
    const [postStu, setPostStu] = useState([])
    const [detail, setDetail]=useState("")
    const [isEdit, setIsEdit] = useState(false)
    const [bookId, setBookId] = useState()
    const [showPopup, setShowPopup] = useState(false);
        const [borrowDetails, setBorrowDetails] = useState({ name: "", borrowDate: "" });
    
    const colum=[
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
        },
        {
            name:"Delete",
            selector: row => 
                <div>
                    <button onClick={()=> handleEdit(row)}>update</button>
            <button onClick={() => handleDelete(row.bookId)}>Delete</button>
            <button 
                        onClick={() => openBorrowPopup(row.bookId)} 
                        disabled={row.availabilityStatus === "Borrowed"}
                    >
                        Borrow
                    </button>
            </div>
        },
        

    ]

    function handleEdit(data){
        console.log(data);
        setDetail({
            title:data.title,
            author:data.author,
            genre:data.genre

        })
        setIsEdit(true)
        setBookId(data.bookId)

        
    }
    function getPost(){
        axios.get("http://92.205.109.210:8051/library/getall")
        .then(res => {
            console.log(res.data);
            setPostStu(res.data.data)
            
        })
    }
    useEffect(() => {
        getPost()
    },[])

    function handleChange(e){
        console.log({...detail});
        
        setDetail({...detail,[e.target.name]:e.target.value})
    }

    function handleCreate(){
        console.log(detail);
        axios.post("http://92.205.109.210:8051/library/create",detail)
        .then(res => console.log(res))

        alert("data saved")
        getPost()
        setDetail({
            title:"",
            author:"",
            genre:""
        })

    }
    function handleUpdate(){
        console.log(bookId);
        console.log(detail);
        
        axios.post(`http://92.205.109.210:8051/library/update/${bookId}`,detail)
        .then((res)=>{
            console.log(res.data);
            
        })
        .catch(err => console.error("Error deleting data:", err));
        alert("Book updated successfully");
        getPost(); 
        setDetail({
            title:"",
            author:"",
            genre:""
        })

    }

    function handleSubmit(e){
        e.preventDefault()
        if(isEdit){
            handleUpdate()
        }
        else{
            handleCreate()
        }
       
    }
    function handleDelete(bookId) {
        console.log(bookId);
        
        axios.post(`http://92.205.109.210:8051/library/delete/${bookId}`, detail)
            .then((res) => {
                console.log(res.data);
               
               
            })
            .catch(err => console.error("Error deleting data:", err));
            alert("Book deleted successfully");
            getPost(); 
    }
    function openBorrowPopup(bookId) {
        setBookId(bookId);
        setShowPopup(true);
    }

    function closeBorrowPopup() {
        setShowPopup(false);
        setBorrowDetails({ name: "", borrowDate: "" });
    }

    function handleBorrowChange(e) {
        setBorrowDetails({ ...borrowDetails, [e.target.name]: e.target.value });
    }

    function handleBorrowSubmit() {
        axios.post("http://92.205.109.210:8051/library/borrow", {
            bookId,
            borrowerName: borrowDetails.name,
            borrowDate: borrowDetails.borrowDate
        })
        .then(res => {
            console.log(res);
            alert("Book borrowed successfully");
            getPost();
            closeBorrowPopup();
        })
        .catch(err => console.error("Error borrowing book:", err));
    }
    
  return (
    <div>

        <input type='text' placeholder='Enter Title' name='title' value={detail.title} onChange={handleChange}></input>
        <input type='text' placeholder='Enter Author' name='author' value={detail.author} onChange={handleChange}></input>
        <input type='text' placeholder='Enter Genre' name='genre' value={detail.genre} onChange={handleChange}></input>
        <button onClick={handleSubmit}>Submit</button>
        <Link to="/BorrowBook">
        <button>Borrow Book</button></Link>
        <DataTable 
           columns={colum}
           data={postStu}
        />
        <div className="popup-content">
                        <h3>Borrow Book</h3>
                        <input type="text" name="name" placeholder="Enter Your Name" value={borrowDetails.name} onChange={handleBorrowChange} />
                        <input type="date" name="borrowDate" value={borrowDetails.borrowDate} onChange={handleBorrowChange} />
                        <button onClick={handleBorrowSubmit}>Confirm</button>
                        <button onClick={closeBorrowPopup}>Cancel</button>
                    </div>
    </div>
  )
}

export default StudentManagement