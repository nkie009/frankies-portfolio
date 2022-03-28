import React from 'react'
import './Menu.scss'

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#aboutMe">About Me</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#myProjects">Projects</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#mySkills">Skills</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#myContact">Contact</a>
        </li>
       
      </ul>
    
    </div>
  )
}
