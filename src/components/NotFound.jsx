import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div>
     <h2>404 | Not Found</h2>
     <br />
     <button onClick={() => navigate("/")}>Go To Home Page</button>
    </div>
  )
}

export default NotFound
