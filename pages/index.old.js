import Lottie from "lottie-react-web";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import hero from "../animations/hero.json";
import bitcoin from "../animations/bitcoin.json";
import network from "../animations/network.json";
import pollution from "../animations/pollution.json";
import '../styles/main.scss'
import Counter from "../components/Counter";
import Banner from "../components/Banner";
import Subscribe from "../components/Subscribe";
import Contributors from "../components/Contributors.js";

function Home() {
  return (
    <>
      <Banner />
      <div className="container">
        <div className="row hero">
          <div className="col">
            <div className="title">
              <div className="branding">
                <img src="/static/LOGO_verde.svg" alt="" className="logo" />
                <img src="/static/TEXT.svg" alt="" className="brand" />
              </div>
              <div className="hero-text">
                Coin is in the air ❤️
                <span style={{ display: 'block', height: 12 }}></span>
                Carboin is solving the Bitcoins environmental problem, just planting trees
              </div>
              <Subscribe />
            </div>
          </div>
          <div className="col">
            {/* <Lottie
              options={{
                animationData: hero,
              }}
            /> */}
            <Counter />
          </div>
        </div>
        <div className="row project">
          <div className="col">
            <h2>The enviromental problem</h2>
            <p>
              The environmental impact of bitcoins is very high, but the political decentralization prospective of the technology is too important to give up the opportunity.
              <br />
              At the moment the annual carbon emission are near 23 megatons of CO2, the equivalent carbon footprint of Jordan or Sri Lanka.
            </p>
          </div>
          <div className="col">
            {/* <Lottie
              options={{
                animationData: pollution
              }}
            /> */}
          </div>
        </div>
        <div className="row quote">
          <div className="col-12">
            <h2>Every of our bitcoin transaction produce 288 kg of CO2.</h2>
          </div>
        </div>
        <div className="row project">
          <div className="col">
            {/* <Lottie
              options={{
                animationData: network
              }}
            /> */}
          </div>
          <div className="col">
            <h2>How can we solve it?</h2>
            <p>
              Decarbonise bitcoin it’s possible and pretty easy.
              <br />
              All transactions are public in blockchain, so we can clean and certify our actions.
              <br />
              So we are starting from our transactions buying carbon credits or buying trees and after that we want, togheter with the Green Bloc community, build a model able to compensate all the blockchain impact on earth.
            </p>
          </div>
        </div>
        <div className="row quote">
          <div className="col-12">
            <h2>Bitcoin is the beginning of something great: a currency without a government, something necessary and imperative.</h2>
          </div>
        </div>
        <div className="row project">
          <div className="col">
            <h2>How it works</h2>
            <p>
              Just get your wallet public address, paste it in the app and select the transactions do you want to decarboinze.
              <br />
              Later on you can make a badge and a profile showing how much your wallets are eco-sustainable.
            </p>
          </div>
          <div className="col">
            {/* <Lottie
              options={{
                animationData: bitcoin
              }}
            /> */}
          </div>
        </div>
        <Contributors />
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
