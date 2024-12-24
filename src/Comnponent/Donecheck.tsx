import { NavLink, Outlet } from 'react-router-dom'

export default function Donecheck() {
    const apple=true 
    return (
      apple ? <Outlet/> : <NavLink to={'/'} replace/>
    )
}
