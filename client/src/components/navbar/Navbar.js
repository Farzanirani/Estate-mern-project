import './navbar.scss'

import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const {currentUser} = useContext(AuthContext)

  return (
    <nav>
      <div className="left">
        <span className='logo'>Estate+</span>
        <Link to='/'>Home</Link>
        <Link to='/'>About</Link>
        <Link to='/'>Contact</Link>
        <Link to='/'>Agents</Link>

      </div>
      <div className="right">
        {currentUser ? (
          <div className='user'>
            <img src={currentUser.avatar || "/images/noavatar.jpg"} alt="" />
            <span>{currentUser.username}</span>
            <Link to='/profile' className='profile' >
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            {/* <a href="/login">Sign In</a>  */}
            <Link to='/login'>Sign In</Link>
            {/* <Link to='/'>Sign In</Link> */}
            {/* <a href="/register" className='register'>Sign Up</a> */}
            <Link to='/register' className='register'>Sign Up</Link>
          </>)
        }
        <div className="menuIcon">
          <img src="./images/menu.png" alt="" onClick={() => setOpen((prev) => !prev)} />
        </div>
        <div className={open ? 'menu active' : 'menu'}>
          <Link to='/'>Home</Link>
          <Link to='/'>About</Link>
          <Link to='/'>Contact</Link>
          <Link to='/'>Agents</Link>
          <Link to='/login'>Sign In</Link>
          <Link to='/register'>Sign Up</Link>

        </div>
      </div>
    </nav>
  )
}
