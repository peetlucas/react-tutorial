//Mapping Arrays to List of Objects
import React from 'react'

const ArrayList = () => {
    const animals = ['Horse', 'Cat', 'Tiger','Dog', 'Elephant', 'Monkey'];

  return (
    <div>
        <h1 className=".h1">Array to List Items</h1>
        <ul className="list-group">{animals.map((animal, index) =>{
            return <li className="list-group-item" key={index}>{animal}</li>
        })}</ul>
    </div>
  )
}

export default ArrayList