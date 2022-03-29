import React from 'react'
import './Projects.scss'

export default function Projects() {



  return (
    <div className="projects" id="myProjects">
      <div className="slider">
        <div className="container">
          <div className="works">
            <div className="leftPro">
              <div className="leftContainer">
                {/* <div className="imgContainer">
                  <img src="assets/Rhino.png" alt="" />
                </div> */}
                <h2>a-z learning</h2>
                <p>A - Z Learning is an educational website with target audiences at the age of 2 to 5 years old children. Features: a -z dictionary with a button that can randomly pick an item that starts with the alphabet letter. Mini-game for children to play with.</p>
              <span>live link</span>
              </div>
            </div>
            <div className="rightPro"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
