import React from 'react'
import App from '../App'
import { Link } from 'react-router-dom'
function Error404() {
  return (
    <>
    <h1>404 not found back to login</h1>
    <Link to='/'>Main Page</Link>
    </>
  )
}

export default Error404