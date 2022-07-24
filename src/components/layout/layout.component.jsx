import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar/sidebar.component.jsx'
import './layout.styles.scss'

const Layout = () => {
  return (
    <div className='App'>
      <Sidebar />
      <div className="page">
       <Outlet/>
      </div>
    </div>
  )
}

export default Layout
