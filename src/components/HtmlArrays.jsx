//Building HTML from Arrays
import React from 'react'

const HtmlArrays = () => {
    const navlinkItems = [
        <li className="nav-item">
            <a className="nav-link" href="https://www.google.com">
                Link to Google.com
            </a>
        </li>,
        <li className="nav-item">
            <a className="nav-link" href="https://www.facebook.com">
                Link to Facebook.com
            </a>
        </li>,
        <li className="nav-item">
            <a className="nav-link" href="https://www.amazon.com">
                Link to Amazon.com
            </a>
        </li>,
    ]
  return (
    <div>
        <h1>Html Into Arrays</h1>
        <ul className="nav">
            {navlinkItems}            
        </ul>
    </div>
  )
}

export default HtmlArrays