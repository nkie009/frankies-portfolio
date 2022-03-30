import React from 'react'
import './Skills.scss'

export default function Skills() {
  return (
    <div className="skills" id="mySkills">
    
      <div className="skillTable">
      <h1>my Skills</h1>
      <div className="codingSkills">
        <img src="assets/HTML5_logo.svg" alt="htmlLogo"/>
        <img src="assets/CSS3_logo.svg" alt="cssLogo"/>
        <img src="assets/Javascript-shield.svg" alt="jsLogo"/>
        <img src="assets/ruby.svg" alt="rubyLogo"/>
        <img src="assets/rails.svg" alt="railsLogo"/>
        <img src="assets/React-icon.svg" alt="reactLogo"/>
        <img src="assets/Vue.js_Logo_2.svg" alt="vueLogo"/>
      </div>

      <div className="graphicSkills">
        <img src="assets/AI.svg" alt="aiLogo"/>
        <img src="assets/indesign.svg" alt="indesignLogo"/>
        <img src="assets/PS.svg" alt="psLogo"/>
        <img src="assets/Rhino.svg" alt="rhinoLogo"/>
        <img src="assets/Sketchup.svg" alt="sketchupLogo"/>
        <img src="assets/Vray.svg" alt="vrayLogo"/>
      </div>

      </div>
    </div>
  )
}
