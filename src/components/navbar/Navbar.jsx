import React, { useContext } from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useApplicationContext } from '../../context/ApplicationContext'

const Navbar = () => {

  const {display_sidebar, setDisplaySidebar} = useApplicationContext()


  const bars_click = () => {
    console.log(display_sidebar)
    setDisplaySidebar(!display_sidebar);
    
  }

  return (
    <div className='navbar'>
      <div className="container">
        <p className="logo">A<span>B</span>D<span>E</span>L<span>H</span>A<span>D</span>I</p>
        <FontAwesomeIcon onClick={bars_click} className='bars' icon={faBars} />
      </div>
    </div>
  )
}

export default Navbar