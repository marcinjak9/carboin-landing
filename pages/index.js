import Lottie from "lottie-react-web";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import hero from "../animations/hero.json";
import bitcoin from "../animations/bitcoin.json";
import network from "../animations/network.json";
import pollution from "../animations/pollution.json";
import '../styles/reset.css'
import '../styles/main.css'
import Counter from "../components/Counter";
import Banner from "../components/Banner";
import Subscribe from "../components/Subscribe";

function Home() {
  return (
    <>
      <Banner />
      <div className="container">
        <div className="row hero">
          <div className="col">
            <div className="title">
              {/* <img src="/static/logo.svg" alt="" className="logo" /> */}
              <img src="/static/TEXT.svg" alt="" className="brand" />
              {/* <h2>Make Bitcoin Green "Again"</h2> */}
              <div className="hero-text">
                {/* We ❤️ Bitcoin, but we ❤️ our Planet too 🌍 */}
                Coin is in the air ❤️
                <span style={{ display: 'block', height: 12 }}></span>
                {/* Bitcoin is a great opportunity even if has an huge environmental problem. Carboin want solve it: our goal is decarbonize the blockchain planting trees.  */}
                {/* Carboin want to solve the enviromental blockchains problem, our goal is decarbonize the blockchain planting trees. */}
                {/* <br/> */}
                {/* Easy, green and very cool. */}
                {/* We want to <b>decarbonize</b> the blockchain by buying carbon credits and/or <b>planting trees</b> for every <b>transaction</b>. */}
              </div>
              {/* <a href="mailto:carboinapp@gmail.com" className="btn">Get in touch!</a> */}
              <Subscribe />
            </div>
          </div>
          <div className="col">
            <Lottie
              options={{
                animationData: hero
              }}
            />
            <Counter />
          </div>
        </div>
        <div className="row project">
          <div className="col">
            <h2>Bitcoin & Environment</h2>
            <p>
            Every transaction is a tree action.
            <br />
            Bitcoin is a great opportunity even if has an huge environmental problem.
            <br />
            Carboin want solve it: our goal is decarbonize the blockchain planting trees. 
            <br />
            Easy, green and very cool.
            </p>
          </div>
          <div className="col">
            <Lottie
              options={{
                animationData: pollution
              }}
            />
          </div>
        </div>
        <div className="row project">
          <div className="col">
            <Lottie
              options={{
                animationData: network
              }}
            />
          </div>
          <div className="col">
            <h2>Why we do that</h2>
            <p>
              Because, first of all, we strongly believe in blockchain like you.
              <br/>
              The environmental impact of bitcoins is very high, but the political decentralisation prospective of the technology is too important to give up the opportunity.
              <br/>
              At the moment the annual carbon emission are near 23 megatons of CO2, the equivalent carbon footprint of Jordan or Sri Lanka.
              <br />
              Every of our bitcoin transaction produce 288 kg of CO2. 
            </p>
          </div>
        </div>
        <div className="row project">
          <div className="col">
            <h2>How it works</h2>
            <p>
            Decarbonise bitcoin it’s possible and pretty easy.
            <br />
            All transactions are public in blockchain, so we can clean and certify our actions.
            <br />
            So we are starting from our transactions buying carbon credits or buying trees and after that we want, togheter with the Green Block community, build a model able to compensate all the blockchain impact on earth. 
            <br />
            At the end we all love pizza. Pizza is very important for us, sustain the project offer us a 5$ Margherita!
            </p>
          </div>
          <div className="col">
            <Lottie
              options={{
                animationData: bitcoin
              }}
            />
          </div>
        </div>
        <section className="row team">
          <div className="col-12">
            <h2 className="section-title">Contributors</h2>
          </div>
          <div className="col">
          <div className="img" style={{backgroundImage: 'url("/static/marcin.jpg")' }} />
            <h4>Marcin 💻</h4>
            <p>Maker & Dev</p>
            {/* <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faInstagram} /> */}
          </div>
          <div className="col">
            <div className="img" style={{backgroundImage: 'url("/static/ale.jpg")' }} />
            <h4>Alessandro 📢</h4>
            <p>Mkt & Communication</p>
          </div>
          <div className="col">
            <div className="img" style={{backgroundImage: 'url("/static/laura2.jpg")' }} />
            <h4>Laura 🖌</h4>
            <p>Illustration</p>
          </div>
          <div className="col">
            <div className="img" style={{backgroundImage: 'url("/static/mat.png")' }} />
            <h4>Matthiew 💰</h4>
            <p>Ambientalist economy</p>
          </div>
        </section>
        <section className="row roadmap-row">
          <div className="col roadmap">
            <h2 className="section-title">Roadmap</h2>
            <h3>August</h3>
            <ul>
              <li>Deliver a MVP of the platform</li>
              <li>Create a Website to present the project</li>
              <li>Win the Fixathon 💪🏼</li>
            </ul>
            <h3>September</h3>
            <ul>
              <li>Study a Revenue Model</li>
              <li>Begin marketing campaigns</li>
              <li>Add new features</li>
              <li>Find more ONGs to collaborate with</li>
            </ul>
            <h3>October</h3>
            <ul>
              <li>Make a Producthunt lauch</li>
              <li>Build a community</li>
              <li>Prepare to mass adoption</li>
            </ul>
            <h3>November</h3>
            <ul>
              <li>Get Rich or die Tryin’</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
