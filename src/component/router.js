import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
export default function router() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </BrowserRouter>
  )
}
