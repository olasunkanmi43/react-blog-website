import React from 'react'
import AboutImg from '../assets/aboutus.jpg'

const Aboutus = () => {
  return (
    <div className="aboutus container">
      <div className="aboutus_img">
        <img src={AboutImg} alt="about us" />
      </div>
      <div className="aboutus_content">
        <h1>About us</h1>
        <h2>What we believe in</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          dolor, assumenda, et praesentium eaque natus aut voluptate ratione
          facilis saepe laboriosam labore quae perspiciatis quas. Atque
          doloremque sequi distinctio inventore?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          laborum fugit voluptas voluptatum, itaque odit vel distinctio earum
          vero! Veritatis explicabo cupiditate ad aspernatur omnis minus
          distinctio quo commodi sint!
        </p>
        <a href="#" className="button">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Aboutus
