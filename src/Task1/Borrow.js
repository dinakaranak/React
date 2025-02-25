import React from 'react'

function Borrow() {
  return (
    <div>
           {showPopup && (
        <div className="popup-content">
                        <h3>Borrow Book</h3>
                        <input type="text" name="name" placeholder="Enter Your Name" value={borrowDetails.name} onChange={handleBorrowChange} />
                        <input type="date" name="borrowDate" value={borrowDetails.borrowDate} onChange={handleBorrowChange} />
                        <button onClick={handleBorrowSubmit}>Confirm</button>
                        <button onClick={closeBorrowPopup}>Cancel</button>
                    </div>
         )}
    </div>
  )
}

export default Borrow