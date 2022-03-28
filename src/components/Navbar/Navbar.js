import React from 'react'
import './Navbar.scss';
import {Email} from '@material-ui/icons';


export default function Navbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'navbar ' + (menuOpen && 'active')}>
      <div className='wrapper'>
        <div className='left'>
          <a href="#myContact" className='logo'>F . T</a>
          <div className='itemGroup'>
            <Email className='icon' />
            <span className='email'>frankie.tsoi.yh@gmail.com</span>

          </div>

        </div>
        <div className='right'>
          <div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)} >
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line2'></span>
          </div>
          
        </div>
      </div>
    </div>
  )
}
