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
          <a href="#myProjects">myProjects</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#myGraphicProjects">myGraphic Projects</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#mySkills">mySkills</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#myContact">myContact</a>
        </li>
      </ul>
    
    </div>
  )
}
