import { NavLink, Outlet } from 'react-router-dom'

export default function Checkelement() {

   const apple=true 
  return (
    apple ? <Outlet/> : <NavLink to={'/'} replace/>
  )
  
}
