import React from 'react'
import ChildEmp from './ChildEmp'

function ParentEmp() {
    let details={
        EmpName:"dinakaran",
        EmpId:214554,
        EmpSalary:20000,
        EmpAdd:"coimbatore"

    }
  return (
    <div>ParentEmp
        <ChildEmp det={details}/>
    </div>
  )
}

export default ParentEmp