import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Contributors = () => {
  return (
    <section className="row team">
      <div className="col-12">
        <h2 className="section-title">Contributors</h2>
      </div>
      <div className="col">
      <div className="img" style={{backgroundImage: 'url("/static/marcin.jpg")' }} />
        <h4>Marcin 💻</h4>
        <p>Maker & Dev</p>
        <div className="social">
          <a href="https://github.com/marcinjak9">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/marcin-jakubik-3baa9196/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <div className="col">
        <div className="img" style={{backgroundImage: 'url("/static/ale.jpg")' }} />
        <h4>Alessandro 📢</h4>
        <p>Mkt & Communication</p>
        <div className="social">
          <a href="https://www.facebook.com/alessandro.sahebi">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.linkedin.com/in/alessandro-sahebi/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <div className="col">
        <div className="img" style={{backgroundImage: 'url("/static/laura2.jpg")' }} />
        <h4>Laura 🖌</h4>
        <p>Illustration</p>
        <div className="social">
          <a href="https://www.linkedin.com/in/laura-lofaro-10758713a/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://lofarolaura91.myportfolio.com/">
            <FontAwesomeIcon icon={faGlobe} />
          </a>
        </div>
      </div>
      <div className="col">
        <div className="img" style={{backgroundImage: 'url("/static/mat.png")' }} />
        <h4>Matthiew 💰</h4>
        <p>Ambientalist economy</p>
        <div className="social">
          <a href="#">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faGlobe} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contributors
