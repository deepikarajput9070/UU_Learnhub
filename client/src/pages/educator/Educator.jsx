import React from 'react'
import { Outlet } from 'react-router-dom'
const Educator = () => {
  return (
    <div>
      educator
      <div>
        {<Outlet/>}
      </div>
    </div>
  )
}

export default Educator
