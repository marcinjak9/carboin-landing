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
                We ❤️ Bitcoin, but we ❤️ our Planet too 🌍
                <span style={{ display: 'block', height: 12 }}></span>
                We want to <b>decarbonize</b> the blockchain by buying carbon credits and/or <b>planting trees</b> for every <b>transaction</b>.
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
            <h2>Bitcoin has huge 🌱 problem...</h2>
            <p>
              The environmental risk of the bitcoins blockchain is high, at the moment the annual carbon emissions are near <b>23 megatons of CO2</b>,
              the equivalent carbon footprint of the Kansas City metropolitan area or somewhere between the carbon levels of Jordan and Sri Lanka.
              Every bitcoin transaction produces 288 kg of CO2.
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
            <h2>... but decentralisation 🕸 is great...</h2>
            <p>
              We love Bitcoins and other cryptos, it’s a great economical revolution, but we love our planet too!
              Blockchain technology opened a new era of opportunies and decentralization.
            </p>
          </div>
        </div>
        <div className="row project">
          <div className="col">
            <h2>... and we want to keep it going 🚀!</h2>
            <p>
              We want to decarbonise the blockchain by buying carbon credits and/or planting trees for every transaction.
              The transactions are all public in blockchain so we can clean and certify it.
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
            <div className="img" style={{backgroundImage: 'url("/static/laura.jpg")' }} />
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
