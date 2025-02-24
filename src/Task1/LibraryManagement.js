import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

function LibraryManagement() {
    const [postStu, setPostStu] = useState([]);
    const [detail, setDetail] = useState({ title: "", author: "", genre: "" });
    const [isEdit, setIsEdit] = useState(false);
    const [bookId, setBookId] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [borrowDetails, setBorrowDetails] = useState({ name: "", borrowDate: "" });

    const columns = [
        {
            name: "Book-ID",
            selector: row => row.bookId
        },
        {
            name: "Title",
            selector: row => row.title
        },
        {
            name: "Author",
            selector: row => row.author
        },
        {
            name: "Genre",
            selector: row => row.genre
        },
        {
            name: "Availability Status",
            selector: row => row.availabilityStatus
        },
        {
            name: "Actions",
            cell: row => (
                <div>
                    <button onClick={() => handleEdit(row)}>Update</button>
                    <button onClick={() => handleDelete(row.bookId)}>Delete</button>
                    <button 
                        onClick={() => openBorrowPopup(row.bookId)} 
                        disabled={row.availabilityStatus === "Borrowed"}
                    >
                        Borrow
                    </button>
                </div>
            )
        }
    ];

    function getPost() {
        axios.get("http://92.205.109.210:8051/library/getall")
            .then(res => {
                console.log(res.data);
                setPostStu(res.data.data);
            })
            .catch(err => console.error("Error fetching data:", err));
    }

    useEffect(() => {
        getPost();
    }, []);

    function handleChange(e) {
        setDetail({ ...detail, [e.target.name]: e.target.value });
    }

    function handleEdit(data) {
        setDetail({ title: data.title, author: data.author, genre: data.genre });
        setIsEdit(true);
        setBookId(data.bookId);
    }

    function handleCreate() {
        axios.post("http://92.205.109.210:8051/library/create", detail)
            .then(res => {
                console.log(res);
                alert("Data saved");
                getPost();
                setDetail({ title: "", author: "", genre: "" });
            })
            .catch(err => console.error("Error saving data:", err));
    }

    function handleUpdate() {
        axios.put(`http://92.205.109.210:8051/library/update/${bookId}`, detail)
            .then(res => {
                console.log(res.data);
                alert("Book updated successfully");
                setIsEdit(false);
                setBookId(null);
                setDetail({ title: "", author: "", genre: "" });
                getPost();
            })
            .catch(err => console.error("Error updating data:", err));
    }

    function handleSubmit(e) {
        e.preventDefault();
        isEdit ? handleUpdate() : handleCreate();
    }

    function handleDelete(bookId) {
        axios.delete(`http://92.205.109.210:8051/library/delete/${bookId}`)
            .then(() => {
                alert("Book deleted successfully");
                getPost();
            })
            .catch(err => console.error("Error deleting data:", err));
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
            <input type="text" placeholder="Enter Title" name="title" value={detail.title} onChange={handleChange} />
            <input type="text" placeholder="Enter Author" name="author" value={detail.author} onChange={handleChange} />
            <input type="text" placeholder="Enter Genre" name="genre" value={detail.genre} onChange={handleChange} />
            <button onClick={handleSubmit}>{isEdit ? "Update" : "Submit"}</button>

            <Link to="/BorrowBook">
                <button>Borrow Book</button>
            </Link>

            <DataTable 
                columns={columns}
                data={postStu}
                pagination
            />

            {/* Borrow Popup */}
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h3>Borrow Book</h3>
                        <input type="text" name="name" placeholder="Enter Your Name" value={borrowDetails.name} onChange={handleBorrowChange} />
                        <input type="date" name="borrowDate" value={borrowDetails.borrowDate} onChange={handleBorrowChange} />
                        <button onClick={handleBorrowSubmit}>Confirm</button>
                        <button onClick={closeBorrowPopup}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default LibraryManagement;
