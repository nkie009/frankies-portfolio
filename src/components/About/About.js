import './About.scss'


export default function About() {


  return (
    <div className="about" id="aboutMe">

      <div className="leftAbout">
        <div className="image">
          <img className="proPic" src="assets/frankie_pic_v2.jpg" alt="frankiePic" />
        </div>
      </div>

      <div className="rightAbout">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Frankie Tsoi</h1>
          <h3>Junior Software Engineer <span><strike>/ Design Coordinator </strike></span>
          </h3>
          <div className="paraAbout">I am a junior software engineer with a passion for the front-end field and have 10+ years of Graphic Design experience on my belt. Looking to join a fun and dynamic team which is working on exciting projects.</div>
        </div>
      </div>


    </div>
  )
}
