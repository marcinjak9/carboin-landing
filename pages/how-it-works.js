import React from 'react'
import Hero from '../components/Hero';
import SimpleHero from '../components/SimpleHero';
import HalfSection from '../components/HalfSection';
import Quote from '../components/Quote';
import Resources from '../components/Resources';
import Team from '../components/Team';
import Graph from '../components/Graph';
import Projects from '../components/Projects';
const html = `<style>.bmc-button img{width: 27px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{line-height: 36px !important;height:37px !important;text-decoration: none !important;display:inline-flex !important;color:#ffffff !important;background-color:#BB5794 !important;border-radius: 3px !important;border: 1px solid transparent !important;padding: 1px 9px !important;font-size: 22px !important;letter-spacing:0.6px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Cookie', cursive !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#ffffff !important;}</style><link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/carboin"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/BMC-btn-logo.svg" alt="Buy me a coffee"><span style="margin-left:5px">Buy me a coffee</span></a>`
const HowItWorks = () => {
  return (
    <div>
      <SimpleHero
        title="With Carboin today you can put the number of your Bitcoin"
        subtitle="Carboin automatically calculate your CO2 emissions and allow you to plant trees to achieve your Bitcoin Carbon Offset!"
      />
      <section className="section">
        <div className="container">
          <h2 className="title has-text-centered">
            What carboin do
          </h2>
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <p style={{ fontSize: '1.3rem' }}>
                Today you can fight with us against climate change with a carbon offset of your transactions. Decarbonize Bitcoin it’s possible and easy. All transactions are public in blockchain, so we can clean it and certify our carbon emissions. Today you can simply put the transaction’s number on Carboin and automatically calculate the CO2 emissions but its not enough! We are working hard for that and soon you’ll able to connect your wallet public address with carboin! 
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="title has-text-centered">
            Support us!
          </h2>
          <div className="columns">
            <div className="column has-text-centered">
              <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
                You can help us grow simply buying us a coffe ☕️
              </p>
                <div dangerouslySetInnerHTML={{ __html: html }}></div>
            </div>
          </div>
        </div>
      </section>
      <Projects />
      <Team />
      <Resources />
    </div>
  )
}

export default HowItWorks
