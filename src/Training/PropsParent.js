import React from 'react'
import PropsChild from './PropsChild'

function PropsParent() {
    // props(properties): it is used to communicate b/w parent and child components
    let name = "dhinakaran"
    let age =18

    let user = {
        userName:"Dhinakaran",
        mail:"dhina@gmail.com",
        mbile:9087654321
    }
  return (
    <div>PropsParent

        {/* <PropsChild name={name} a={age}/> */}
        <PropsChild user={user} />
    </div>
  )
}

export default PropsParent