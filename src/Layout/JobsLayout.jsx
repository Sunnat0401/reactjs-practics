import React from 'react'
import { Outlet } from 'react-router-dom'

const JobsLayout = () => {
  return (
    <div>
      <h2>Job opening</h2>
      <p>Lorem ipsum dolor sit.</p>
      <Outlet/>
    </div>
  )
}

export default JobsLayout
