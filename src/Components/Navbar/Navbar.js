import React from 'react'
import './Navbar.css'
import menu_icon from '../../Assets/menu.png'
import logo from '../../Assets/logo.png'
import search_icon from '../../Assets/search.png'
import upload_icon from '../../Assets/upload.png'
import more_icon from '../../Assets/more.png'
import notification_icon from '../../Assets/notification.png'
import profile_icon  from'../../Assets/jack.png'
import { Link } from 'react-router-dom'


const Navbar = ({setSidebar}) => {
  return (
    <nav className="flex-div">

      <div className="flex-div nav-left">
        <img className="menu-icon" onClick={()=> setSidebar(prev => prev===false?true:false)} src={menu_icon} alt=""/>
          <Link to='/'>
            <img className="logo" src={logo} alt=""/>
          </Link>
      </div>
      <div className="flex-div nav-middle">
        <div className='search-box flex-div'>
        < input type='text' placeholder='Search'/>
        <img src={search_icon} alt=""/>
        </div>      
      </div>

      <div className="flex-div nav-right">
      <img src={upload_icon} alt=""/>
      <img src={more_icon} alt=""/>
      <img src={notification_icon} alt=""/>
      <img src={profile_icon} className='user-icon' alt=""/>
        
      </div>

    </nav>
  )
}

export default Navbar
