import React from 'react'
import { Outlet } from 'react-router-dom'
import TubeHead from '../components/TubeHead'


export default function Root() {
  return (
    <div>
        <TubeHead/>
        <Outlet/>
    </div>
  )
}
