import React, { useEffect } from 'react'
import Markdown from 'react-markdown'
import Hero from '../components/Hero.js';
import Cta from '../components/Cta.js';
import HalfSection from '../components/HalfSection.js';
import PageTitle from '../components/PageTitle.js';
import Quote from '../components/Quote.js';
import Team from '../components/Team';
import Resources from '../components/Resources.js';

function Home() {
  return (
    <>
      <Hero />
      <Cta />
      
      <PageTitle />

      <HalfSection
        position="first"
        title="Bitcoins carbon footprint is high"
        animation="/static/Mining.json"
        direction="right"
        body="
          The environmental impact of Bitcoin is very high. <br>
          At the moment the annual carbon emission linked with Bitcoin is near **23 megatons of CO2**, the equivalent of **Austria’s** carbon footprint."
        cta={{
          text: "More about Bitcoin carbon emissions",
          url: "/the-environmental-problem"
        }}
      />

      <HalfSection
        title="But we can mitigate it"
        animation="/static/Turning_Coin.json"
        direction="left"
        body=" Decarbonize Bitcoin it’s possible and easy.
        <br>
        We can start from our transactions buying **carbon credits** or **planting trees** able to catch tha carbon in the air.
        <br>
        We've created a social app where you can show to the community your contribution and make the difference!
        <br>
        We are working to achieve, in the near future, the **minings’** carbon offset too! "
        cta={{
          text: "Plant a tree!",
          url: "https://app.carboin.org/signup"
        }}
      />

      <HalfSection
        title="Starting from bottom"
        animation="/static/Cash_Meme_02.json"
        animationSmall
        direction="right"
        position="last"
        body="
        With Carboin today you can put the number of your Bitcoin transaction.
        <br>
        Carboin automatically calculate your **CO2 emissions** and allow you to plant trees to achieve your **Bitcoin Carbon Offset**!
        <br>
        We are working hard and soon you’ll able to connect your wallet with carboin!
        "
        cta={{
          text: "Try now!",
          url: "https://app.carboin.org/signup"
        }}
      />


      <Quote title="We strongly believe in Blockchain">
          <Markdown source='
            The **decentralization** prospective of the Bitcoin technology is too important to give up the cryptocurrency opportunity because its environmental impact.
            <br>
            We are convinced that Blockchain can make **the difference** and we are working with the Bitcoin’s community to **overcome** its limits. 
            Every transaction is a tree action!
            <br>
            '
            escapeHtml={false}
          />
            <a href="https://app.carboin.org" className="button is-primary is-inverted is-large">Join us</a>
      </Quote>

      <Team />
      <Resources />
    </>
  )
}

export default Home