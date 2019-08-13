import Lottie from "lottie-react-web";
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
              <h1>Make Bitcoin Green "Again"</h1>
              <div className="hero-text">
                We ❤️ Bitcoin, but we ❤️ our Planet too 🌍
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
        <div className="row roadmap-row">
          <div className="col roadmap">
            <h2>Roadmap</h2>
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
        </div>
      </div>
    </>
  );
}

export default Home;
