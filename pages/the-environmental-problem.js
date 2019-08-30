import React from 'react'
import Hero from '../components/Hero';
import SimpleHero from '../components/SimpleHero';
import HalfSection from '../components/HalfSection';
import Quote from '../components/Quote';
import Resources from '../components/Resources';
import Team from '../components/Team';
import Graph from '../components/Graph';

const Environment = () => {
  return (
    <div>
      <SimpleHero
        title="Huston, we have a problem with the earth!"
        subtitle="The world is on fire and everybody knows. Blockchain has a huge responsibility on that, but few of us are aware of it."
        image="/static/assets/Farm.svg"
      />
      <HalfSection
        position="first"
        position="small"
        title="Bitcoin and climate change"
        direction="right"
        image="/static/photos/pollution.jpg"
        body="Blockchain has a huge responsibility for climate change, but few of us are aware of it.
        At the moment the annual carbon emissions are near 23 megatons of CO2, the equivalent of Australia's carbon footprint."
      />
      <HalfSection
        title="Cryptography is hard"
        direction="left"
        position="small"
        image="/static/photos/farming.jpg"
        body="Burning huge amounts of electricity aren’t incidental to bitcoin: mining and transactions are based on cryptography, and his safety is based on the computational power needed."
      />
      <HalfSection
        title="Blockchain's opportunity"
        direction="right"
        position="small"
        image="/static/photos/planting.jpg"
        body="Like you, we think that Bitcoin is a great political and financial opportunity even if has a huge environmental problem. All of us, like you, are convinced that no longer we can keep the eyes closed. We are convinced that Carboin can make the difference. Our goal is easy and green: decarbonize the blockchain planting trees. And we need your help to fulfill the mission."
      />
      <Graph />
      <Quote title="Decarbonize Bitcoin it’s possible and easy.">
        <p>
          We are starting from our transactions buying carbon credits or planting trees able to catch tha carbon in the air. We are working to achieve, in the near future, the minings’ carbon offset too! 
        </p>
        <a href="https://app.carboin.org" className="button is-primary is-inverted is-large">Discover</a>
      </Quote>
      <Team />
      <Resources />
    </div>
  )
}

export default Environment
