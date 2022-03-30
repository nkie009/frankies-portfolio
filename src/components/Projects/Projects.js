import React, { useState } from "react";
import "./Projects.scss";

export default function Projects() {

  const [currentSlide, setCurrentSlide] = useState(0)

  const data = [
    {
      title: "a-z learning",
      des: `A - Z Learning is an educational website with target audiences at the age of 2 to 5 years old children. Features: a -z dictionary with a button that can randomly pick an item that starts with the alphabet letter. Mini-game for children to play with.`,
      img: "assets/a-zproject.png",
      link: "https://a-z-learning.netlify.app/",
    },

    {
      title: "Love Phoebe",
      des: `Love Phoebe Website Project 1, coded an eCommerce within a week using Ruby on Rails, HTML and CSS. The website has a few features, sign-up / login function and included encrypted passwords. Customers can add to the cart and browse the website. Using Heroku to deploy a live website.`,
      img: "assets/lovephoebe.png",
      link: "https://glacial-earth-66043.herokuapp.com/",
    },

    {
      title: "Tic Tac Toe",
      des: `Tic Tac Toe Game Project 0, is a simple game project using JavaScript to code the game and CSS to style the webpage. Added sound effect when user clicks the box and each player can type in their names. Using GitHub to deploy a live website.`,
      img: "assets/tictactoe.png",
      link: "https://nkie009.github.io/tic-tac-toe/",
    },
  ];

  const handleClick = (way) => {
    way === "left" 
    ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2 )
    : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);

  };

  

  return (
    <div className="projects" id="myProjects">
      <div className="slider" 
      style={{ transform: `translateX(-${currentSlide * 100}vw)`}}>

        {data.map((d) => (
          <div className="container">
            <div className="works">
              <div className="leftPro">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <p>{d.des}</p>
                  <span onClick={() => window.open(d.link)}>live link</span>
                </div>
              </div>
              <div className="rightPro">
                <img src={d.img} alt={d.title} />
              </div>
            </div>
          </div>
        ))}

      </div>
      <img className="arrow left" src="assets/leftarrow-01.svg" alt="arrowL" onClick={() => handleClick("left")}/>
      <img className="arrow right" src="assets/leftarrow-01.svg" alt="arrowR" onClick={() => handleClick("right")}/>
    </div>
  );
}
