import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function UseLocationHook() {

    let location = useLocation()
    console.log(location);
    let user = location.state
    
  return (
    <div>UseLocationHook
        {location.state.name}
        <Link to='/useParams/123/dhina'>
        <button >useParams</button>
        </Link>
    </div>
  )
}

export default UseLocationHook