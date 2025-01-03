import React from 'react'
import './home.css'
import Abdelhadi from '../../images/Eleric.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div className='home' id="home">
        <div className="container">
          <div className="home_content">
            <div className="text_content">
              <h6>Available for work</h6>
              <h1>My Name is <span>Abdelhadi</span></h1>
              <h3>Developpeur Full Stack</h3>
              <p>Transforming Ideas into Seamless Digital Solutions</p>
              <div className="hire_me_button">
                <span>Hire Me</span>
                <a href="#contact">
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>
            <div className="image_content">
            <div class="outer-circle">
              <div class="dot"></div>
            </div>

            <div class="inner-circle">
              <div class="dot"></div>
            </div>

            <div class="profile-image">
              <img src={Abdelhadi} alt="Profile" />
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home