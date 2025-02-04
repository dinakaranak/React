import React from 'react'

function Celsius() {
    function celcToFahr( n ) {
        return ((n * 9.0 / 5.0) + 32.0);
    }
    function findArea(r) {
        let pie_value = Math.PI;
        return (pie_value * r * r);
      }
 
  return (
    <div>
        <h3>{celcToFahr(67)}</h3>
        <h1>{findArea(7)}</h1>
    </div>
  )
}

export default Celsius


