import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

const TeamWrapper = styled.section`
  padding: 10rem 1.5rem;

  .title {
    margin-bottom: 3rem;
  }

  .img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
    background-position: center;
    background-size: cover;
    margin: 0 auto;
  }

  .social {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 40px;

    a {
      margin: 5px;
      transition: color 0.3s;
      color: #999;
      &:hover {
        color: #94c53d;
      }
    }
  }

  .social svg {
    width: 20px;
  }

  .subtitle {
    font-weight: bold;
    margin: 1rem 0 0.2rem 0;
    text-align: center;
  }
  p {
    font-weight: 500;
  }
`;

const Team = () => {
  return (
    <TeamWrapper className="sections">
      <div className="container">
        <h2 className="title has-text-centered">Our awesome team</h2>
        <div className="columns has-text-centered">
          <div className="column">
            <div
              className="img"
              style={{ backgroundImage: 'url("/static/marcin.jpg")' }}
            />
            <h4 className="subtitle has-text-success">Marcin 💻</h4>
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
          <div className="column">
            <div
              className="img"
              style={{ backgroundImage: 'url("/static/ale.jpg")' }}
            />
            <h4 className="subtitle has-text-success">Alessandro 📢</h4>
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
          <div className="column">
            <div
              className="img"
              style={{ backgroundImage: 'url("/static/laura.jpg")' }}
            />
            <h4 className="subtitle has-text-success">Laura 🖌</h4>
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
          <div className="column">
            <div
              className="img"
              style={{ backgroundImage: 'url("/static/mat.png")' }}
            />
            <h4 className="subtitle has-text-success">Matthiew 💰</h4>
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
        </div>
      </div>
    </TeamWrapper>
  );
};

export default Team;
